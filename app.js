let posts = [
  {
    id: 1,
    author: "mariaisabel",
    title: "Primeros resultados de mi simulación en Python",
    media: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    content: "Estuve corriendo unos scripts para estructurar datos.",
    visibility: "Público",
    likes: 8,
    comments: ["¡Genial avance!", "Sigue así 👏"]
  },
  {
    id: 2,
    author: "carlos_dev",
    title: "Tarde de café y maquetación CSS",
    media: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    content: "Organizando el feed con CSS Grid y Flexbox.",
    visibility: "Público",
    likes: 14,
    comments: ["El tono amarillo pastel se ve muy bien."]
  }
];

const postsGrid = document.getElementById("postsGrid");

document.addEventListener("DOMContentLoaded", () => {
  renderPosts(posts);
});

function renderPosts(postsToRender) {
  postsGrid.innerHTML = "";
  if (postsToRender.length === 0) {
    postsGrid.innerHTML = "<p>No hay publicaciones.</p>";
    return;
  }
  postsToRender.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card";
    card.innerHTML = `
      <div>
        <div class="post-card-header">
          <div class="author-info"><span>👤</span><span>@${post.author}</span></div>
          <span class="badge">${post.visibility === "Público" ? "🟢 Público" : "🔒 Privado"}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <img src="${post.media}" alt="${post.title}" class="post-media">
      </div>
      <div class="post-card-footer">
        <button class="like-btn" onclick="handleLike(${post.id})">❤️ <span>${post.likes}</span></button>
        <ul class="comments-list">${post.comments.map(c => `<li>${c}</li>`).join("")}</ul>
      </div>
    `;
    postsGrid.appendChild(card);
  });
}

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    if (filter === "all") {
      renderPosts(posts);
    } else {
      renderPosts(posts.filter(p => p.visibility === filter));
    }
  });
});