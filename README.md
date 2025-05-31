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

A API estará disponível em: ```http://127.0.0.1:5000```

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

O Angular iniciará em:  ```http://localhost:4200```

---

## 🧪 Testando a Aplicação

Acesse o navegador e vá até a aba **"Produtos"**.

Nesta página é possível:
- Visualizar produtos cadastrados
- Inserir novos produtos
- Editar produtos existentes
- Excluir produtos do banco

Todas as operações são integradas com a API em Flask conectada ao MongoDB.

A seguir, confira algumas capturas de telas de teste:
![image](https://github.com/user-attachments/assets/b3525b30-dbbc-419d-9094-f0aaf2eb2388)
![image](https://github.com/user-attachments/assets/939610fb-96c9-4402-93f1-e903566b4d3b)
![image](https://github.com/user-attachments/assets/fd6026d4-f9fe-42f3-b24a-0685dda3f449)
![image](https://github.com/user-attachments/assets/23a5ef90-c9e1-4aed-9d28-c4731788d8a1)
![image](https://github.com/user-attachments/assets/a31b25cb-7870-47b2-8506-04dcc3101a97)
![image](https://github.com/user-attachments/assets/a80959e6-1b27-49df-a850-06b00a572423)
![image](https://github.com/user-attachments/assets/d22355c6-9cec-4d79-9247-5f015663199c)
![image](https://github.com/user-attachments/assets/582656d9-a67e-434a-aee4-fa3c2dff2344)
![image](https://github.com/user-attachments/assets/e0cc438e-a5d1-4f28-8d85-66e793886626)

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
