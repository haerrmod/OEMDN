# -*- coding: utf-8 -*-
"""
:author: Jaroslaw Zima
:contact: jaroslaw.zima@gmail.com
"""
import aiohttp_jinja2
import jinja2
from aiohttp import web

from OEMDN.backend import routes


app_server = web.Application()
aiohttp_jinja2.setup(app_server, loader=jinja2.FileSystemLoader('../frontend/html/'))
app_server.add_routes(routes.routing)
