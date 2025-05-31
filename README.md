# 🛒 API E-commerce de Produtos Artesanais

Este projeto foi desenvolvido como parte da disciplina de **Bancos de Dados Não Relacionais**. A proposta foi criar uma **API com operações CRUD**, utilizando o banco **MongoDB**, baseada em um dos temas propostos pelo professor — neste caso, um **E-commerce de Produtos Artesanais**.

---

## 👤 Responsável

**Pedro Nicolas Costa**  
Curso: Ciência da Computação  
Semestre: 3º  
Disciplina: Bancos de Dados Não Relacionais  

---

## 🗂️ Modelagem do Banco

A modelagem foi estruturada pensando nas operações de um e-commerce simples, com foco principal em **produtos artesanais**.

📷 *[Insira aqui uma imagem da modelagem do banco]*

---

## ⚙️ Requisitos

### Backend (API Flask com MongoDB)
- Python 3.9 ou superior
- Acesso a internet (Banco MongoDB Atlas)

### Frontend (Angular)
- Node.js (versão 12.2 ou superior)
- NPM
- Angular CLI (versão 13)

---

## 🚀 Como Executar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/pedronicolascosta/LojaVirtual.git
```

```bash
cd LojaVirtual
```

---

### 2. Executar o Backend (API em Flask)

```bash
cd backend
```

```bash
python -m venv venv
venv\Scripts\activate  # Para Windows
python app.py
```

A API estará disponível em:  
http://127.0.0.1:5000

---

### 3. Executar o Frontend (Angular)

Abra um novo terminal e execute:

```bash
cd frontend
```

```bash
npm install
npm install -g @angular/cli@13
ng serve
```

O Angular iniciará em:  
http://localhost:4200

---

## 🧪 Testando a Aplicação

Acesse o navegador e vá até a aba **"Produtos"**.

Nesta página é possível:
- Visualizar produtos cadastrados
- Inserir novos produtos
- Editar produtos existentes
- Excluir produtos do banco

Todas as operações são integradas com a API em Flask conectada ao MongoDB.

---

## 📁 Estrutura do Projeto

```
LojaVirtual/
├── backend/
│   ├── app.py
│   └── ...
├── frontend/
│   ├── src/
│   └── ...
└── README.md
```

---

## 📃 Licença

Este projeto foi desenvolvido apenas para fins educacionais.
