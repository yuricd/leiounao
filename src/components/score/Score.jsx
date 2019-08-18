import React from 'react';
import styles from './Score.module.scss';
import { connect } from 'react-redux';
import data from '../../data/data';
import { ydLink, anarcozeTwitter, APP_URL } from '../../constants/links';

function Score(props) {
  const dataLen = data.length;;
  const ratio = props.score / dataLen;
  return (
    <div className={`${styles.score} ${styles.fadeIn}`}>
      <div className={styles.content}>
        <h1>Você acertou {props.score} de {dataLen} perguntas</h1>
        {ratio <= .2 && (
          <p>É, não foi tão bem... Mas não se preocupe, ninguém consegue saber de tudo.</p>
        )}

        {ratio > .2 && ratio <= .6 && (
          <p>Nada mal! Sempre é possível aprender mais. As bizarrices são ilimitadas, e tomara que sua paciência também.</p>
        )}

        {ratio > .6 && ratio <= 1 && (
          <p>Uau! Parece que você realmente sabe como são sinistras as leis no Brasil.</p>
        )}

        <p>Ah! E não se esqueça de compartilhar seu resultado com seus amigos!</p>

        <div className={styles.actions}>
          <a id="share" href={`https://www.facebook.com/sharer/sharer.php?u=${APP_URL}&quote=Eu acertei ${props.score} de ${dataLen} leis! E você, consegue dizer o que é lei e o que não é?`} target="_blank" rel="noopener noreferrer">Compartilhar resultado no Facebook</a>
          <a id="restart" href="/">Refazer</a>
        </div>

        <div className={styles.credits}>
          <span>Projeto de <a href="https://github.com/yuricd/leiounao" target="_blank" rel="noopener noreferrer">código aberto</a> desenvolvido por <a href={ydLink} target="_blank" rel="noopener noreferrer">Yuri Delgado</a> em parceria com <a href={anarcozeTwitter} target="_blank" rel="noopener noreferrer">Anarcoze</a>.</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { score: state.score };
}

export default connect(mapStateToProps)(Score);
