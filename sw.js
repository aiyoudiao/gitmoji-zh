if (!self.define) {
  let i,
    e = {}
  const s = (s, t) => (
    (s = new URL(s + '.js', t).href),
    e[s] ||
      new Promise((e) => {
        if ('document' in self) {
          const i = document.createElement('script')
          ;(i.src = s), (i.onload = e), document.head.appendChild(i)
        } else (i = s), importScripts(s), e()
      }).then(() => {
        let i = e[s]
        if (!i) throw new Error(`Module ${s} didn’t register its module`)
        return i
      })
  )
  self.define = (t, a) => {
    const c =
      i ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (e[c]) return
    let n = {}
    const o = (i) => s(i, c),
      r = { module: { uri: c }, exports: n, require: o }
    e[c] = Promise.all(t.map((i) => r[i] || o(i))).then((i) => (a(...i), n))
  }
}
define(['./workbox-8c8aeaed'], function (i) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    i.clientsClaim(),
    i.precacheAndRoute(
      [
        {
          url: '/gitmoji-zh/static/static/QqOFOcKoxQS5zbnh3J8m9/_buildManifest.js',
          revision: '3fa120f7612884967ab69778aa30eb0e',
        },
        {
          url: '/gitmoji-zh/static/static/QqOFOcKoxQS5zbnh3J8m9/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/gitmoji-zh/static/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/gitmoji-zh/static/static/css/1833025593805491.css',
          revision: '1833025593805491',
        },
        {
          url: '/gitmoji-zh/static/static/css/65c967b5999f1104.css',
          revision: '65c967b5999f1104',
        },
        {
          url: '/gitmoji-zh/static/static/css/6f7b242980488042.css',
          revision: '6f7b242980488042',
        },
        {
          url: '/gitmoji-zh/static/static/css/73df571ad83878cc.css',
          revision: '73df571ad83878cc',
        },
        {
          url: '/gitmoji-zh/static/static/js/358.js',
          revision: '36384e94dd33ae947d8ced287f58230b',
        },
        {
          url: '/gitmoji-zh/static/static/js/393.js',
          revision: 'db66b919cf1afc40f532906c8d7b398e',
        },
        {
          url: '/gitmoji-zh/static/static/js/900.js',
          revision: '8be7c5ad73db351c4bb0396e88ac2360',
        },
        {
          url: '/gitmoji-zh/static/static/js/framework.js',
          revision: '02081f9f85f61e0ab0c988f49b36cbbc',
        },
        {
          url: '/gitmoji-zh/static/static/js/main.js',
          revision: '4fa7beb1b2fa55dcc311a0318c035315',
        },
        {
          url: '/gitmoji-zh/static/static/js/pages/_app.js',
          revision: 'c84daa54ce945b29a48560e83001e1eb',
        },
        {
          url: '/gitmoji-zh/static/static/js/pages/_error.js',
          revision: '84e59dc79b43af65cb4f26b411904382',
        },
        {
          url: '/gitmoji-zh/static/static/js/pages/about.js',
          revision: '75529c82d97d604ba24e1114bb143de7',
        },
        {
          url: '/gitmoji-zh/static/static/js/pages/contributors.js',
          revision: '85fdefd8b1c2b209c332e2786cfdbdfc',
        },
        {
          url: '/gitmoji-zh/static/static/js/pages/index.js',
          revision: 'ea367cb99447c59e228c4edbb1787791',
        },
        {
          url: '/gitmoji-zh/static/static/js/pages/related-tools.js',
          revision: '9a5c0604d1e764968e3d2e5780d39e58',
        },
        {
          url: '/gitmoji-zh/static/static/js/pages/specification.js',
          revision: '5d74a9cc65879607e885076958d10aa5',
        },
        {
          url: '/gitmoji-zh/static/static/js/webpack.js',
          revision: '71bcbbd1bbf4e702d9ed611acb0e9d4c',
        },
        {
          url: '/gitmoji-zh/static2/android-icon-144x144.png',
          revision: '19f6387266e9d4909d35e799ebff257b',
        },
        {
          url: '/gitmoji-zh/static2/android-icon-192x192.png',
          revision: '518eb455976259bfc059c737ad4b116f',
        },
        {
          url: '/gitmoji-zh/static2/android-icon-36x36.png',
          revision: 'b2142412663a2572fca05b7a90246af3',
        },
        {
          url: '/gitmoji-zh/static2/android-icon-48x48.png',
          revision: 'd625f435a1ff018480245a90a5c5d69b',
        },
        {
          url: '/gitmoji-zh/static2/android-icon-512x512.png',
          revision: '11a024ae46dec20b77bee5463cfb14d1',
        },
        {
          url: '/gitmoji-zh/static2/android-icon-72x72.png',
          revision: 'a750a2ed4cda004e27cc5da8396a8ef5',
        },
        {
          url: '/gitmoji-zh/static2/android-icon-96x96.png',
          revision: 'e5a2fb4d38fec059063849668357c0e1',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-114x114.png',
          revision: 'fd6b5857baaa61cb804793531433aa29',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-120x120.png',
          revision: '205a69e7448a44ff015c2886110630df',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-144x144.png',
          revision: '19f6387266e9d4909d35e799ebff257b',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-152x152.png',
          revision: '253d8afb4df01e0830c4a2d343b526af',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-180x180.png',
          revision: '67f5e431c2df95191dc2be1891c7df51',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-57x57.png',
          revision: '6a973d83eb6c9f7049b3bb8839e79033',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-60x60.png',
          revision: '8aa47cbb0d734031e65984f824f12ab2',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-72x72.png',
          revision: 'a750a2ed4cda004e27cc5da8396a8ef5',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-76x76.png',
          revision: 'ba4a07816ce495b3d60a4634d2824b41',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon-precomposed.png',
          revision: 'b5d5868acc80b1b621414e6b56d84fb0',
        },
        {
          url: '/gitmoji-zh/static2/apple-icon.png',
          revision: 'b5d5868acc80b1b621414e6b56d84fb0',
        },
        {
          url: '/gitmoji-zh/static2/browserconfig.xml',
          revision: 'b61c2a2c6854e285b55b79673ae700c9',
        },
        {
          url: '/gitmoji-zh/static2/favicon-16x16.png',
          revision: 'db1c26f319f953afb2e50c5bda300b25',
        },
        {
          url: '/gitmoji-zh/static2/favicon-32x32.png',
          revision: '8ac3d505923eaa43ef3c72f628c8594f',
        },
        {
          url: '/gitmoji-zh/static2/favicon-96x96.png',
          revision: 'e5a2fb4d38fec059063849668357c0e1',
        },
        {
          url: '/gitmoji-zh/static2/favicon.ico',
          revision: 'd75913a1e7d6e4e09f08e73ddd442af4',
        },
        {
          url: '/gitmoji-zh/static2/gitmoji.gif',
          revision: 'f63c28a54be0362584d3ecad72417ae9',
        },
        {
          url: '/gitmoji-zh/static2/gitmoji.svg',
          revision: '53f7aecfe5e25cbbd8f1cd07919d585a',
        },
        {
          url: '/gitmoji-zh/static2/manifest.json',
          revision: 'e920656d51d1cf75061d8d043b47a3b0',
        },
        {
          url: '/gitmoji-zh/static2/maskable_icon.png',
          revision: '5e0a576bbfa75012ce4c1484f6a964d1',
        },
        {
          url: '/gitmoji-zh/static2/ms-icon-144x144.png',
          revision: '19f6387266e9d4909d35e799ebff257b',
        },
        {
          url: '/gitmoji-zh/static2/ms-icon-150x150.png',
          revision: '2f21c57327287666eb205305017e5363',
        },
        {
          url: '/gitmoji-zh/static2/ms-icon-310x310.png',
          revision: 'b7b1f76a5a45052ca74b2fb63d10d920',
        },
        {
          url: '/gitmoji-zh/static2/ms-icon-70x70.png',
          revision: '38abcf6d8b3ea4471356345769d5c3fe',
        },
        {
          url: '/gitmoji-zh/static2/opensearchdescription.xml',
          revision: '9d7f1051e975b2cb953191b0986747a8',
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    i.cleanupOutdatedCaches(),
    i.registerRoute(
      '/gitmoji-zh',
      new i.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: i,
              response: e,
              event: s,
              state: t,
            }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new i.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new i.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\/aseests\/image\?url=.+$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new i.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new i.RangeRequestsPlugin(),
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\.(?:mp4)$/i,
      new i.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new i.RangeRequestsPlugin(),
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\.(?:js)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\.(?:css|less)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\/aseests\/data\/.+\/.+\.json$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new i.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      ({ url: i }) => {
        if (!(self.origin === i.origin)) return !1
        const e = i.pathname
        return !e.startsWith('/api/auth/') && !!e.startsWith('/api/')
      },
      new i.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      ({ url: i }) => {
        if (!(self.origin === i.origin)) return !1
        return !i.pathname.startsWith('/api/')
      },
      new i.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    i.registerRoute(
      ({ url: i }) => !(self.origin === i.origin),
      new i.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    )
})
