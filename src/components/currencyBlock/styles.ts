import styled from 'styled-components';
import colors from '../../styles/colors';

export const Block = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 350px;
  min-height: 200px;
  min-width: 250px;
  margin: 0 30px;
  background-color: ${colors.beige};
  border-radius: 5px;
  padding: 10px;

  article {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 30%;
    width: 80%;
    padding: 5px;
    border: 5px solid ${colors.salmon};
    border-radius: 5px;
  }

  h1 {
    color: ${colors.brown};
    font-size: 20px;
    margin-right: 5px;
  }

  p {
    font-size: 15px;
    color: ${colors.brown};
    font-weight: 700;
  }

  .select-coin {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    position: relative;
    width: 70%;
    background-color: ${colors.salmon};
    border-radius: 15px;
    cursor: pointer;

    label {
      flex: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
    }

    ul {
      display: none;
    }

    .showList {
      display: block;
      position: absolute;
      height: 145px;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: ${colors.salmon};
      top: 28px;
      width: 90%;
      padding: 2px;
      border-radius: 0 0 5px 5px;
      z-index: 2;
      border-bottom: 1px solid ${colors.brown};
      border-left: 1px solid ${colors.brown};
    }

    .showList::-webkit-scrollbar {
      background-color: ${colors.brown};
      border-radius: 15px;
      color: blue;
      width: 7px;
    }

    .showList::-webkit-scrollbar-thumb {
      background-color: ${colors.salmon};
      border-radius: 20px;
      border: 1.5px solid ${colors.brown};
    }

    li {
      list-style-type: none;
      font-size: 14px;
      padding: 3px;
      border-radius: 5px;
    }

    li:hover {
      background-color: ${colors.brown};
      color: ${colors.beige};
      font-weight: bold;
      transition-delay: 80ms;
    }
  }


  @media(max-width: 715px) {

    article {
      height: 40%;
    }

    .select-coin {
      padding: 1px 5px;

      .showList {
        top: 38px;

        label {
          font-size: 14px;
        }

        li {
          font-size: 12px;
        }
      }
    }
  }
`;
