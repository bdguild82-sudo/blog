const titles = [
  "Why Technology Is Changing Fast",
  "How the Internet Really Works",
  "The Psychology of Learning",
  "Future of Artificial Intelligence",
  "Simple Habits That Improve Focus",
  "How Websites Make Money",
  "Understanding Digital Privacy",
  "Why Creativity Matters"
];

const paragraphs = [
  "Technology continues to evolve at an incredible pace, impacting nearly every part of our lives.",
  "Understanding how systems work helps people make better decisions in the digital world.",
  "Small habits repeated daily can lead to long-term improvements in productivity.",
  "Learning new skills online has become easier and more accessible than ever before.",
  "Digital privacy is becoming one of the most important topics of the modern era.",
  "Artificial intelligence is shaping the future of education, work, and creativity."
];

function randomText() {
  return paragraphs.sort(() => 0.5 - Math.random()).slice(0, 4).join(" ");
}

// HOME PAGE
if (document.getElementById("posts")) {
  const container = document.getElementById("posts");

  for (let i = 0; i < 10; i++) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const id = btoa(title + i);

    container.innerHTML += `
      <div class="post">
        <h2><a href="post.html?id=${id}&title=${encodeURIComponent(title)}">${title}</a></h2>
        <p>${randomText().slice(0, 150)}...</p>
      </div>
    `;
  }
}

// POST PAGE
if (document.getElementById("post")) {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  document.getElementById("post").innerHTML = `
    <h1>${title}</h1>
    <p>${randomText()}</p>
    <p>${randomText()}</p>
    <p>${randomText()}</p>
  `;
}
