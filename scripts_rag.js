const languageSelector = document.getElementById("language-select");
const repoDetails = document.getElementById("repo-details");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const empty = document.getElementById("empty");
const refreshButton = document.getElementById("refresh-button");
const languageURL =
  "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json";

async function loadLanguages() {
  try {
    const response = await fetch(languageURL);
    const languages = await response.json();
    populateLanguageDropdown(languages);
  } catch (error) {
    showError("Failed to load languages.");
  }
}

function populateLanguageDropdown(languages) {
  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language.value;
    option.textContent = language.title;
    languageSelector.appendChild(option);
  });
}

async function fetchRandomRepo(language) {
  const selectedLanguage = languageSelector.value;
  if (!selectedLanguage) {
    showError("Please select a language first.");
    return;
  }

  showLoading();
  clearMessages();

  const apiURL =
    `https://api.github.com/search/repositories?q=language:${selectedLanguage}&sort=stars&order=desc&per_page=100`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const randomRepo =
        data.items[Math.floor(Math.random() * data.items.length)];
      displayRepo(randomRepo);
    } else {
      showEmpty();
    }
  } catch (error) {
    hideRepoDetails(error);
    showError("Failed to fetch repositories. Please try again.");
  } finally {
    hideLoading();
  }
}

function displayRepo(repo) {
  repoDetails.style.display = "flex";
  repoDetails.innerHTML = `
    <div class="repo-card">
        <h2><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></h2>
        <p class="description">${repo.description || "Sin descripción disponible."}</p>
        
        <div class="repo-stats">
        <div><i class="fas fa-star"></i> ${repo.stargazers_count} Estrellas</div>
        <div><i class="fas fa-code-branch"></i> ${repo.forks_count} Forks</div>
        <div><i class="fas fa-exclamation-circle"></i> ${repo.open_issues_count} Problemas</div>
        </div>

        <a href="${repo.html_url}" target="_blank" class="btn">Ver en GitHub</a>
    </div>
    `;
  refreshButton.style.display = "block";
}

function showLoading() {
  hideRepoDetails;
  loading.style.display = "flex";
}

function hideLoading() {
  loading.style.display = "none";
}

function hideRepoDetails() {
  repoDetails.style.display = "none";
}

function showError(message) {
  errorDiv.textContent = message;
  errorDiv.style.display = "flex";
}

function showEmpty() {
  hideRepoDetails();
  empty.style.display = "flex";
}

function clearMessages() {
  errorDiv.style.display = "none";
  empty.style.display = "none";
  repoDetails.innerHTML = "";
}

languageSelector.addEventListener("change", fetchRandomRepo);
refreshButton.addEventListener("click", fetchRandomRepo);

loadLanguages();
