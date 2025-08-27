# Cypress Automation Project

Este projeto é uma automação de testes utilizando o Cypress, focado em três cenários principais: login com sucesso, fluxo de checkout de compra e navegação por menus.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
cypress-automation-project
├── cypress
│   ├── fixtures
│   │   └── user.json          # Dados do usuário para os testes
│   ├── e2e
│   │   ├── login.spec.js      # Teste automatizado para login
│   │   ├── checkout.spec.js   # Teste automatizado para checkout
│   │   └── navigation.spec.js  # Teste automatizado para navegação
│   └── support
│       ├── commands.js        # Comandos personalizados
│       └── e2e.js             # Configurações globais para os testes
├── cypress.config.js          # Configuração do Cypress
├── package.json               # Configuração do npm
└── README.md                  # Documentação do projeto
```

## Pré-requisitos

- Node.js instalado
- npm ou yarn

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

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License.