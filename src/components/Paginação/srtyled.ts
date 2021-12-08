import styled from 'styled-components';


export const ComponenteProximo = styled.section`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: #b6116e;

  p {
    margin: 13px
  }

`

export const OpcaoNavegacaoNormal = styled.article`
  border: 2px solid #b6116e;
  padding: 10px 15px;
  margin: 10px;
  background-color: ${props => props.color};
  color: ${props => props.color === '#b6116e' && 'white'  };
  border-radius: 5px;
  cursor: pointer;
`


export const OpcaoNavegacaoExpandida = styled(OpcaoNavegacaoNormal)`
  padding: 10px 25px;
`

export const ButttonProximo = styled.button`
  border: none;
  background-color: white;
  color: #b6116e;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`

export const PaginaUm = styled.div`
  display: flex;
  align-items: flex-end
`