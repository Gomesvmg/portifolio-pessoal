# Política de Segurança (Security Policy) - PortfolioHUB

**Estudante:** Vinicius Gomes de Morais  
**Projeto:** PortfolioHUB (`viniciusgomes.site`)  
**Disciplina:** Bootcamp I - Entrega Final  
**Validação de Diretrizes:** Google Gemini IA  

Este documento define as políticas de segurança, gestão de vulnerabilidades e conformidade adotadas no ecossistema do **PortfolioHUB**, garantindo a proteção do código-fonte, integridade da infraestrutura e confidencialidade de chaves de serviços integrados.

---

## 1. Versões Suportadas

Apenas as versões ativas em produção através do pipeline oficial de CI/CD da Vercel recebem atualizações de segurança e correções de patches.

| Versão | Suportado | Notas / Estado |
| :--- | :---: | :--- |
| v3.0.x (Atual) | ✅ Sim | Versão estável integrada à produção (`viniciusgomes.site`). |
| v2.0.x | ❌ Não | Legado da Entrega Intermediária (GitHub Pages). |
| v1.0.x | ❌ Não | Protótipo inicial da Entrega Inicial. |

---

## 2. Políticas de Gestão de Usuários e Controle de Acessos

Para mitigar a introdução de falhas humanas ou códigos maliciosos no ambiente de produção, foram implementadas as seguintes diretrizes de governança baseadas nas orientações da consultoria com o Google Gemini:

### A. Regras de Proteção de Branch (Branch Protection Rules)
* **Branch Restrita:** A branch `main` foi bloqueada para commits diretos no GitHub.
* **Fluxo Operacional:** Alterações estruturais ou adições de novos projetos (como o sistema de custos de obras ou o protótipo *Dom Imperial*) exigem a criação de ramificações isoladas (`feature/*`).
* **Mecanismo de Revisão:** A fusão de código com a branch de produção é estritamente permitida apenas através de **Pull Requests (PRs)**, assegurando uma auditoria estática do código antes do build automático.

### B. Autenticação e Permissões
* Acesso administrativo ao repositório restrito ao proprietário do perfil, utilizando autenticação multifator (MFA) ativa no GitHub.
* Vinculação com o painel da Vercel baseada em tokens com escopos limitados e revogáveis.

---

## 3. Proteção de Dados e Gestão de Segredos

O PortfolioHUB atua como um hub centralizador de projetos de engenharia de software que envolvem persistência em banco de dados (Node.js/PostgreSQL) e integrações de APIs. As seguintes contramedidas protegem essas credenciais:

* **Isolamento Local (`.gitignore`):** O arquivo `.gitignore` está configurado para garantir que arquivos de configuração locais contendo segredos (como `.env`, `config.json` ou chaves de desenvolvimento) jamais sejam indexados e expostos em repositórios públicos.
* **Criptografia em Nuvem (Environment Variables):** Chaves de produção, strings de conexão com bancos de dados e credenciais críticas são injetadas em tempo de execução via variáveis de ambiente criptografadas no painel da **Vercel** e armazenadas via **GitHub Secrets**, impedindo o vazamento de dados sensíveis no código aberto.

---

## 4. Monitoramento Automatizado (GitHub Dependabot)

A cadeia de suprimentos de software (software supply chain) é monitorada continuamente para evitar o uso de dependências e bibliotecas obsoletas ou vulneráveis:

* **Alertas do Dependabot (Dependabot Alerts):** Ativo para varredura em tempo real dos pacotes de manifesto de dependências do ecossistema do portfólio.
* **Atualizações de Segurança (Security Updates):** Emissão automatizada de Pull Requests de correção caso uma vulnerabilidade conhecida (CVE) seja detectada em qualquer componente de terceiros utilizado nos projetos listados no hub.

---

## 5. Reportando uma Vulnerabilidade

Caso identifique alguma falha de segurança, exposição acidental de credenciais ou comportamento inesperado que comprometa a integridade do `viniciusgomes.site`, por favor, adote o procedimento de divulgação responsável:

1. **Não abra uma Issue pública:** Relatos públicos expõem o sistema a agentes maliciosos antes que a correção seja aplicada.
2. **Contato Privado:** Envie os detalhes técnicos da vulnerabilidade diretamente para o e-mail de contato profissional disponibilizado na seção de perfil do PortfolioHUB ou no arquivo `README.md`.
3. **Prazo de Resolução:** O incidente será analisado com o auxílio do Google Gemini para triagem técnica e aplicação do patch de correção em produção dentro de um ciclo prioritário.