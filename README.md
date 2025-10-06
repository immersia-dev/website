# IMMERSIA - Future Canvas

Uma aplicação web moderna e imersiva para demonstrar tecnologias de realidade virtual, aumentada e inteligência artificial.

## Sobre o Projeto

O IMMERSIA Future Canvas é uma plataforma web desenvolvida para apresentar soluções inovadoras em tecnologias imersivas. A aplicação combina design futurístico com elementos interativos para criar uma experiência visual impactante.

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
# Clone o repositório
git clone https://github.com/immersia/future-canvas.git

# Entre no diretório
cd future-canvas

# Instale as dependências
npm install

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