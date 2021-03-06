
/// <reference types="cypress" />
const data = [
  {
    "id": 0,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
    "name": "Bacalhôa Quinta da Garrida Colheita Selecionada 2015",
    "price": 175.9,
    "discount": 45,
    "priceMember": 96.9,
    "priceNonMember": 114,
    "type": "Tinto",
    "classification": "Seco",
    "size": "750 ml",
    "rating": 4,
    "avaliations": 292,
    "country": "Portugal",
    "region": "Dão",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg",
    "sommelierComment": "Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015."
  },
  {
    "id": 1,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26453-01.png",
    "name": "Colección De Familia La Mateo D.O.Ca. Rioja 2017",
    "price": 390.9,
    "discount": 45,
    "priceMember": 302.36,
    "priceNonMember": 355.76,
    "type": "Tinto",
    "classification": "Seco",
    "volume": "750 ml",
    "rating": 0,
    "avaliations": 0,
    "country": "Espanha",
    "region": "Rioja",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/espanha.svg",
    "sommelierComment": "Colección de Familia La Mateo 2015 foi elaborado a partir de uma rigorosa seleção das variedades tempranillo, garnacha e graciano, todas escolhidas a dedo em El Salobral, o vinhedo mais emblemático da vinícola, com orientação norte-sul e solos argilosos e calcários. O vinho é produzido a partir da fermentação malolática em barris novos de 225 litros, pós é submetido a um processo de envelhecimento de 14 meses em barricas de carvalho francês Allier, Nevers, Tronçaise & Jupilles (85%) e americano da Pensilvânia (15%). Para preservar aromas e sabores, foi engarrafado sem filtrar, envelhecendo por mais 18 meses engarrafado, antes de ir à venda."
  },
  {
    "id": 2,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24168-01.png",
    "name": "Viña Bouchon País Salvaje 2019",
    "price": 241.9,
    "discount": 31,
    "priceMember": 166.55,
    "priceNonMember": 195.94,
    "type": "Tinto",
    "classification": "Seco",
    "volume": "750 ml",
    "Rating": 4,
    "rating": 4,
    "country": "Chile",
    "region": "Valle del Maule",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/chile.svg",
    "sommelierComment": "Pontuado com 92 Tim Atkin, este tinto traz a uva País, proveniente de vinhas selvagens que crescem naturalmente no Valle del Maule. A colheita dessas uvas é feita manualmente, com o auxílio de escadas de até 5 metros de altura. Para expressar fielmente suas características, esse vinho não é filtrado, preservando os aromas e sabores desta raridade"
  },
  {
    "id": 3,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19252-01.png",
    "name": "Canepa Novísimo Cabernet Sauvignon 2017",
    "price": 241.9,
    "discount": 31,
    "priceMember": 166.55,
    "priceNonMember": 195.94,
    "type": "Tinto",
    "classification": "Seco",
    "volume": "750 ml",
    "Rating": 4,
    "rating": 4,
    "country": "Chile",
    "region": "Valle Central",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/chile.svg",
    "sommelierComment": "Jovem e com um estilo que agrada com facilidade, esse versátil rótulo pode ser degustado sozinho ou harmonizado com receitas do dia a dia. A Viña Canepa, fundada no Chile por imigrantes italianos, iniciou a produção da linha Novísimo nos anos 80."
  },
  {
    "id": 4,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
    "name": "Bacalhôa Quinta da Garrida Colheita Selecionada 2015",
    "price": 175.9,
    "discount": 45,
    "priceMember": 96.9,
    "priceNonMember": 114,
    "type": "Tinto",
    "classification": "Seco",
    "size": "750 ml",
    "rating": 4,
    "avaliations": 292,
    "country": "Portugal",
    "region": "Dão",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg",
    "sommelierComment": "Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015."
  },
  {
    "id": 5,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26453-01.png",
    "name": "Colección De Familia La Mateo D.O.Ca. Rioja 2017",
    "price": 390.9,
    "discount": 45,
    "priceMember": 302.36,
    "priceNonMember": 355.76,
    "type": "Tinto",
    "classification": "Seco",
    "volume": "750 ml",
    "rating": 0,
    "avaliations": 0,
    "country": "Espanha",
    "region": "Rioja",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/espanha.svg",
    "sommelierComment": "Colección de Familia La Mateo 2015 foi elaborado a partir de uma rigorosa seleção das variedades tempranillo, garnacha e graciano, todas escolhidas a dedo em El Salobral, o vinhedo mais emblemático da vinícola, com orientação norte-sul e solos argilosos e calcários. O vinho é produzido a partir da fermentação malolática em barris novos de 225 litros, pós é submetido a um processo de envelhecimento de 14 meses em barricas de carvalho francês Allier, Nevers, Tronçaise & Jupilles (85%) e americano da Pensilvânia (15%). Para preservar aromas e sabores, foi engarrafado sem filtrar, envelhecendo por mais 18 meses engarrafado, antes de ir à venda."
  },
  {
    "id": 6,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24168-01.png",
    "name": "Viña Bouchon País Salvaje 2019",
    "price": 241.9,
    "discount": 31,
    "priceMember": 166.55,
    "priceNonMember": 195.94,
    "type": "Tinto",
    "classification": "Seco",
    "volume": "750 ml",
    "Rating": 4,
    "rating": 4,
    "country": "Chile",
    "region": "Valle del Maule",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/chile.svg",
    "sommelierComment": "Pontuado com 92 Tim Atkin, este tinto traz a uva País, proveniente de vinhas selvagens que crescem naturalmente no Valle del Maule. A colheita dessas uvas é feita manualmente, com o auxílio de escadas de até 5 metros de altura. Para expressar fielmente suas características, esse vinho não é filtrado, preservando os aromas e sabores desta raridade"
  },
  {
    "id": 7,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19252-01.png",
    "name": "Canepa Novísimo Cabernet Sauvignon 2017",
    "price": 241.9,
    "discount": 31,
    "priceMember": 166.55,
    "priceNonMember": 195.94,
    "type": "Tinto",
    "classification": "Seco",
    "volume": "750 ml",
    "Rating": 4,
    "rating": 4,
    "country": "Chile",
    "region": "Valle Central",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/chile.svg",
    "sommelierComment": "Jovem e com um estilo que agrada com facilidade, esse versátil rótulo pode ser degustado sozinho ou harmonizado com receitas do dia a dia. A Viña Canepa, fundada no Chile por imigrantes italianos, iniciou a produção da linha Novísimo nos anos 80."
  },
  {
    "id": 8,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
    "name": "Bacalhôa Quinta da Garrida Colheita Selecionada 2015",
    "price": 175.9,
    "discount": 45,
    "priceMember": 96.9,
    "priceNonMember": 114,
    "type": "Tinto",
    "classification": "Seco",
    "size": "750 ml",
    "rating": 4,
    "avaliations": 292,
    "country": "Portugal",
    "region": "Dão",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg",
    "sommelierComment": "Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015."
  }
];


