// This optional code is used to register a service worker.
2
// register() is not called by default.
3
4
// This lets the app load faster on subsequent visits in production, and gives
5
// it offline capabilities. However, it also means that developers (and users)
6
// will only see deployed updates on subsequent visits to a page, after all the
7
// existing tabs open on the page have been closed, since previously cached
8
// resources are updated in the background.
9
10
// To learn more about the benefits of this model and instructions on how to
11
// opt-in, read http://bit.ly/CRA-PWA
12
13
const isLocalhost = Boolean(
14
  window.location.hostname === 'localhost' ||
15
    // [::1] is the IPv6 localhost address.
16
    window.location.hostname === '[::1]' ||
17
    // 127.0.0.1/8 is considered localhost for IPv4.
18
    window.location.hostname.match(
19
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
20
    )
21
);
22
23
export function register(config) {
24
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
25
    // The URL constructor is available in all browsers that support SW.
26
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
27
    if (publicUrl.origin !== window.location.origin) {
28
      // Our service worker won't work if PUBLIC_URL is on a different origin
29
      // from what our page is served on. This might happen if a CDN is used to
30
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
31
      return;
32
    }
33
34
    window.addEventListener('load', () => {
35
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
36
37
      if (isLocalhost) {
38
        // This is running on localhost. Let's check if a service worker still exists or not.
39
        checkValidServiceWorker(swUrl, config);
40
41
        // Add some additional logging to localhost, pointing developers to the
42
        // service worker/PWA documentation.
43
        navigator.serviceWorker.ready.then(() => {
44
          console.log(
45
            'This web app is being served cache-first by a service ' +
46
              'worker. To learn more, visit http://bit.ly/CRA-PWA'
47
          );
48
        });
49
      } else {
50
        // Is not localhost. Just register service worker
51
        registerValidSW(swUrl, config);
52
      }
53
    });
54
  }
55
}
56
57
function registerValidSW(swUrl, config) {
58
  navigator.serviceWorker
59
    .register(swUrl)
60
    .then(registration => {
61
      registration.onupdatefound = () => {
62
        const installingWorker = registration.installing;
63
        if (installingWorker == null) {
64
          return;
65
        }
66
        installingWorker.onstatechange = () => {
67
          if (installingWorker.state === 'installed') {
68
            if (navigator.serviceWorker.controller) {
69
              // At this point, the updated precached content has been fetched,
70
              // but the previous service worker will still serve the older
71
              // content until all client tabs are closed.
72
              console.log(
73
                'New content is available and will be used when all ' +
74
                  'tabs for this page are closed. See http://bit.ly/CRA-PWA.'
75
              );
76
77
              // Execute callback
78
              if (config && config.onUpdate) {
79
                config.onUpdate(registration);
80
              }
81
            } else {
82
              // At this point, everything has been precached.
83
              // It's the perfect time to display a
84
              // "Content is cached for offline use." message.
85
              console.log('Content is cached for offline use.');
86
87
              // Execute callback
88
              if (config && config.onSuccess) {
89
                config.onSuccess(registration);
90
              }
91
            }
92
          }
93
        };
94
      };
95
    })
96
    .catch(error => {
97
      console.error('Error during service worker registration:', error);
98
    });
99
}
100
101
function checkValidServiceWorker(swUrl, config) {
102
  // Check if the service worker can be found. If it can't reload the page.
103
  fetch(swUrl)
104
    .then(response => {
105
      // Ensure service worker exists, and that we really are getting a JS file.
106
      const contentType = response.headers.get('content-type');
107
      if (
108
        response.status === 404 ||
109
        (contentType != null && contentType.indexOf('javascript') === -1)
110
      ) {
111
        // No service worker found. Probably a different app. Reload the page.
112
        navigator.serviceWorker.ready.then(registration => {
113
          registration.unregister().then(() => {
114
            window.location.reload();
115
          });
116
        });
117
      } else {
118
        // Service worker found. Proceed as normal.
119
        registerValidSW(swUrl, config);
120
      }
121
    })
122
    .catch(() => {
123
      console.log(
124
        'No internet connection found. App is running in offline mode.'
125
      );
126
    });
127
}
128
129
export function unregister() {
130
  if ('serviceWorker' in navigator) {
131
    navigator.serviceWorker.ready.then(registration => {
132
      registration.unregister();
133
    });
134
  }
135
}
