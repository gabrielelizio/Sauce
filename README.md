# Cypress Automation Project

Este projeto é uma automação de testes E2E utilizando o Cypress, aplicando princípios SOLID e DRY para criar uma estrutura de testes robusta, manutenível e reutilizável. O projeto cobre cenários críticos de negócio incluindo autenticação, checkout e navegação.

## Princípios de Design

### SOLID
- **Single Responsibility**: Cada arquivo de teste e comando customizado tem uma única responsabilidade
- **Open/Closed**: Estrutura extensível que permite adicionar novos testes sem modificar os existentes
- **Liskov Substitution**: Comandos customizados são intercambiáveis e consistentes
- **Interface Segregation**: APIs de teste são específicas e coesas
- **Dependency Inversion**: Uso de fixtures e configurações para gerenciar dependências

### DRY (Don't Repeat Yourself)
- Comandos customizados reutilizáveis
- Dados de teste centralizados em fixtures
- Padrões de teste consistentes
- Funções auxiliares compartilhadas

## Estrutura do Projeto

```
sauce-automation
├── cypress
│   ├── fixtures
│   │   └── user.json           # Dados dos usuários para testes
│   ├── e2e
│   │   ├── checkout/           # Testes de checkout
│   │   ├── login/             # Testes de autenticação
│   │   └── navigation/        # Testes de navegação
│   ├── support
│   │   ├── commands/          # Comandos customizados por domínio
│   │   │   ├── checkoutCommands.js
│   │   │   ├── loginCommands.js
│   │   │   └── navigationCommands.js
│   │   ├── commands.js        # Registro de comandos
│   │   └── e2e.js            # Configurações globais
│   └── screenshots           # Capturas de tela de falhas
├── docs
│   ├── architecture.md       # Documentação da arquitetura
│   └── scenarios.md         # Especificação dos cenários
├── cypress.config.js         # Configurações do Cypress
├── cypress.env.json         # Variáveis de ambiente
└── package.json            # Dependências e scripts
```

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (Node Package Manager)
- Navegadores suportados:
  - Chrome (recomendado)
  - Firefox
  - Edge
- Editor de código (recomendado: VS Code)

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd cypress-automation-project
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```
npx cypress open
```

Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes.

## Cenários de Teste

1. **Login com Sucesso**: O teste acessa o site, realiza o login com as credenciais do fixture e valida que a tela de inventário foi exibida.

2. **Fluxo de Checkout de Compra**: O teste loga no sistema, adiciona o produto "Test.allTheThings() T-Shirt (Red)" ao carrinho, preenche os dados fictícios para o checkout e valida a mensagem de confirmação "Thank you for your order!".

3. **Navegação por Menus**: O teste abre o menu hambúrguer, navega até a opção Home e valida que a página contém o comentário do usuário “Chuan Au”.

## Documentação

Para mais detalhes sobre a arquitetura do projeto e os cenários de teste, consulte a pasta [docs](docs).

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License.