const form = document.getElementById("fan-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value;
  const twitter = document.getElementById("twitter").value;
  const instagram = document.getElementById("instagram").value;
  const tiktok = document.getElementById("tiktok").value;

  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  const interests = Array.from(checkboxes).map(cb => cb.value);

  result.innerHTML = `
    <h3>Fala, ${name}!</h3>
    <p>Com ${age} anos, de ${city}, você curte:</p>
    <ul>${interests.map(item => `<li>${item}</li>`).join("")}</ul>
    <p>Vamos te acompanhar nas redes:</p>
    <p>Twitter: ${twitter || "não informado"}<br>
    Instagram: ${instagram || "não informado"}<br>
    TikTok: ${tiktok || "não informado"}</p>
  `;
});
