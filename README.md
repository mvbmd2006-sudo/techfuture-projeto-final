# TechFuture — Projeto Final de Programação Web Coding

Projeto acadêmico demonstrativo desenvolvido com HTML5, CSS3 e JavaScript. O tema escolhido é uma plataforma fictícia de aprendizagem em tecnologia.

## Estrutura

```text
TechFuture/
├── html/
│   ├── index.html
│   ├── cursos.html
│   ├── projetos.html
│   ├── sobre.html
│   └── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── tech-illustration.svg
│   └── screenshots/
│       ├── 375px.png
│       ├── 768px.png
│       └── 1366px.png
├── CHECKLIST.txt
└── README.md
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code.
3. Abra `html/index.html` no navegador (recomendado usar a extensão Live Server).
4. Para testar a integração com a API, abra `html/projetos.html` com conexão à internet e clique em **Carregar projetos**.

## Requisitos técnicos aplicados

- **HTML5 semântico:** `header`, `nav`, `main`, `section`, `article`, `aside` e `footer` organizam o conteúdo.
- **CSS externo:** todas as páginas carregam `css/style.css`.
- **BEM:** classes como `card`, `card__title`, `card__description`, `card--featured`, `nav__link` e `nav__link--active` seguem bloco, elemento e modificador.
- **Flexbox:** cabeçalho/menu (`.header__inner`, `.nav`), estatísticas (`.stats`) e rodapé (`.footer__inner`), além de outras áreas.
- **CSS Grid:** hero (`.hero__grid`), cartões (`.card-grid`), projetos (`.project-grid`), equipe (`.team-grid`) e formulário (`.contact-layout`). Há `repeat()`, `minmax()` e `auto-fit`.
- **Media Queries:** regras para `max-width: 768px`, `max-width: 480px` e `min-width: 769px`, reorganizando Flexbox e Grid.
- **Estados de interação:** `:hover` e `:focus-visible` em links e botões; campos com `:focus`.
- **JavaScript/API:** a página Projetos consulta a API pública do GitHub (`https://api.github.com/users/octocat/repos`) usando `fetch()`. A API é pública e não requer token para esta demonstração; limites de uso podem ser aplicados pelo GitHub.
- **Formulário:** validação no navegador com HTML e JavaScript. Não há envio real para servidor.

## Testes responsivos solicitados

Teste as páginas nas larguras de **375 px**, **768 px** e **1366 px** usando as ferramentas de desenvolvedor do navegador (modo responsivo).

| Largura | Dispositivo de referência | O que verificar |
|---|---|---|
| 375 px | Smartphone | Menu em mais de uma linha, cartões em uma coluna, formulário sem corte |
| 768 px | Tablet | Hero e contato em uma coluna, cartões em duas colunas |
| 1366 px | Desktop | Hero em duas colunas, cartões em três colunas |

## Capturas de tela

- **375 px** — página inicial (smartphone):

  ![Página inicial em 375 px](images/screenshots/375px.png)

- **768 px** — página Cursos (tablet):

  ![Página Cursos em 768 px](images/screenshots/768px.png)

- **1366 px** — página inicial (desktop):

  ![Página inicial em 1366 px](images/screenshots/1366px.png)

## Autoria

Projeto individual desenvolvido por **Marcos Victor Barbosa Meneses Damasceno**. Para usar outra conta na demonstração da API, altere `octocat` no endereço da API em `js/main.js` para o nome de usuário desejado do GitHub.

## Publicar no GitHub

Crie um repositório no GitHub, envie a pasta do projeto e copie o link do repositório para a entrega. Se usar Git no terminal:

```bash
git init
git add .
git commit -m "Projeto final TechFuture"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/techfuture.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu usuário real do GitHub.


## Roteiro sugerido para apresentação individual (15 minutos)

1. **Abertura (1 min):** apresente o tema TechFuture e o objetivo do site.
2. **Navegação (3 min):** mostre as cinco páginas e explique o menu compartilhado.
3. **HTML5 e BEM (3 min):** mostre a estrutura semântica e exemplos como `.card`, `.card__title` e `.card--featured`.
4. **Flexbox e Grid (3 min):** demonstre o cabeçalho, estatísticas, cartões e grades.
5. **Responsividade (2 min):** redimensione o navegador para 375 px, 768 px e 1366 px.
6. **JavaScript e API (2 min):** na página Projetos, clique em “Carregar projetos” e explique o `fetch()` da API pública do GitHub.
7. **Encerramento (1 min):** resuma o que aprendeu e apresente a documentação no README.

**Dica:** ensaie a demonstração e deixe as cinco páginas abertas em abas antes de começar.
