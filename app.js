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
let currentUser = "";
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const postForm = document.getElementById("postForm");
const userGreeting = document.getElementById("userGreeting");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  let valid = true;

  if (!username) { showError("usernameError", "El usuario es obligatorio"); valid = false; }
  else clearError("usernameError");

  if (!email.includes("@") || !email.includes(".")) { showError("emailError", "Correo no válido"); valid = false; }
  else clearError("emailError");

  if (password.length < 6) { showError("passwordError", "Mínimo 6 caracteres"); valid = false; }
  else clearError("passwordError");

  if (valid) {
    currentUser = username;
    userGreeting.textContent = `@${currentUser}`;
    loginModal.style.display = "none";
  }
});

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("postTitle").value.trim();
  const media = document.getElementById("postMedia").value.trim();
  const content = document.getElementById("postContent").value.trim();
  const visibility = document.getElementById("postVisibility").value;
  let valid = true;

  if (title.length < 5) { showError("postTitleError", "Mínimo 5 caracteres"); valid = false; }
  else clearError("postTitleError");

  if (!content) { showError("postContentError", "El contenido no puede estar vacío"); valid = false; }
  else clearError("postContentError");

  if (valid) {
    posts.unshift({
      id: Date.now(),
      author: currentUser || "Anónimo",
      title,
      media: media || "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
      content,
      visibility,
      likes: 0,
      comments: []
    });
    renderPosts(posts);
    postForm.reset();
  }
});

function showError(id, msg) { document.getElementById(id).textContent = msg; }
function clearError(id) { document.getElementById(id).textContent = ""; }

window.handleLike = function(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
    post.likes++;
    renderPosts(posts);
  }
};

window.handleAddComment = function(id) {
  const input = document.getElementById(`comment-input-${id}`);
  const text = input ? input.value.trim() : "";
  if (text) {
    const post = posts.find(p => p.id === id);
    if (post) {
      post.comments.push(`<strong>${currentUser ? '@' + currentUser : 'Anónimo'}:</strong> ${text}`);
      renderPosts(posts);
    }
  }
};