describe('Lista de Produtos', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });


  it('Deveria encotnrar 9 Cards de Produtos', () => {
    for (let index = 0; index < 9; index += 1) {
      cy.get(`[data-cy="card-produto-${index}"]`).should('exist')

    }
  });

  it('Os itens renderizados tem que ser com base no retorno da API', () => {
    data.forEach((produto, index) => {
      cy.get(`[data-cy="card-produto-${index}"] > .sc-fFeiMQ > .nome-produto`).then((value) => {
        expect(value.text()).to.equal(produto.name)
      });
    })
  })

  it('Quando clicado deeria redirecionar o user para pagina de detalhes', () => {
    cy.get(`[data-cy="card-produto-0"]`).should('exist');
    cy.get(`[data-cy="card-produto-0"]`).click();

    cy.get('[alt="imagem do produto Bacalhôa Quinta da Garrida Colheita Selecionada 2015"]')
      .should('exist')

    cy.url().should('include', '/produto/0');
  })

  it.only('Seta de voltar deveria voltar a tela inicial', () => {
    cy.get(`[data-cy="card-produto-0"]`).should('exist');
    cy.get(`[data-cy="card-produto-0"]`).click();
    cy.get('[data-cy="voltar-inicial"]').click();
    cy.url().should('contain', '/?page=1')
  })

})
