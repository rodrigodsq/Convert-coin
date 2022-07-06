import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { ICoins } from '../../models/coin.model';
import colors from '../../styles/colors';
import { Block } from './styles';

interface IParamsCoins {
  params: Array<ICoins>;
  changeCoin(coin: string, isFrom: boolean): void
}

const CurrencyBlock: React.FC<IParamsCoins> = ({ params, changeCoin }) => {

  const [coins, setCoins] = useState<Array<ICoins>>([]);
  const [valueFrom, setValueFrom] = useState<string>('');
  const [valueTo, setValueTo] = useState<string>('');
  const [showListTo, setShowListTo] = useState<boolean>();
  const [showListFrom, setShowListFrom] = useState<boolean>();

  useEffect(() => {
    setCoins(params);
  }, [params]);

  const listCoins = useMemo(() => {
    return coins;
  }, [coins]);

  const nameCoinFrom = useMemo<string>(() => {
    return coins.find(value => value.key === valueFrom)?.value || '';
  }, [valueFrom]);

  const nameCoinTo = useMemo<string>(() => {
    return coins.find(value => value.key === valueTo)?.value || '';
  }, [valueTo]);

  const handleSelected = useCallback((value: string, isFrom: boolean) => {
    changeCoin(value, isFrom);
    isFrom ? setValueFrom(value): setValueTo(value);
  }, []);

  return (
    <Block>

      <article>
        <h1>De:</h1>
        <div className="select-coin" onClick={() => setShowListFrom(!showListFrom)}>
          <label>{ nameCoinFrom }</label>
          {
            showListFrom ? (<FaAngleUp size={20} color={colors.brown}></FaAngleUp>) :
                      (<FaAngleDown  size={20} color={colors.brown}></FaAngleDown>)
          }
          <ul className={ showListFrom ? 'showList' : '' }>
          {
            listCoins?.map(coin => (
              <li key={coin.key} onClick={e => handleSelected(coin.key, true)}>
                { coin.value}
              </li>
            ))
          }
          </ul>
        </div>

      </article>

      <article>
        <h1>Para:</h1>
          {/*Implement in new feature */}
          {/*<div>{ nameCoinTo.length ? <p>{nameCoinTo}</p> : null }</div> */}
        <div className="select-coin" onClick={() => setShowListTo(!showListTo)}>
            <label>{ nameCoinTo }</label>
            {
              showListTo ? (<FaAngleUp size={20} color={colors.brown}></FaAngleUp>) :
                        (<FaAngleDown  size={20} color={colors.brown}></FaAngleDown>)
            }
            <ul className={ showListTo ? 'showList' : '' }>
            {
              listCoins?.map(coin => (
                <li key={coin.key} onClick={e => handleSelected(coin.key, false)}>
                  { coin.value}
                </li>
              ))
            }
            </ul>
        </div>
      </article>

    </Block>
  )
}

export default CurrencyBlock;
