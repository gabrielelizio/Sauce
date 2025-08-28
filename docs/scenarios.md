# Cenários de Teste

## Cenários de Login

### Login com Sucesso
- **Dado** que o usuário acessa a página de login
- **Quando** inserir credenciais válidas:
  ```json
  {
    "username": "standard_user",
    "password": "secret_sauce"
  }
  ```
- **Então** deve ser redirecionado para a página inicial
- **E** deve ver a lista de produtos disponíveis

### Login com Falha
- **Dado** que o usuário acessa a página de login
- **Quando** inserir credenciais inválidas
- **Então** deve ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
- **E** deve permanecer na página de login

### Login com Usuário Bloqueado
- **Dado** que o usuário acessa a página de login
- **Quando** inserir credenciais de um usuário bloqueado:
  ```json
  {
    "username": "locked_out_user",
    "password": "secret_sauce"
  }
  ```
- **Então** deve ver a mensagem "Epic sadface: Sorry, this user has been locked out"

### Casos de Borda - Login
- Tentativa de login com campos vazios
- Login com caracteres especiais
- Login com SQL injection
- Login com XSS

## Cenários de Checkout

### Checkout com Sucesso
- **Dado** que o usuário está logado
- **Quando** adicionar um produto ao carrinho
- **E** acessar o carrinho
- **E** preencher informações de envio:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "zipCode": "12345"
  }
  ```
- **Então** deve ver a confirmação da compra
- **E** o carrinho deve ficar vazio

### Checkout com Carrinho Vazio
- **Dado** que o usuário está logado
- **Quando** tentar acessar o checkout sem produtos
- **Então** deve ver mensagem informativa
- **E** não deve conseguir prosseguir

### Casos de Borda - Checkout
- Checkout com múltiplos produtos
- Validação de campos obrigatórios
- Tentativa de checkout sem login
- Validação de formato do CEP

## Cenários de Navegação

### Navegação entre Páginas
- **Dado** que o usuário está logado
- **Quando** acessar o menu principal
- **Então** deve conseguir navegar para:
  - Home
  - About
  - Carrinho
  - Menu lateral

### Validações de Navegação
- Verificar URLs corretas
- Verificar elementos específicos de cada página
- Validar breadcrumbs
- Verificar estado do carrinho após navegação

### Casos de Borda - Navegação
- Navegação com back/forward do navegador
- Refresh da página
- URLs inválidas
- Acesso direto às páginas sem login

## Dados de Teste

### Usuários
```json
{
  "standard_user": {
    "username": "standard_user",
    "password": "secret_sauce",
    "type": "standard"
  },
  "locked_user": {
    "username": "locked_out_user",
    "password": "secret_sauce",
    "type": "locked"
  }
}
```

### Produtos
- Sauce Labs Backpack
- Sauce Labs Bike Light
- Sauce Labs Bolt T-Shirt

## Validações Esperadas

### Login
- Status da sessão
- Redirecionamento correto
- Mensagens de erro apropriadas

### Checkout
- Cálculo correto do total
- Validação de dados de envio
- Status do pedido

### Navegação
- Loading de páginas
- Estado dos elementos
- Consistência do carrinho
