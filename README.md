 
 # alfabit-design-system

- Este projeto é fruto do curso de 'React: criando um Design System com tailwindCSS' da plataforma ALURA


 <!-- <img src="/public/sb.gif" alt="storybook" width="500"/> -->
 ![storybook](./public/sb.gif "storybook")

## Introdução

```markdown
### Design System com Next.js e Tailwind CSS

Este repositório foi desenvolvido como parte de um curso focado na criação de um **Design System** utilizando **Next.js** e **Tailwind CSS**. O projeto explora práticas modernas de desenvolvimento de componentes e documentação de interfaces reutilizáveis, com a integração de ferramentas essenciais para um fluxo de trabalho eficiente.



 

## 📚 Conteúdos Estudados

Durante o curso, abordamos os seguintes tópicos:

### 🛠️ Configuração Inicial
- Criação de um projeto Next.js com Tailwind CSS.
- Entendimento do **Atomic Design** como base para estruturar componentes.
- Importância e uso de **Design Tokens** para criar um sistema escalável e consistente.

### 📖 Documentação com Storybook
- Instalação e configuração do **Storybook** em uma aplicação Next.js.
- Criação de Stories para documentar componentes reutilizáveis.
- Uso de **Markdown** para enriquecer a documentação.

### 🎨 Integração com Figma e Tokens de Design
- Importação de valores do **Figma** para o Tailwind CSS.
- Mapeamento de valores CSS para tokens do projeto.
- Estruturação da **paleta de cores** e outros tokens de design.

### 🧩 Criação e Evolução de Componentes
- Adição de variantes aos componentes (e.g., estilos alternativos).
- Reflexão das variantes na documentação do Storybook.
- Criação de novos componentes para o ecossistema do Design System.
- Extração de complexidade em componentes para torná-los mais modulares.
- Tratamento de variações visuais compostas.

## 🚀 Ferramentas Utilizadas
- **Next.js**: Framework para construção de aplicações React escaláveis.
- **Tailwind CSS**: Biblioteca de utilitários CSS para estilização rápida e eficiente.
- **Storybook**: Ferramenta para documentar, testar e organizar componentes.
- **Figma**: Ferramenta de design colaborativa para mapear tokens e fluxos visuais.

## 🎯 Objetivos do Projeto
- Criar um Design System completo, modular e reutilizável.
- Estruturar componentes com base nos princípios do Atomic Design.
- Documentar todos os componentes e suas variantes de forma clara.
- Garantir consistência visual e escalabilidade no desenvolvimento de projetos futuros.

## 🗂️ Estrutura do Projeto
A estrutura do repositório segue o padrão abaixo:

```plaintext
.
├── public/              # Arquivos estáticos como imagens e fontes
├── src/
│   ├── app/             # Arquivos principais da aplicação
│   │   ├── components/  # Componentes do Design System
│   │   ├── fonts/       # Fontes do projeto
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Página principal
│   ├── stories/         # Stories do Storybook
│   ├── globals.css      # Estilos globais
├── tailwind.config.ts   # Configurações do Tailwind CSS
├── package.json         # Dependências do projeto
└── README.md            # Documentação do repositório
```

## 🖼️ Demonstração
Após rodar o projeto, você pode visualizar os componentes documentados no Storybook:
```bash
npm run storybook
```

## 📦 Como Usar este Repositório
1. Clone o repositório:
   ```bash
   git clone https://github.com/msbzz/alfabit-design-system.git
   cd alfabit-design-system
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o projeto:
   ```bash
   npm run dev
   ```
4. Visualize os componentes no Storybook:
   ```bash
   npm run storybook
   ```

## 💡 Reflexões
Este projeto serve como base para o desenvolvimento de Design Systems em aplicações modernas. Ele ilustra como criar um sistema escalável, documentado e integrado a ferramentas de design como o Figma, garantindo consistência e produtividade no desenvolvimento de interfaces.

---

### 📝 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

  