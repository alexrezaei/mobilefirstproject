const baseUrl = "https://lekseroggreier.com/wp-json/wp/v2/posts/";
const eventPage = document.querySelector("#event-page");
async function loadEvents(url) {
  const res = await fetch(url);
  const posts = await res.json();
  console.log();
  for (let i = 0; i < posts.length; i++) {
    let imageUrl = `${posts[i]["_links"]["wp:featuredmedia"][0].href}`;
    let imageRes = await fetch(imageUrl);
    let imageResult = await imageRes.json();
    eventPage.innerHTML += `
    <div class="flex-wrap">
    <div class="event-image">
        <img src="${imageResult.guid.rendered}" alt="Image of vintage plane in the sky">
    </div>
    <div class="event-text">
        <h3 class="header-primary">${posts[i].title.rendered}</h3>
          ${posts[i].content.rendered}
        <span class="event-date"> 19. april</span>
    </div>
  </div>
    `;
  }
}

loadEvents(baseUrl);
