# Lexter Algorithm Interview

Este projeto é uma aplicação web construída utilizando Next.js, Typescript, Jest para teste unitário e Tailwind CSS para estilização. O objetivo principal é converter uma estrutura de dados para outra de maneira eficiente e fácil de usar.

Demo: https://lexter-algorithm-interview.vercel.app

## Endpoint de Conversão

Além da interface web, foi criado um endpoint para realizar a conversão diretamente. Você pode acessá-lo em [https://lexter-algorithm-interview.vercel.app/api/convert](https://lexter-algorithm-interview.vercel.app/api/convert). Utilize o método GET e passe o array a ser convertido no query parameter "data".

Exemplo:

https://lexter-algorithm-interview.vercel.app/api/convert?data=[SEU_ARRAY_AQUI]

## Instalação

Certifique-se de ter o Node.js instalado em seu sistema. Em seguida, clone este repositório e execute o seguinte comando no terminal para instalar as dependências:

```bash
npm install
```

## Executando a Aplicação

Para iniciar a aplicação, utilize o seguinte comando:

```bash
npm run dev
```

Acesse http://localhost:3000 em seu navegador para visualizar a aplicação.

## Função Principal

A função principal responsável pela conversão de dados está localizada em src/app/api/convert/convert.ts. Este é o coração da aplicação, onde a lógica de conversão é implementada em Typescript.

## Testes Unitários

Os testes unitários são realizados usando o framework Jest. Para executar os testes, utilize o seguinte comando:

```bash
npm run test
```

Isso garantirá que a função de conversão esteja funcionando conforme esperado.
