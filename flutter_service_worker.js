'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8bb8a6f3152c2c5f62c9029a481d916d",
"assets/AssetManifest.bin.json": "714fcdc13681d793845fe434b8c52d3f",
"assets/AssetManifest.json": "67b5d5d952ee89e18dd0b5126f66787c",
"assets/assets/%25D8%25A7%25D9%2584%25D8%25AD%25D9%2583%25D9%2585%25D8%25A9.jpg": "fdfe34bda23fc76099abe26cfa2d8355",
"assets/assets/%25D8%25AD%25D8%25A7%25D8%25B1%25D8%25B3%2520%25D8%25A7%25D9%2584%25D9%2585%25D8%25B9%25D8%25A8%25D8%25AF.jpg": "7f08ee7bef0b8ff1cde40e5297ce3b67",
"assets/assets/%25D8%25AD%25D8%25A7%25D8%25B1%25D8%25B3%2520_%25D8%25A7%25D9%2584%25D9%2585%25D8%25B9%25D8%25A8%25D8%25AF.jpg": "5312b4806a6f8fcd1e580874e53434a4",
"assets/assets/%25D8%25B9%25D9%2585%25D9%2584%2520%25D9%2585%25D8%25AC%25D8%25B2%25D8%25A1.jpg": "2b225c5b6d955416ce21f4e275eb7d18",
"assets/assets/%25D9%2582%25D8%25B1%25D9%258A%25D9%2587%2520%25D8%25AD%25D8%25B3%25D9%2586%2520%25D9%2581%25D8%25AA%25D8%25AD%25D9%258A%2520%25D8%25A8%25D8%25A7%25D9%2584%25D8%25A7%25D9%2582%25D8%25B5%25D8%25B1.jpg": "cd1830890d5d81575fb035776c460d49",
"assets/assets/%25D9%2585%25D8%25B1%25D8%25A7%25D9%2583%25D8%25A8%2520%25D8%25A7%25D9%2584%25D8%25A7%25D9%2582%25D8%25B5%25D8%25B1.jpg": "51609a6dedfb1842d90b86658aa80e86",
"assets/assets/%25D9%2585%25D8%25B9%25D8%25A8%25D8%25AF%2520%25D8%25A7%25D9%2584%25D8%25A7%25D9%2582%25D8%25B5%25D8%25B1.jpg": "7c48ec30f00c684ac2f66305b8725e31",
"assets/assets/%25D9%2585%25D9%2588%25D8%25B1%25D9%2588%25D8%25AB.jpg": "d376c7a8ffd456f6a7137ffc7ea920a0",
"assets/assets/home.jpg": "93b218ba7b449ec6ef3722b5178ab559",
"assets/assets/no%2520title1.jpg": "587bc1ec526312f50016ddafe5fd1a02",
"assets/assets/no%2520title2.jpg": "e08187ef2c11814a1d835ee391f48f22",
"assets/assets/no%2520title3.jpg": "8b3933caf48f91799a9360bc6c2817c7",
"assets/assets/no%2520title4.jpg": "02daad603d971f8d9e24bb1797c27134",
"assets/assets/no%2520title5.jpg": "dbf561cf7467ba1be745aa561e72458e",
"assets/assets/no%2520title6.jpg": "39f7c7514bd62c3c338be29ea5f141e1",
"assets/assets/no%2520title7.jpg": "560b3739d532d112482e1e6d8268a94d",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "694f97dedda3cccc590e09619282ee75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "7a9fd851c222836a42e790500991bffd",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "a5f8ef2070e4299e004a07ceae2a4651",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6828cf9350921a37746d83763529eec6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9a4692680a27f6ea6ecc367452eab3c",
"/": "c9a4692680a27f6ea6ecc367452eab3c",
"main.dart.js": "91ca6d8f6bc4ef1f799c788a908dcde5",
"manifest.json": "793159a79a678bc12816af5cac71d38d",
"version.json": "c24433fd84476f8abf5052d8d1a6c1be"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
