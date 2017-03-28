// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').then(function(registration) {
//     // Registration was successful
//     console.log('ServiceWorker registration successful with scope: ', registration.scope);
//   }).catch(function(err) {
//     // registration failed :(
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }

(async () => {
  try {
    const outputArea = document.querySelector('.rss-container');
    const fetchURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fpolitiken.dk%2Frss%2Fsenestenyt.rss';
    const fetchOptions = {
      method: 'get',
    };
    const response = await fetch(fetchURL, fetchOptions);
    const data = await response.json();
    for (let i = 0; i < data.items.length; i++) {
      const item = data.items[i];
      outputArea.innerHTML += `
        <a class="news-item" href="${item.link}">
          <span class="news-item__label">${item.categories[0]}</span>
          <h2 class="news-item__headline">${item.title}</h2>
          <p class="news-item__teaser">${item.content}</p>
        </a>
      `;
    }
  } catch (e) {
    console.error(`ERROR: ${e}`);
  }
})();
