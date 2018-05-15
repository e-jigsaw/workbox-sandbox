/* global workbox */
workbox.routing.registerRoute(/.*\.js$/, workbox.strategies.cacheFirst())

workbox.routing.registerRoute(/.*\.css$/, workbox.strategies.cacheFirst())
