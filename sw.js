// Retirement worker: removes the previous advertising push service worker.
// No advertising libraries are loaded.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const subscription = await self.registration.pushManager?.getSubscription();
      if (subscription) await subscription.unsubscribe();
    } catch (error) {
      // Continue unregistering even when a push subscription cannot be read.
    }
    await self.registration.unregister();
  })());
});
