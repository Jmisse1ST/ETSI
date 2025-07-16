workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
   new workbox.strategies.NetworkFirst()
);