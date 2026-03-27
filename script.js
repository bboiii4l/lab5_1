// 1️⃣ LocalStorage: інформація про браузер
const browserData = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled
  };
  localStorage.setItem("browserData", JSON.stringify(browserData));
  
  const data = JSON.parse(localStorage.getItem("browserData"));
  const infoDiv = document.getElementById("browser-info");
  infoDiv.innerHTML = `
    <p><strong>Browser:</strong> ${data.userAgent}</p>
    <p><strong>Platform:</strong> ${data.platform}</p>
    <p><strong>Language:</strong> ${data.language}</p>
    <p><strong>Cookies:</strong> ${data.cookiesEnabled}</p>
  `;
  
  // 2️⃣ Відгуки туристів (JSONPlaceholder)
  fetch("https://jsonplaceholder.typicode.com/posts/2/comments")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("comments-list");
      data.forEach(comment => {
        const div = document.createElement("div");
        div.className = "comment p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-500";
        div.innerHTML = `
          <h4 class="font-semibold">${comment.name}</h4>
          <p class="text-gray-700 dark:text-gray-300">${comment.body}</p>
          <small class="text-gray-500 dark:text-gray-400">${comment.email}</small>
        `;
        container.appendChild(div);
      });
    });
  
  // 3️⃣ Модальне вікно через 1 хвилину
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-modal");
  
  setTimeout(() => {
    modal.classList.remove("hidden");
  }, 5000);
  
  closeBtn.onclick = () => modal.classList.add("hidden");
  window.onclick = (e) => {
    if(e.target === modal) modal.classList.add("hidden");
  };
  
  // 4️⃣ Темна / світла тема + кнопка перемикання
  const toggleBtn = document.getElementById("theme-toggle");
  
  // Автоматична тема по часу
  const hour = new Date().getHours();
  if(hour >= 7 && hour < 21){
    document.documentElement.classList.remove("dark"); // світла
  } else {
    document.documentElement.classList.add("dark"); // нічна
  }
  
  // Кнопка перемикання вручну
  toggleBtn.onclick = () => {
    document.documentElement.classList.toggle("dark");
  };