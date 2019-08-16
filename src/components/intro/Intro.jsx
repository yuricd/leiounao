import React from 'react';
import styles from './Intro.module.scss';
import data from '../../data/data';
import leiounao from '../../images/leiounao.svg';

function Intro(props) {
  
  const { handleClick } = props;
  const dataLen = data.length;

  return (
    <div className={`${styles.intro} ${styles.fadeIn}`}>
      <div className={styles.content}>
        <img src={leiounao} alt="Lei ou Não?" />
        <p>Mostraremos um título e você escolherá se esse título é de uma lei, projeto de lei ou nenhum dos dois (uma "lei inventada"). Serão exibidos {dataLen} títulos e, ao final, você saberá quantos pontos obteve.</p>
        <p>Boa sorte!</p>

        <div className={styles.actions}>
          <button onClick={handleClick}>Começar</button>
        </div>

      </div>
    </div>
  )
}

export default Intro;
