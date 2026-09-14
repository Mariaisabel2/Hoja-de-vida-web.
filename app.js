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
    content: "Organizando el feed.",
    visibility: "Público",
    likes: 14,
    comments: ["El tono amarillo pastel se ve muy bien."]
  },
{
    id: 3,
    author: "valentina_sea",
    title: "Un día frente al mar y brisa marina",
    media: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    content: "Hoy desconecté del código y me fui a caminar por la playa. El sonido de las olas te renueva las energías al 100%. 🌊🐚",
    visibility: "Público",
    likes: 23,
    comments: ["¡Qué envidia de vista!", "¡Necesito unas vacaciones así! 😍"]
  },
{
    id: 4,
    author: "mateo_trips",
    title: "Paseo de fin de semana por el pueblo",
    media: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    content: "Arovechamos el domingo para salir a rodar en carretera, probar comida típica y tomar café en la plaza principal. 🚗☕",
    visibility: "Público",
    likes: 19,
    comments: ["¿Qué tal estuvo la comida?", "¡Qué buen plan de domingo!"]
  },
{
    id: 5,
    author: "sofia_daily",
    title: "Bitácora del lunes: organización y listas",
    media: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
    content: "Empezando la semana planificando tareas, objetivos de la universidad y repasando temas pendientes. ¡A darle con toda!",
    visibility: "Privado",
    likes: 5,
    comments: ["¡Con toda la actitud para la semana! 💪"]
  },
{
    id: 6,
    author: "camila_nature",
    title: "Caminata ecológica por la montaña",
    media: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    content: "Subimos al mirador muy temprano para ver el amanecer. Respirar aire puro después de estar frente a la pantalla toda la semana no tiene precio. ⛰️🌲",
    visibility: "Público",
    likes: 17,
    comments: ["¡Fotaza!", "Guárdame la ubicación de ese sendero 📍"]
  },
{
    id: 7,
    author: "daniel_cooks",
    title: "Noche de cocina e improvisación",
    media: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
    content: "Intentando preparar pasta artesanal desde cero para desconectar del estudio. Sorprendentemente quedó riquísima. 🍝✨",
    visibility: "Público",
    likes: 11,
    comments: ["Guárdame un plato para la próxima 😋"]
  },
{
    id: 8,
    author: "luisa_notes",
    title: "Tarde de lectura y notas al aire libre",
    media: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    content: "Aproveché la tarde soleada para adelantar lecturas de la clase en el parque del campus. 📚🍂",
    visibility: "Privado",
    likes: 9,
    comments: ["El mejor lugar para concentrarse."]
  },
{
    id: 9,
    author: "andres_travels",
    title: "Atardecer campestre en la finca",
    media: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    content: "Terminando la semana rodeado de naturaleza. No hay nada como ver caer el sol en el campo para despejar la mente. 🌅🌾",
    visibility: "Público",
    likes: 21,
    comments: ["¡Qué foto tan increíble!", "Espectacular la luz de ese atardecer."]
  },
{
    id: 10,
    author: "isabel_cozy",
    title: "Noche de pelis y chocolates picantes",
    media: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    content: "Lluvia afuera, cobija afelpada y maratón de películas viejas. El mejor plan relajante para un domingo por la noche. 🍿☕",
    visibility: "Privado",
    likes: 12,
    comments: ["Plan perfecto de domingo 🌧️"]
  },
{
    id: 11,
    author: "mateo_trips",
    title: "Descubriendo nuevos rincones en la ciudad",
    media: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    content: "Hoy salí a recorrer el centro histórico sin mapa ni rumbo. Encontré una librería de usados llena de tesoros escondidos. 📖🏛️",
    visibility: "Público",
    likes: 16,
    comments: ["¿Dónde queda esa librería?", "¡Gran hallazgo!"]
  },
{
    id: 12,
    author: "mariaisabel",
    title: "Revisión final de código para la Entrega 1",
    media: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    content: "Verificando que todo el CSS Grid, Flexbox y la validación en JS funcionen impecable antes de desplegar en Vercel. 💻🚀",
    visibility: "Público",
    likes: 25,
    comments: ["¡Ese 5.0 ya está asegurado!", "Excelente trabajo 👏"]
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