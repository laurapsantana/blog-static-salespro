# Documentação Técnica – Blog Estático Grupo SalesPRO

## 1. Visão Geral do Projeto

Este projeto consiste em um blog estático criado com **Next.js**, publicado no serviço **Amazon S3** utilizando hospedagem de site estático. O objetivo é demonstrar deploy de aplicação estática na nuvem, com foco em baixo custo, alta disponibilidade e simplicidade operacional.

## 2. Arquitetura da Solução

- O site é gerado pelo Next.js, que compila a aplicação React para arquivos HTML, CSS e JavaScript estáticos.
- Esses arquivos são armazenados em um bucket do S3 configurado para hospedagem estática com acesso público de leitura.
- Os usuários acessam o blog via URL pública do bucket (endpoint do S3).
- Não há servidores ou backend dinâmico, garantindo simplicidade e custo zero em muitos casos.

![Diagrama de Arquitetura](./arquitetura.png)


## 3. Decisões de Design e Configurações AWS

- **Hospedagem em Amazon S3** para garantir alta disponibilidade e baixo custo.
- Desativação do bloqueio de acesso público para permitir acesso ao conteúdo.
- Uso de ACLs públicas apenas para leitura dos objetos.
- Configuração de documentos padrão para `index.html` e `404.html` para navegação correta.
- Não uso de serviços adicionais (Lambda, EC2) para manter o ambiente simples e econômico.

## 4. Estimativa de Custos

- O uso do bucket S3 com hospedagem estática é gratuito até 5 GB no plano free da AWS.
- O projeto não consome recursos computacionais, evitando cobranças adicionais.
- Custo estimado mensal próximo a zero, exceto se ultrapassar o limite gratuito ou gerar tráfego excessivo.

## 5. Estratégia de Limpeza (Cleanup)

- Exclusão manual dos objetos do bucket após uso.
- Possibilidade de exclusão total do bucket via console AWS.
- Uso futuro de IaC (CloudFormation) para criação e remoção automatizada dos recursos.

## 6. Lições Aprendidas e Melhorias Futuras

- Entendimento prático do deploy estático na AWS.
- Importância da configuração correta de permissões e políticas no S3.
- Possível melhoria futura: integrar CDN com CloudFront para melhor performance.
- Implementação de pipeline CI/CD para automação do deploy.


> ⚠️ **Observação:** Por boas práticas de segurança e gerenciamento de custos na nuvem, o bucket S3 utilizado para publicação do blog foi removido após a conclusão da atividade. A publicação do site funcional foi devidamente registrada e está demonstrada no vídeo pitch enviado como parte da entrega.
---

Desenvolvido pelo **Grupo SalesPRO**
