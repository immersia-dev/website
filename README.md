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

# Instale as dependências da demo
npm run setup:demo

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
