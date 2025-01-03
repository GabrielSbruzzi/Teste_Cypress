# Automação de Testes para o Site Sauce Demo com Cypress 🚀

## 🎯 Objetivo

O objetivo deste projeto é criar uma **automação completa de testes** para o site **Sauce Demo** utilizando o framework **Cypress**. A automação inclui o levantamento de cenários de teste, sua implementação e a configuração da geração de relatórios detalhados sobre a execução dos testes.

---

## 📝 Cenários de Teste

### 1. **Login** 🔑
- **Login com credenciais válidas**: Verificar se o login com usuário e senha válidos redireciona corretamente para a página de produtos.
- **Login com credenciais inválidas**: Validar se o sistema exibe a mensagem de erro ao tentar logar com credenciais inválidas.
- **Campos obrigatórios e mensagens de erro**: Garantir que os campos de login sejam obrigatórios e que as mensagens de erro apareçam corretamente quando campos obrigatórios não forem preenchidos.

### 2. **Página de Produtos** 🛍️
- **Listagem de produtos**: Testar se todos os produtos estão sendo exibidos corretamente na página.
- **Filtros de ordenação**: Validar os filtros de ordenação de produtos (ex.: por preço, nome).
- **Validação visual**: Certificar-se de que a interface de usuário (UI) é renderizada corretamente.

### 3. **Carrinho de Compras** 🛒
- **Adição e remoção de produtos**: Verificar se é possível adicionar e remover produtos do carrinho de compras com sucesso.
- **Validação de quantidade e total**: Validar que a quantidade de itens e o valor total da compra são calculados corretamente.

### 4. **Checkout** 💳
- **Preenchimento de informações**: Testar o preenchimento correto dos campos obrigatórios durante o processo de checkout.
- **Campos obrigatórios e finalização de compra**: Garantir que todos os campos obrigatórios sejam preenchidos antes de finalizar a compra e validar se a compra é finalizada com sucesso.

---

## 🛠️ Estrutura de Implementação

A estrutura do código será **modular** e organizada da seguinte forma:

- **Page Objects**: A separação de responsabilidades será realizada através da criação de **Page Objects**, facilitando a manutenção e reutilização de código.
- **Selectors**: Serão criados seletores reutilizáveis para a interação com os elementos da página.
- **Testes**: Os testes serão divididos e organizados por funcionalidades, seguindo os cenários descritos.

---

## 📊 Geração de Relatórios

A automação será configurada para gerar **relatórios detalhados** após cada execução de teste. O relatório irá incluir:

- ✅ O status de cada teste (sucesso ou falha).
- 📝 Detalhes sobre a execução, incluindo mensagens de erro, se houver.
- ⚠️ Visualização clara de falhas e pontos de sucesso.

Utilizaremos o **Cypress Dashboard** ou uma ferramenta personalizada para gerar e visualizar esses relatórios.

---

## 🚀 Integração com Pipeline CI/CD (Opcional)

Para garantir a execução automática dos testes, configuraremos um **pipeline CI/CD** com **GitLab CI/CD** (ou outra ferramenta de CI/CD). Este pipeline realizará as seguintes etapas:

1. ⚙️ **Execução dos testes automatizados**.
2. 📑 **Geração e armazenamento dos relatórios**.
3. 📲 **Notificação de falha**: Caso algum teste não passe, uma notificação será enviada.

---

## 💻 Tecnologias Utilizadas

- **Cypress**: Framework de testes para automação de testes end-to-end.
- **GitLab CI/CD** (ou outra ferramenta de CI/CD): Para execução automatizada dos testes e geração de relatórios.
- **Relatórios de Execução**: Ferramentas de relatórios (ex.: Cypress Dashboard ou outro plugin de relatórios).

---

## 🏃‍♂️ Como Rodar o Projeto

### 1. **Instalar Dependências**

Primeiro, instale as dependências do projeto com o seguinte comando:

```bash
npm install
```

### 2. **Rodar os Testes Localmente**

Para rodar os testes em um ambiente local, execute:

```bash
npx cypress open
```

### 3. **Rodar os Testes em Modo Headless**

Para rodar os testes sem interface gráfica e gerar os relatórios, use o seguinte comando:

```bash
npx cypress run
```

### 4. **Configuração do Pipeline CI/CD**

Se desejar configurar o pipeline no **GitLab**, adicione o arquivo `.gitlab-ci.yml` ao repositório com as configurações para execução dos testes e geração de relatórios. Não se esqueça de incluir notificações de falha.
