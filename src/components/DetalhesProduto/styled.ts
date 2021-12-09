import styled from 'styled-components';

export const ConatainerDetalhes = styled.section`
  padding-top: 50px;
  margin: 0px 40px;
`;

export const LoadingDiv = styled.article`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Voltar = styled.button`
  display: none;
  background-color: white;
  border: none;

  @media (min-width: 800px) {
    width: 100px;
    font-size: 25px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const ConteudoPrincipal = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .screenMobile {
    @media(min-width: 800px) {
      display: none;
    }
  }

  .screenMedium {
    display: none;
    @media(min-width: 800px) {
      display: block;
    }
  }

  @media (min-width: 800px) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const ImageProduto = styled.article`
  width: 100%;
  @media(min-width: 800px) {
    width: 60%;
  }
`;

export const Detalhes = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media(min-width: 800px) {
    width: 45%;
  }
`;

export const RegiaoStyled = styled.article`
  display: flex;
  width: 60%;
  justify-content: space-between;
  color: #c81a78;
  font-weight: 500;
  margin-bottom: 20px;

  .seta {
    color: #aaaaaa;
  }

  .regiao {
    color: #aaaaaa;
  }
`;
export const NomeProduto = styled.h1`
  font-size: 30px;
  margin: 15px 0px;
`;

export const EspecificaçõesStyled = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
  color: grey;

  .star-color {
    color: #f9b950;
  }

  .dados-pais {
    display: flex;

    span {
      margin: 0px 10px;
    }
  }
`;

export const PrecosStyled = styled.article`
  display: flex;
  flex-direction: column;
  margin: 25px 0px;

  .price-member {
    .price-0 {
      ::before {
        content: 'R$';
        font-size: 25px;
      }
      ::after {
        content: ',';
      }
      color: #c81a78;
      font-size: 30px;
      font-weight: 600;
    }
    .price-1 {
      color: #c81a78;
      font-size: 25px;
      font-weight: 600;
    }
  }

  .price-non-member {
    text-transform: uppercase;
    margin: 5px 0;
    color: #8f8f8f;
    font-size: 13px;
    font-weight: 600;

    ::before {
      content: 'não sócio R$';
    }

    .price-0 {
      ::after {
        content: ',';
      }
    }

    .price-1 {
      ::after {
        content: '/un.';
      }
    }
  }
`;

export const ComentarioStyled = styled.article`
  h5 {
    font-size: 15px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #666666;
  }
`;

export const BotaoAdicionarStyled = styled.article`
  background-color: #7ebc42;
  margin: 60px 0;
  padding: 15px;
  border-radius: 5px;
  width: 70%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;

  article {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
  }

  .icon {
    cursor: pointer;
    font-size: 30px;
  }

  button {
    background-color: #7ebc42;
    border: none;
    font-size: 15px;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;
