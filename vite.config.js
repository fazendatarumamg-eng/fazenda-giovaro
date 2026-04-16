# Fazenda Giovaro — Sistema de Gestão de Rebanho

## Como fazer o deploy no Vercel

### Opção 1 — Via GitHub (recomendado)
1. Crie uma conta em github.com
2. Crie um repositório novo chamado `fazenda-giovaro`
3. Faça upload de todos os arquivos desta pasta
4. Acesse vercel.com e conecte com sua conta GitHub
5. Importe o repositório `fazenda-giovaro`
6. Clique em Deploy — pronto!

### Opção 2 — Via Vercel CLI
```bash
npm install -g vercel
cd fazenda_app
vercel
```

### Opção 3 — Upload direto
1. Acesse vercel.com/new
2. Arraste a pasta do projeto
3. Clique em Deploy

## Instalar no celular (após deploy)

**iPhone:**
Safari → abrir URL → botão compartilhar (quadrado com seta) → "Adicionar à Tela de Início"

**Android:**
Chrome → abrir URL → menu (3 pontos) → "Adicionar à tela inicial"

## Dados
Os dados ficam salvos localmente em cada dispositivo.
Para sincronizar entre dispositivos, conectar ao Supabase (próximo passo).
