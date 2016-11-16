// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').then(function(registration) {
//     // Registration was successful
//     console.log('ServiceWorker registration successful with scope: ', registration.scope);
//   }).catch(function(err) {
//     // registration failed :(
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }

(async() => {
  try {
    const
      outputArea = document.querySelector('.rss-container'),
      fetchURL = 'http://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fpolitiken.dk%2Frss%2Findland.rss',
      fetchOptions = {
        method: 'get'
      },
      response = await fetch(fetchURL, fetchOptions),
      data = await response.json();
    for (var i = 0; i < data.items.length; i++) {
      outputArea.innerHTML += `
        <a class="news-item" href="${data.items[i].link}">
          <h2>${data.items[i].title}</h2>
          <p>${data.items[i].content}</p>
        </a>
      `;
    }
  } catch (e) {
    console.log('ERROR: ' + e);
  }
})();
