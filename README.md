# IMMERSIA

## Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Radix UI** - Componentes acessíveis

## Instalação

```bash
# Clone o repositório com a demo
git clone --recurse-submodules https://github.com/immersia-dev/website.git

# Entre no diretório
cd website

# Instale as dependências
npm install

# Instale as dependências dos apps embarcados (demo + plataforma)
npm run setup:embeds

# Execute o projeto
npm run dev
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── sections/          # Seções da página
│   └── ui/               # Componentes reutilizáveis
├── hooks/                # Hooks customizados
├── lib/                  # Utilitários
├── pages/                # Páginas da aplicação
└── assets/              # Imagens e recursos
```

## Configuração

O projeto utiliza Tailwind CSS com configuração personalizada para:
- Cores da marca IMMERSIA
- Animações customizadas
- Efeitos de gradiente animado
- Sistema de design consistente

## Desenvolvimento

### Adicionando Novas Seções

1. Crie um novo componente em `src/components/sections/`
2. Importe e adicione na página principal
3. Configure as animações e efeitos visuais

### Customizando Cores

As cores principais estão definidas em `tailwind.config.ts` e podem ser ajustadas conforme necessário.

## Deploy

O projeto está configurado para deploy em plataformas como Vercel, Netlify ou qualquer servidor estático.

Como os submódulos são privados, o repositório `website` precisa ter um secret de Actions chamado `SUBMODULE_TOKEN`. Use um fine-grained personal access token com permissão `Contents: Read-only` nos repositórios `website`, `demo-startup-summit` e `platform-safety`.

```bash
# Build para produção
npm run build

# Os arquivos estarão em dist/
```

### Demo do Startup Summit

A experiência WebXR fica publicada em `/demo-startup-summit/` e é aberta em uma nova aba pelo CTA principal do site. O código-fonte é mantido no submódulo Git `demo-startup-summit`; durante `npm run dev` ou `npm run build`, seus arquivos são compilados e sincronizados automaticamente em `public/demo-startup-summit/`.

Para atualizar a demo para a versão mais recente da branch `main`:

```bash
git submodule update --remote demo-startup-summit
npm run setup:demo
```

### Plataforma (vitrine)

A plataforma fica publicada em `/platform/` e é aberta pelo botão **Acessar Plataforma** da navbar e pelo **Explorar a plataforma** da seção de projetos. O código vem do submódulo Git `platform-safety` (apenas `apps/web` é usado aqui) e é compilado por `npm run build:platform`.

Esse build é uma vitrine, não a plataforma de produção:

- `VITE_DEMO_MODE=true` faz o `apiClient` desviar todas as chamadas para `src/lib/demoApi.ts`, que opera em memória sobre as sementes de `src/data/mockPlatform.ts`. Nenhum backend é necessário e todas as telas ficam navegáveis (inclusive criar/editar registros, que somem ao recarregar).
- `VITE_ROUTER=hash` troca o `BrowserRouter` por `HashRouter`, porque o GitHub Pages não reescreve deep links do sub-app.

Login: qualquer e-mail das sementes com senha de 6+ caracteres, ou os atalhos **Entrar como** (Aluno, Instrutor, Admin da organização, Super Admin) na própria tela de login.

Para atualizar a plataforma para a versão mais recente da branch `main`:

```bash
git submodule update --remote platform-safety
npm run setup:platform
```
