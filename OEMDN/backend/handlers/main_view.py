# -*- coding: utf-8 -*-
"""
:author: Jaroslaw Zima
:contact: jaroslaw.zima@gmail.com
"""
import aiohttp_jinja2


@aiohttp_jinja2.template('html/base_index.html')
async def handle(request):
    return {
        'title': 'tajtel',
        'default_css_styles': 'stajls',
        'notebook_title': 'noutbuk tajtel',
        'topics_content': 'topiks kantent',
        'sections_content': 'sekszyns kantent',
        'default_js_scripts': 'dzej es skripts'
    }
