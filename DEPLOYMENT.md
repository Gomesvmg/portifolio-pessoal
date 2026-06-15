# Plano de Implantação e Infraestrutura - PortfolioHUB
**Estudante:** Vinicius Gomes de Morais  
**Domínio de Produção:** [viniciusgomes.site](https://viniciusgomes.site)  
**Ambiente de Hospedagem:** Vercel Platform  
**Trilha de Aprendizado:** Bootcamp I - Entrega Final  

Este documento registra o planejamento, a arquitetura de implantação e as diretrizes de segurança adotadas para colocar o **PortfolioHUB** em produção, validando a conformidade técnica com o suporte do **Google Gemini**.

---

## 1. Planejamento da Implantação (Vercel Workflow)

A escolha da **Vercel** como provedor de nuvem para o PortfolioHUB considerou a automação do ciclo de vida do software através do modelo de **CI/CD (Integração Contínua e Implantação Contínua)** integrado diretamente ao repositório GitHub `Gomesvmg`.

### Fluxo de Deployment Adaptado
1. **Ambiente Local (Working Directory):** Desenvolvimento, testes de responsividade e ajustes finos locais.
2. **Controle de Versão (Git):** Criação de commits semânticos e pushes para o GitHub.
3. **Gatilho de Build Automático:** A Vercel detecta toda atualização na branch principal (`main`) e inicia o pipeline de compilação.
4. **Distribuição Global (Edge Network):** O site é distribuído geograficamente, garantindo latência mínima ao acessar `viniciusgomes.site`.

---

## 2. Passo a Passo da Configuração e Integração

### Etapa 1: Vinculação do Repositório
* Conexão segura estabelecida entre a conta Vercel e o provedor GitHub.
* Importação do repositório raiz do projeto, mapeando o diretório base para compilação.

### Etapa 2: Configuração de Build
* **Build Command:** Configurado de acordo com o ecossistema do projeto (ex: `npm run build` para frameworks modernos ou processamento estático padrão).
* **Output Directory:** Ajustado para o diretório de saída gerado (ex: `public`, `dist` ou a própria raiz `.` para projetos estáticos puros).

### Etapa 3: Apontamento do Domínio Próprio (`viniciusgomes.site`)
Para a transição do ambiente de testes para o uso real e profissional, configurou-se um domínio customizado:
* Adicionado o domínio `viniciusgomes.site` no painel da Vercel.
* **Configuração de DNS (Domain Name System):**
  * Configuração de registro tipo **A** apontando para o IP da Vercel (`76.76.21.21`).
  * Configuração de registro **CNAME** para o subdomínio `www` direcionando para `cname.vercel-dns.com`.

---

## 3. Gestão de Usuários e Segurança

Seguindo as orientações de conformidade estipuladas e validadas pelo Google Gemini, as seguintes políticas de proteção de integridade foram aplicadas ao ecossistema do projeto:

### A. Regras de Proteção de Branch (Branch Protection Rules)
* Configurada restrição na branch `main` diretamente no GitHub (*Settings > Branches*).
* Exigência de revisões prévias por meio de **Pull Requests (PRs)** antes de qualquer merge de código em produção, mitigando a introdução de bugs no site ativo.

### B. Proteção de Credenciais e Variáveis de Ambiente
* Arquivo `.gitignore` rigorosamente configurado para impedir a exposição acidental de credenciais locais de banco de dados ou chaves de API.
* Armazenamento seguro de tokens e strings de conexão de microsserviços integrados utilizando as **Environment Variables** nativas do painel da Vercel e **GitHub Secrets**, garantindo isolamento total do código-fonte público.

### C. Segurança de Dependências e Monitoramento
* Ativação do **GitHub Dependabot** para análise contínua de vulnerabilidades de segurança automatizada em pacotes e bibliotecas de terceiros.
* Geração e renovação automática de certificados criptográficos **SSL/TLS (HTTPS)** gerenciados pela Vercel para proteção contra interceptação de tráfego de rede no domínio.

---

## 4. Consultoria de Arquitetura com Google Gemini

O **Google Gemini** atuou como ferramenta de apoio e copiloto estratégico durante todo o ciclo desta Entrega Final:
* **Validação de Segurança:** Orientou no desenho e boas práticas de proteção de branches e isolamento de chaves secretas.
* **Otimização de Deploy:** Auxiliou no mapeamento técnico para a transição transparente de DNS e provisionamento do domínio `viniciusgomes.site`.
* **Auditoria de Documentação:** Guiou a padronização e estruturação deste plano técnico e dos arquivos Markdown (`.md`) para garantir o rigor acadêmico e profissional exigido pelo Bootcamp.