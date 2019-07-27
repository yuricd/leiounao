import React, { useState } from 'react';
import data from '../../data/data';
import Button from '../button/Button';
import { optionsEnum } from '../../enums/enums';
import styles from './Main.module.scss';
import next from '../../images/next.svg';

const current = data[0];

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Main() {

  const [showContent, setShowContent] = useState(false);
  const [correct, setCorrect] = useState(undefined);
  const [answered, setAnswered] = useState(false);

  const handleScrollToText = () => {
    const explanation = document.getElementById('explanation');
    window.scrollTo({
      top: explanation.offsetHeight / 1.8
    })
  }

  const handleCorrectAnswer = (given, expected) => {
    setCorrect(given === expected);
  }

  const handleOptionClick = async (givenAnswer) => {
    setAnswered(true);
    handleCorrectAnswer(givenAnswer, current.answer);
    await setShowContent(!showContent);
    await sleep(1000);
    handleScrollToText();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <img src={`/images/${current.image}`} alt="wallpaper" />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.question}>
          <div className={styles.title}>
            <h1>{current.title}</h1>
          </div>

          <div className={styles.options}>
            <Button 
              handleClick={() => handleOptionClick(optionsEnum.IS_LAW)}
              given={optionsEnum.IS_LAW}
              expected={current.answer}
              answered={answered}
            >É lei</Button>
            
            <Button 
              handleClick={() => handleOptionClick(optionsEnum.IS_PROJECT)}
              given={optionsEnum.IS_PROJECT}
              expected={current.answer}
              answered={answered}
            >É projeto de lei</Button>
            
            <Button 
              handleClick={() => handleOptionClick(optionsEnum.NOT_LAW)}
              given={optionsEnum.NOT_LAW}
              expected={current.answer}
              answered={answered}
            >Não é lei</Button>
          </div>
        </div>

        <div className={`${styles.content} ${(showContent) ? styles.expand : ''}`}>
          {showContent && (
            <div id="explanation" className={styles.fadeIn}>
              <h2>Sim, é lei</h2>
              <p>{current.description}</p>
            </div>
          )}
        </div>
        
        {showContent && (
          <div className={`${styles.next} ${styles.fadeIn}`}>
            <button onClick={() => console.log('ok')}>
              <img src={next} alt="Next" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
