import styled from 'styled-components';
import colors from '../../styles/colors';

export const Title = styled.header`
  display: flex ;
  align-items: center;
  justify-content: start;
  max-width: 700px;
  margin-top: 30px;

  h1 {
    font-size: 48px;
    color: ${colors.white};
    line-height: 56px;
  }

  label {
    font-size: 22px;
    color: ${colors.white};
  }

  img {
    width: 120px;
    object-fit: cover;
    margin-right: 22px;
  }

  @media(max-width: 715px) {
    flex-direction: column;
    align-items: start;
    margin-top: 50px;
    img {
        margin-bottom: 15px;
    }
  }

`;

export const Block = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  flex: 1;
  height: 350px;
  min-height: 200px;
  min-width: 250px;
  margin: 0 30px;
  background-color: ${colors.beige};
  border: 5px solid ${colors.salmon};
  border-radius: 5px;
  padding: 10px;

  h1 {
    color: ${colors.brown};
    font-size: 25px;
    padding: 5px;
  }

  .highlight {
    background-color: ${colors.brown};
    border-radius: 5px;
    color: ${colors.beige};
  }

  img {
    max-width: 115px;
    transform: translate(0px);
    animation: float 2s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid ${colors.brown};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }

  @media(max-width: 715px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  svg:active {
    transform: scale(1.1);
    transition: all 0.1s;
  }

  @media(max-width: 715px) {
    flex-direction: column;
    height: 500px;
    svg {
        margin: 10px 0;
    }
  }
`;

export const List = styled.article`

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: ${ colors.salmon};
    margin: 10px 0;
    height: 50px;
    border-radius: 7px;
  }

  div {
    display: flex;
    align-items: baseline;
  }

  h3 {
    font-weight: bold;
    margin-right: 5px;
  }
`;
