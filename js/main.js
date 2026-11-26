
"use strict";

// Demonstração de consumo de API pública: lista repositórios do usuário "octocat".
const repoButton = document.querySelector("#load-repos");
const repoResults = document.querySelector("#repo-results");

if (repoButton && repoResults) {
  repoButton.addEventListener("click", async () => {
    repoButton.disabled = true;
    repoButton.textContent = "Carregando...";
    repoResults.innerHTML = '<p class="api-panel__hint">Consultando a API do GitHub...</p>';
    try {
      const response = await fetch("https://api.github.com/users/octocat/repos?sort=updated&per_page=6");
      if (!response.ok) throw new Error("Não foi possível consultar a API agora.");
      const repos = await response.json();
      if (!repos.length) {
        repoResults.innerHTML = '<p class="api-panel__hint">Nenhum repositório encontrado.</p>';
      } else {
        const list = document.createElement("div");
        list.className = "repo-list";
        repos.forEach((repo) => {
          const article = document.createElement("article");
          article.className = "repo";
          const link = document.createElement("a");
          link.className = "repo__name";
          link.href = repo.html_url;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = repo.name;
          const description = document.createElement("p");
          description.className = "repo__desc";
          description.textContent = repo.description || "Sem descrição cadastrada.";
          const meta = document.createElement("p");
          meta.className = "repo__meta";
          meta.textContent = `★ ${repo.stargazers_count} estrelas · ${repo.language || "Linguagem não informada"}`;
          article.append(link, description, meta);
          list.append(article);
        });
        repoResults.replaceChildren(list);
      }
    } catch (error) {
      const msg = error instanceof TypeError ? "Não foi possível conectar à API." : error.message;
      repoResults.textContent = msg + " Verifique sua conexão e tente novamente.";
    } finally {
      repoButton.disabled = false;
      repoButton.textContent = "Carregar projetos ↗";
    }
  });
}

// Validação local do formulário: demonstra interação, sem enviar dados a um servidor.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    if (!contactForm.reportValidity()) return;
    status.textContent = "Mensagem validada! Este formulário é demonstrativo e não envia dados.";
    contactForm.reset();
  });
}
