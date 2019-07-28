import React from 'react';
import styles from './Score.module.scss';
import { connect } from 'react-redux';
import data from '../../data/data';
import { ydLink, labInstagram, labFacebook } from '../../constants/links';

function Score(props) {
  const dataLen = data.length;;
  const ratio = props.score / dataLen;
  return (
    <div className={`${styles.score} ${styles.fadeIn}`}>
      <div className={styles.content}>
        <h1>Você acertou {props.score} de {dataLen} perguntas</h1>
        {ratio <= .2 && (
          <p>É, não foi tão bem... Mas não se preocupe, dê uma olhada na página do LAB (Leis Absurdas do Brasil) no <a href={labFacebook} target="_blank" rel="noopener noreferrer">Facebook</a> ou <a href={labInstagram} target="_blank" rel="noopener noreferrer">Instagram</a> e fique por dentro das leis bizarras do nosso país.</p>
        )}

        {ratio > .2 && ratio <= .6 && (
          <p>Nada mal! Talvez você queira ver mais leis que o LAB (Leis Absurdas do Brasil) expõe no <a href={labFacebook} target="_blank" rel="noopener noreferrer">Facebook</a> e <a href={labInstagram} target="_blank" rel="noopener noreferrer">Instagram</a>. As bizarrices são ilimitadas, e tomara que sua paciência também.</p>
        )}

        {ratio > .6 && ratio <= 1 && (
          <p>Uau! Parece que você realmente sabe como são sinistras as leis no Brasil. Que tal acompanhar o LAB (Leis Absurdas do Brasil) no <a href={labFacebook} target="_blank" rel="noopener noreferrer">Facebook</a> e <a href={labInstagram} target="_blank" rel="noopener noreferrer">Instagram</a>? Lá sempre são postadas leis <strike>inúteis</strike> estranhas.</p>
        )}

        <p>Ah! E não se esqueça de compartilhar seu resultado com seus amigos!</p>

        <div className={styles.actions}>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.hostname}&quote=Eu acertei ${props.score} de ${dataLen} leis! E você, consegue dizer o que é lei e o que não é?`} target="_blank" rel="noopener noreferrer">Compartilhar resultado no Facebook</a>
          <a href="/">Refazer</a>
        </div>

        <div className={styles.credits}>
          <span>Projeto de <a href="https://github.com/yuricd/leiounao" target="_blank" rel="noopener noreferrer">código aberto</a> desenvolvido por <a href={ydLink}>Yuri Delgado</a> em parceria com <a href={labFacebook} target="_blank" rel="noopener noreferrer">LAB - Leis Absurdas do Brasil</a></span>
        </div>
      </div>
      
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return { score: state.score };
}

export default connect(mapStateToProps)(Score);
