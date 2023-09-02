importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js');

workbox.routing.registerRoute(
	({request}) => request.destination === 'image',
	new workbox.strategies.NetworkFirst()
)

