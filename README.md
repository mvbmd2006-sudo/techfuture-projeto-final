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

  ![Página inicial em 375 px](<img width="1644" height="972" alt="Captura de tela 2026-11-25 225928" src="https://github.com/user-attachments/assets/1db104d4-a590-4957-93eb-16bf1b15bc94" />
)

- **768 px** — página Cursos (tablet):

  ![Página Cursos em 768 px](<img width="1790" height="916" alt="Captura de tela 2026-11-25 225953" src="https://github.com/user-attachments/assets/999b45f4-2556-44c8-95d3-a40a5bc82757" />
)

- **1366 px** — página inicial (desktop):

  ![Página inicial em 1366 px](<img width="1919" height="988" alt="Captura de tela 2026-11-25 230014" src="https://github.com/user-attachments/assets/aeeaa3c3-9b4d-4929-8da0-c944cd26a27a" />
)

## Autoria

Projeto individual desenvolvido por **Marcos Victor Barbosa Meneses Damasceno**.
