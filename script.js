/* ==========================================================
   ⚙️ IT Brand Website - Main Script
   Purpose: Connects to Google Sheets via Apps Script API
   ========================================================== */

/* 🌐 1. Base URL for your Google Apps Script Web App */
const API_BASE_URL =
  "https://script.google.com/macros/s/AKfycbwQ2cxvgGM6IX81wEG8BEjASQ3P5H1xheRgZXia5FK-_M7KY9tqi0Y0lLIehLjUIco/exec";

/* ==========================================================
   🧭 2. HAMBURGER MENU TOGGLE (Mobile Navigation)
   ========================================================== */
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Show or hide navigation links
});

/* ==========================================================
   📘 3. FETCH & DISPLAY TUTORIALS DATA
   ========================================================== */
async function loadTutorials() {
  try {
    const response = await fetch(`${API_BASE_URL}?sheet=Tutorials`);
    const tutorials = await response.json();

    const container = document.querySelector("#tutorials .card-container");
    container.innerHTML = ""; // Clear any static cards

    tutorials.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // 🧩 Add tutorial content
      card.innerHTML = `
        <img src="${item.Thumbnail}" alt="${item.Title}" style="width:100%; border-radius:8px;">
        <h3>${item.Title}</h3>
        <p>${item.Description}</p>
        <a href="${item.URL}" target="_blank" class="btn">Watch Tutorial</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading Tutorials:", error);
  }
}

/* ==========================================================
   💡 4. FETCH & DISPLAY TECH TIPS DATA
   ========================================================== */
async function loadTechTips() {
  try {
    const response = await fetch(`${API_BASE_URL}?sheet=Tech_Tips`);
    const tips = await response.json();

    const container = document.querySelector("#tips .card-container");
    container.innerHTML = "";

    tips.forEach((tip) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${tip.Image}" alt="${tip.Tip}" style="width:100%; border-radius:8px;">
        <h3>${tip.Tip}</h3>
        <p>${tip.Details}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading Tech Tips:", error);
  }
}

/* ==========================================================
   💼 5. FETCH & DISPLAY JOB UPDATES DATA
   ========================================================== */
async function loadJobUpdates() {
  try {
    const response = await fetch(`${API_BASE_URL}?sheet=Job_Updates`);
    const jobs = await response.json();

    const container = document.querySelector("#jobs .card-container");
    container.innerHTML = "";

    jobs.forEach((job) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${job.Role}</h3>
        <p><strong>Company:</strong> ${job.Company}</p>
        <p><strong>Location:</strong> ${job.Location}</p>
        <p><strong>Posted On:</strong> ${job.Posted_On}</p>
        <a href="${job.Apply_Link}" target="_blank" class="btn">Apply Now</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading Job Updates:", error);
  }
}

/* ==========================================================
   🚀 6. INITIALIZE ALL CONTENT WHEN PAGE LOADS
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  loadTutorials();
  loadTechTips();
  loadJobUpdates();
});

/* ==========================================================
   🧩 FUTURE IMPROVEMENTS:
   ----------------------------------------------------------
   - Add search/filter feature for Tutorials & Jobs
   - Add loading spinner while fetching data
   - Enable caching for faster reloads
   ========================================================== */
