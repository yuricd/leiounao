import React, { useState } from 'react';
import Button from '../button/Button';
import Score from '../score/Score';
import Logos from '../logos/Logos';
import Intro from '../intro/Intro';
import LoadingBox from '../loadingBox/LoadingBox';
import data from '../../data/data';
import { optionsEnum } from '../../enums/enums';
import styles from './Main.module.scss';
import next from '../../images/next.svg';
import ReactHtmlParser from 'react-html-parser';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const dataLen = data.length;

function Main() {

  const [showContent, setShowContent] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [current, setCurrent] = useState(0);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [finished, setFinished] = useState(false);
  const [intro, setIntro] = useState(true);

  const handleScrollToText = () => {
    const explanation = document.getElementById('explanation');
    window.scrollTo({
      top: explanation.offsetHeight / 1.8,
    })
  }

  const handleOptionClick = async () => {
    setAnswered(true);
    await setShowContent(true);
    await sleep(1000);
    handleScrollToText();
  }

  const clearState = () => {
    setShowContent(false);
    setAnswered(false);
    setBgLoaded(false);
  }

  const handleNext = () => {
    clearState();
    const next = current + 1;
    if (next < dataLen) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  }

  const handleBgLoad = async () => {
    setBgLoaded(true);
  }

  const expected = data[current].answer;

  const whatIs = (data[current].answer === optionsEnum.IS_LAW) ? 'É lei' : 
                  data[current].answer === optionsEnum.IS_PROJECT ? 'É projeto de lei' :
                  data[current].answer === optionsEnum.NOT_LAW ? 'Não é lei' : '';

  return (
    <div className={styles.wrapper}>
      
      {intro ? (
        <Intro handleClick={() => setIntro(false)} />
      ) : (
        <LoadingBox loading={!bgLoaded}>
          <header>
            <Logos />
          </header>
          <div className={styles.background}>
            <img 
              src={`/images/${data[current].image}`} 
              alt="wallpaper"
              onLoad={handleBgLoad}
              className={`${(bgLoaded) ? styles.fadeIn : ''}`}
            />
            <div className={styles.overlay} />
          </div>

          <div className={styles.container}>
            <div className={styles.question}>
              <div className={styles.title}>
                <h1>{data[current].title}</h1>
              </div>

              <div className={styles.options}>
                <Button 
                  type={optionsEnum.IS_LAW}
                  answered={answered}
                  expected={expected}
                  handleClick={() => handleOptionClick()}
                >É lei</Button>
                
                <Button 
                  type={optionsEnum.IS_PROJECT}
                  answered={answered}
                  expected={expected}
                  handleClick={() => handleOptionClick()}
                >É projeto de lei</Button>
                
                <Button 
                  type={optionsEnum.NOT_LAW}
                  answered={answered}
                  expected={expected}
                  handleClick={() => handleOptionClick()}
                >Não é lei</Button>
              </div>
            </div>
            <div className={`${styles.content} ${(showContent) ? styles.expand : ''}`}>
              {showContent && (
                <div id="explanation" className={styles.fadeIn}>
                  <h2>{whatIs}</h2>
                  <p>{ReactHtmlParser(data[current].description)}</p>
                </div>
              )}
            </div>
            
            {showContent && (
              <div className={`${styles.next} ${styles.fadeIn}`}>
                <button onClick={handleNext}>
                  <img src={next} alt="Next" />
                </button>
              </div>
            )}
          </div>
        </LoadingBox>
      )}

      {finished && (
        <Score />
      )}
    </div>
  );
}

export default Main;
