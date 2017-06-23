# Instruções - Funcionamento
O projeto foi feito com o Framework [Angular 2](https://angular.io/) e utilizando a plataforma [SASS/SCSS](http://sass-lang.com/) para seu estilo.
Para o perfeito funcionamento do projeto, é necessário que o ambiente esteja [configurado](https://angular.io/guide/quickstart#devenv) para rodar o framework `Angular 2`.

1. Clonar o repositório no seu ambiente local
2. Acessar a pasta do repositório pelo terminal
3. Na raiz do projeto, rodar o seguinte comando: 
      ```
      ng serve
      ```
4. Acessar a aplicação no navegador no link <http://localhost:4200>
> Extra:
> O projeto está disponível online no link <http://minuto-news.herokuapp.com>
---
# Teste - Front-End
O desafio é realizar o desenvolvimento front-end da homepage de um jornal fictício. O desenvolvimento deve seguir fielmente o layout disponibilizado nos arquivos abaixo (espaçamento, cores, tipografia e etc). Você não deve utilizar nenhum framework CSS (Bootstrap, Foundation e etc) neste desafio.

## Instruções - Topo
- [ ] O submenu deve ser ativado no hover
- [ ] Os links do submenu não precisam ser verídicos

## Instruções - Slide
- [ ] Não pode ser utilizado nenhum plugin Jquery. Você pode, entretanto, usar o Jquery para manipular os elementos
- [ ] O nome das imagens, bem como a ordem delas, encontra-se no JSON [slide](Arquivos/JSON/slide.json)

## Instruções - Editorias
- [ ] A lista de editorias deve ser gerada a partir do JSON [notícias](Arquivos/JSON/noticias.json)
- [ ] As notícias devem ser exibidas de acordo com a editoria que está selecionada no selectbox, se nenhuma editoria estiver selecionada, todas as notícias precisam aparecer
- [ ] Deverá ser possível ordenar as notícias por data de publicacão (da mais recente para a mais antiga) ou por ordem alfabética
- [ ] As notícias dessa sessão devem vir do arquivo JSON chamado [notícias](Arquivos/JSON/noticias.json)
- [ ] O conteúdo da notícia também deve ser gerado dinamicamente (data, editoria, foto, título e texto)

## Instruções - Gráfico
- [ ] Fique à vontade para usar a ferramenta que preferir para gerar o gráfico. A única exigência é que ele seja gerado dinamicamente

## Instruções - Mapa
- [ ] O mapa deve ser gerado usando a API do Google Maps
- [ ] O pin/mark do mapa deve ser inserido via API do Google Maps

## Observações
- [ ] Você está livre para escolher a estrutura de diretórios da aplicação 
- [ ] Você não deve utilizar nenhum framework CSS (Bootstrap, Foundation e etc) neste desafio.
- [ ] Os arquivos .json não podem ser alterados
- [ ] Dúvida? Entre em contato por email: mateus.santos@oglobo.com.br

## Arquivos
- Layout [aqui](Arquivos/Layout)
- Imagens [aqui](Arquivos/Imagens)
- JSONS [aqui](Arquivos/JSON)

## Como submeter seu projeto
- [ ] Fork esse projeto
- [ ] Coloque seu projeto no repositório
- [ ] Escreva no arquivo README.md as instruções para rodar o mesmo 
- [ ] Envie o link do repositório para mateus.santos@oglobo.com.br, com o assunto: TESTE - Front-End O Globo

## Boa sorte!
