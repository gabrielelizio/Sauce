# Arquitetura do Projeto

## Visão Geral

O projeto utiliza o Cypress para a automação de testes de ponta a ponta (E2E) de uma aplicação web. A estrutura do projeto é organizada para separar os testes, comandos customizados, fixtures e outros artefatos relacionados aos testes.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (Node Package Manager)
- Navegador compatível com Cypress (Chrome, Firefox, Edge)
- Editor de código (recomendado: VS Code)

## Setup do Projeto

1. Clone o repositório
2. Execute `npm install` para instalar as dependências
3. Configure o arquivo `cypress.env.json` com as variáveis de ambiente necessárias
4. Execute `npm run cypress:open` para abrir o Cypress Test Runner

## Estrutura de Pastas

- **cypress/e2e**: Contém os arquivos de especificação dos testes organizados por funcionalidade:
  - **checkout/**: Testes relacionados ao processo de checkout
  - **login/**: Testes de autenticação
  - **navigation/**: Testes de navegação entre páginas
- **cypress/fixtures**: Armazena dados de teste:
  - **user.json**: Dados de usuários para testes
- **cypress/support**: Contém comandos customizados e configurações:
  - **commands/**: Comandos reutilizáveis separados por domínio
  - **e2e.js**: Configurações globais dos testes
- **docs**: Documentação do projeto

## Comandos Customizados

### Login
- `cy.login()`: Realiza login na aplicação
- `cy.logout()`: Realiza logout da aplicação

### Navegação
- `cy.navigateToHome()`: Navega para a página inicial
- `cy.navigateToCart()`: Navega para o carrinho

### Checkout
- `cy.addToCart()`: Adiciona produto ao carrinho
- `cy.checkout()`: Realiza o processo de checkout

## Boas Práticas

1. **Organização de Testes**
   - Separar testes por funcionalidade
   - Usar descrições claras e objetivas
   - Manter testes independentes

2. **Dados de Teste**
   - Utilizar fixtures para dados estáticos
   - Gerar dados dinâmicos quando necessário
   - Manter dados sensíveis em variáveis de ambiente

3. **Comandos Customizados**
   - Criar comandos reutilizáveis
   - Documentar parâmetros e retornos
   - Seguir padrões de nomenclatura

4. **Performance**
   - Configurar timeouts adequadamente
   - Otimizar seletores CSS
   - Evitar dependências desnecessárias entre testes
