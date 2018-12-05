# -*- coding: utf-8 -*-
"""
:author: Jaroslaw Zima
:contact: jaroslaw.zima@gmail.com
"""
from aiohttp import web

from .handlers import main_view

routing = [
    web.get('/', main_view.handle)
]
