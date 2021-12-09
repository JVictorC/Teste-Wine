import styled from 'styled-components';

interface IProps {
  size: number
}

export const RotadedIcon = styled.span<IProps>`

  .spiner {
    animation: myRotation 1s linear infinite;
    padding: 0px 15px;
    font-size: ${(props) => `${props.size}px` };
  }

  @keyframes myRotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
