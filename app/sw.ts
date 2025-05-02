/// <reference lib="webworker" />

// This service worker can be customized
// See https://developers.google.com/web/tools/workbox/modules
// for more information on the available libraries

declare const self: ServiceWorkerGlobalScope

const CACHE_NAME = "bet88-app-v1"

// Add list of files to cache here
const urlsToCache = [
  "/",
  "/manifest.json",
  "https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png",
  "https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg",
]

self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
  // Force the waiting service worker to become the active service worker
  self.skipWaiting()
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          // Don't cache if the URL has a query string
          if (!event.request.url.includes("?")) {
            cache.put(event.request, responseToCache)
          }
        })

        return response
      })
    }),
  )
})

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
          return null
        }),
      )
    }),
  )
  // Claim any clients immediately
  self.clients.claim()
})

