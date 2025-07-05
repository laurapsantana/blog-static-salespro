# Blog Estático - Grupo SalesPRO 🚀

Este projeto é um blog estático criado com **Next.js** e publicado no **Amazon S3** como parte da Atividade Avaliativa Final da disciplina de Cloud Computing.

## 🛠️ Tecnologias Utilizadas
- [Next.js](https://nextjs.org/) para geração do site estático
- [React](https://reactjs.org/) como biblioteca base
- [AWS S3](https://aws.amazon.com/s3/) para hospedagem
- Infraestrutura como código opcional com CloudFormation

## 📁 Estrutura do Projeto

```
/BLOG-STATIC/ 
├── .next
├── node -modules
├── out
├── pages/
│   ├── index.js
│   └── posts/
│       └── deploy-na-aws.js
├── styles/  
│   └── Home.module.css
.gitignore
arquitetura.png
DOCUMENTACAO.md

├── next.config.js
├── package-lock.json 
└── package.json
README.md 
```

## ▶️ Como Rodar Localmente

```bash
npm install
npm run dev
```

## 📦 Como Gerar a Versão Estática

```bash
npm run build
```

Isso irá gerar a pasta `out/` contendo os arquivos HTML e assets prontos para hospedagem.

## ☁️ Como Fazer o Deploy no AWS S3

1. Acesse o S3 no Console da AWS
2. Crie um bucket com nome único (ex: `blog-salespro-grupo-meninas`)
3. Desative o bloqueio de acesso público
4. Ative a **hospedagem de site estático**
   - Index document: `index.html`
   - Error document: `404.html` (opcional)
5. Faça o upload de **todo o conteúdo da pasta `/out`** (não da pasta em si)
6. Garanta que os objetos estejam com ACL pública (leitura)
7. Acesse a URL do bucket:  
   `http://blog-salespro-grupo-meninas.s3-website-us-east-1.amazonaws.com/`

## 💸 Estratégia de Custo

- O projeto foi publicado em bucket S3 com hospedagem estática, que tem custo **zero** no plano gratuito da AWS (até 5 GB).
- Não foram utilizados serviços dinâmicos (ex: Lambda, EC2), o que garante **baixo custo total**.
- Os objetos foram enviados com ACLs públicas apenas para leitura, evitando excessos de permissões.

## 🧹 Cleanup

- Após a apresentação, todos os objetos do bucket podem ser excluídos.
- O próprio bucket pode ser removido manualmente no console.
- Como alternativa, é possível usar `AWS CLI` ou um template CloudFormation com `DeletionPolicy`.

## 📽️ Pitch (sugestão de roteiro)

1. Apresentação rápida do grupo
2. Justificativa da escolha: site simples, direto, ótimo para testar deploy estático
3. Demonstração da aplicação no ar
4. Explicação da arquitetura e custos
5. Considerações finais e melhorias futuras


> ⚠️ **Observação:** Por boas práticas de segurança e gerenciamento de custos na nuvem, o bucket S3 utilizado para publicação do blog foi removido após a conclusão da atividade. A publicação do site funcional foi devidamente registrada e está demonstrada no vídeo pitch enviado como parte da entrega.

---

Desenvolvido pelo **Grupo SalesPRO**
