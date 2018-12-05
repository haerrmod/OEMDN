# -*- coding: utf-8 -*-
"""
:author: Jaroslaw Zima
:contact: jaroslaw.zima@gmail.com
"""
from aiohttp import web
from OEMDN.backend import server


web.run_app(server.app, host='localhost', port=8080)
