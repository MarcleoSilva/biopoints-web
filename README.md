# BioPoints — Website (Next.js)

Website institucional e área de demonstração da plataforma **BioPoints** — fidelidade climática para motoristas de biocombustível, em piloto em Salvador, Bahia.

Frontend em **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**, com integração ao backend NestJS via REST.

## Stack

- **Next.js 16.2.6** com App Router (Server Components onde não há interatividade, Client Components apenas na área de demo)
- **React 19.2.4**
- **Tailwind CSS v4** (configuração via `@theme` no CSS, sem arquivo `.config`)
- **TypeScript 5**
- **Fetch nativo** (sem dependências de cliente HTTP)

## Como rodar

### Pré-requisitos

- Node.js **18.18+** ou **20+**
- npm, yarn ou pnpm

### Instalação

```bash
# 1. Instalar dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Configuração

Crie um arquivo `.env.local` na raiz (já existe um exemplo):

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> Aponte para a URL do backend NestJS. Em desenvolvimento local, `http://localhost:3000` é o padrão.

### Desenvolvimento

```bash
npm run dev
```

Abra **http://localhost:3000** no navegador.

### Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
biopoints-web/
├── app/
│   ├── layout.tsx                  # layout raiz (navbar + footer + provider)
│   ├── globals.css                 # Tailwind v4 config via @theme
│   ├── page.tsx                    # landing page
│   ├── (institucional)/
│   │   ├── como-funciona/page.tsx
│   │   ├── creditos-de-carbono/page.tsx
│   │   └── sobre/page.tsx
│   └── (demo)/
│       ├── layout.tsx              # layout com sidebar
│       └── demo/
│           ├── page.tsx            # hub da demo
│           ├── veiculos/page.tsx   # passo 1
│           ├── postos/page.tsx     # passo 2
│           ├── motoristas/page.tsx # passo 3
│           └── abastecimento/page.tsx # passo 4
├── components/
│   ├── ui/         # Button, Card, Badge, Input, Logo
│   ├── layout/     # Navbar, Footer
│   ├── landing/    # Hero, ImpactStats, HowItWorks, WhyBiofuel, CarbonCredits, Principles, CTA
│   └── demo/       # DemoSidebar, StepIndicator, ApiResponseCard, HistoryPanel
├── lib/
│   ├── api.ts              # cliente da API NestJS
│   └── context/
│       └── DemoContext.tsx # estado da sessão de demo (sessionStorage)
└── public/
```

## Fluxo da área de demo

A área `/demo` simula o ciclo completo da plataforma em 4 chamadas REST:

1. **`POST /vehicles`** — cadastra um veículo e valida elegibilidade
2. **`POST /stations`** — cadastra um posto parceiro e gera `api_key`
3. **`POST /drivers`** — cadastra um motorista vinculado ao veículo e ao posto
4. **`POST /stations/:id/events`** — registra um abastecimento (header `x-api-key`); o backend chama o modelo Random Forest, calcula o CO₂ evitado e credita os BioPoints

Os IDs retornados (`vehicle_id`, `station_id`, `api_key`, `driver_id`) ficam salvos em `sessionStorage` via React Context e são preenchidos automaticamente nos passos seguintes. O histórico de chamadas da sessão fica acessível no rodapé de cada passo.

## Tailwind CSS v4

**Novidades no Tailwind v4:**
- ✅ Configuração via `@theme` diretamente no CSS (`app/globals.css`)
- ✅ Sem necessidade de `tailwind.config.ts` ou `postcss.config.js`
- ✅ Plugin `@tailwindcss/postcss` integrado automaticamente pelo Next.js
- ✅ Performance melhorada com compilação mais rápida

Para customizar cores, fontes ou animações, edite a seção `@theme` em `app/globals.css`.

## Personalizando

- **Cores**: definidas em `@theme` no `app/globals.css` (ex: `--color-green-primary: #16a34a`)
- **Endpoints**: centralizados em `lib/api.ts`. Para apontar para outro host, basta editar `NEXT_PUBLIC_API_URL`.
- **Textos institucionais**: tudo em PT-BR, hard-coded nos componentes em `components/landing/` e nas páginas em `app/(institucional)/`.

## Fontes dos dados de impacto

Todas as estatísticas exibidas na landing page têm fonte verificável e linkada:

- Anfavea — Anuário 2023
- Datagro / Jornal de Brasília (2024)
- Embrapa Agrobiologia
- Stellantis Media Brasil (2023)
- UNICA
- SEEG (2021)
- Instituto Cidades Sustentáveis — Mapa da Desigualdade 2024
- Ministério de Minas e Energia — RenovaBio

## Compatibilidade

- Next.js 16 + React 19
- Tailwind CSS v4
- Node.js 18.18+ ou 20+

## Licença

Projeto acadêmico — piloto em Salvador, Bahia.

