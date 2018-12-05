function render_sections_and_content(clicked_item, sections_id, file_path){
	$('span').removeClass('__selected_item');
	$(clicked_item).addClass('__selected_item');
	$('.__sections_div').hide();
	$('#' + sections_id).show();
	var html_path = $('#' + sections_id).attr('data-html');
	$('#__content').empty();
	$('#__content').load(escape(html_path));
	$('#__content_file').html('<span><b>Displaying notes from:</b> <span style="padding-left:20px;">' + file_path + '</span></span>');
}

function scroll_to_place(clicked_header){
    var spans_in_parent = $(clicked_header).parent('div').children('span');
    var clicked_header_index = -1;
    for (var i = 0; i < spans_in_parent.length; i++){
        if (clicked_header == spans_in_parent[i]){
            clicked_header_index = i;
        }
    }
    var headers_in_content = $('#__content').find(':header');
    for (var i = 0; i < headers_in_content.length; i++){
        if (i == clicked_header_index){
            $('#__content').scrollTop($('#__content').scrollTop() + $(headers_in_content[i]).position().top - '40');
            break;
        }
    }
}


function __hide_column(clicked_item){
    var parent = $(clicked_item).parent('div');
    var grandparent = $(parent).parent('div');
    var siblings = $(grandparent).children('div');
    var parent_index_in_siblings;
    for (var i=0; i < siblings.length; i++) {
        if ($(parent).attr('class') == $(siblings[i]).attr('class')) {
            $(siblings[i - 1]).css('display', 'flex');
            $(parent).hide();
            break;
        }
    }
}

function __display_column(clicked_item){
    var parent = $(clicked_item).parent('div');
    var column_siblings = $(parent).children('div.__column');
    var clicked_item_text = $(clicked_item).find('div').text();
    for (var i=0; i < column_siblings.length; i++) {
        var siblings_first_child = $(column_siblings[i]).children('div')[0];
        if (clicked_item_text == $(siblings_first_child).text()) {
            $(clicked_item).hide();
            $(column_siblings[i]).show();
            break;
        }
    }
}

function __toggle_column(){
	$('body').keypress(function(event){
		if (event.originalEvent.key === 'S'){
			var sections_column = $('div.__column > div:nth-child(1):contains(\'SECTIONS\')').parent('div');
			if ($(sections_column).css('display') == 'none'){
				$(sections_column).show();
				$('div.__compressed_overlay > div:nth-child(1):contains(\'SECTIONS\')').parent('div').hide();
			} else {
				$(sections_column).hide();
				$('div.__compressed_overlay > div:nth-child(1):contains(\'SECTIONS\')').parent('div').css('display', 'flex');
			}
		}else if (event.originalEvent.key === 'T'){
			var sections_column = $('div.__column > div:nth-child(1):contains(\'TOPICS\')').parent('div');
			if ($(sections_column).css('display') == 'none'){
				$(sections_column).show();
				$('div.__compressed_overlay > div:nth-child(1):contains(\'TOPICS\')').parent('div').hide();
			} else {
				$(sections_column).hide();
				$('div.__compressed_overlay > div:nth-child(1):contains(\'TOPICS\')').parent('div').css('display', 'flex');
			}
		}
	});
}

__toggle_column();
