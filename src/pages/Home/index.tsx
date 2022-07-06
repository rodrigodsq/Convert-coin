import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import dollarIcon from '../../assets/dollar.png';
import coinIcon from '../../assets/gold-coin-money.png';
import CurrencyBlock from '../../components/currencyBlock';
import { ICoins, IListConverted } from '../../models/coin.model';
import api from '../../services/api';
import colors from '../../styles/colors';
import { Block, Container, List, Title } from './styles';

const Home: React.FC = () => {

  const [coins, setCoins] = useState<Array<ICoins>>([]);
  const [coinFrom, setCoinFrom] = useState<string>('');
  const [coinTo, setCoinTo] = useState<string>('');
  const [convertedCurrency, setConvertedCurrency] = useState<number>();
  const [listConverted, setListConverted] = useState<Array<IListConverted>>([]);
  const [loadCoins, setLoadCoins] = useState<boolean>();
  const [loadConvert, setLoadConvert] = useState<boolean>();

  useEffect(() => {
    setLoadCoins(true);
    api.get('currencies.json').then(response => {
      const keys = Object.keys(response.data);
      const mountCoins: Array<ICoins> = keys.map(key => ({
          key,
          value: response.data[key]
      }));
      setTimeout(() => {
        setLoadCoins(false);
      }, 3000);

      setCoins(mountCoins);
    });
  }, [])

  const nameCoinFrom = useMemo<string>(() => {
    return coins.find(value => value.key === coinFrom)?.value || '';
  }, [coinFrom]);

  const nameCoinTo = useMemo<string>(() => {
    return coins.find(value => value.key === coinTo)?.value || '';
  }, [coinTo]);

  const handleCoin = useCallback((coin: string, isFrom: boolean) => {
    setConvertedCurrency(0);
    isFrom ? setCoinFrom(coin): setCoinTo(coin);
  }, []);

  const convertCoin = useCallback(() => {
    if(!coinFrom.length || !coinTo.length) {
      alert('Selecione os campos "De" e "Para"')
      return;
    }
    setLoadConvert(true);
    api.get(`currencies/${coinFrom}/${coinTo}.json`)
    .then( response => {
      setConvertedCurrency(response.data[coinTo]);
      setListConverted([...listConverted, {
        from: {
          key: coinFrom,
          value: nameCoinFrom
        },
        to: {
          key: coinTo,
          value: nameCoinTo
        },
        currency: response.data[coinTo]
      }]);
      setLoadConvert(false);
    });
  }, [coinFrom, coinTo]);

  return (
    <>
      <Title>
        <img src={coinIcon}/>
        <div>
          <h1>Convert Coin</h1>
          <label> Faça a conversão de varias moedas e descubra o quanto elas podem valer.</label>
        </div>
      </Title>

      <Container>
        {
          loadCoins ? (
            <Block>
              <span className="loader"></span>
            </Block>
            ) : (
              <CurrencyBlock
                params={ coins }
                changeCoin={(value, isFrom) => handleCoin(value, isFrom)}/>
            )
        }
        <FaExchangeAlt
          onClick={() => convertCoin()}
          size={ 50 }
          color={ colors.salmon }
          cursor="pointer" />
        <Block>
          {
            loadConvert ?
              <span className="loader"></span>
            :
            !!convertedCurrency ?
              (
                <>
                  <h1 className="highlight">1 {nameCoinFrom}</h1>
                  <h1>vale</h1>
                  <h1 className="highlight"> {convertedCurrency} {nameCoinTo} </h1>
                </>
              )
            :
              <img src={dollarIcon} />
          }
        </Block>
      </Container>

      <List>
        {
          listConverted?.map((list, i) => (
            <li key={i}>
              <div>
                <h3>De: </h3>
                <p> 1 {list.from.value} </p>
              </div>
              <div>
                <h3>Para: </h3>
                <p> {list.currency} {list.to.value} </p>
              </div>

            </li>
          ))
        }
      </List>
    </>
  )
}

export default Home;
