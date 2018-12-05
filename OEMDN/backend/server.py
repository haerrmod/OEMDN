# -*- coding: utf-8 -*-
"""
:author: Jaroslaw Zima
:contact: jaroslaw.zima@gmail.com
"""
from pathlib import PurePath

import aiohttp_jinja2
import jinja2
from aiohttp import web

from OEMDN.backend import routes

PATH_TO_TEMPLATES = PurePath(__file__).parent / '..' / 'templates'
PATH_TO_STATICS = PurePath(__file__).parent / '..' / 'static'

app = web.Application()
aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader(str(PATH_TO_TEMPLATES)))
app.add_routes(routes.routing)
app.router.add_static('/static/', PATH_TO_STATICS, name='static')
