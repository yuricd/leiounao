import React from 'react';
import styles from './Logos.module.scss';
import logoYD from '../../images/logo-yd.svg';
import logoLab from '../../images/logo-lab.png';
import { connect } from 'react-redux';
import { ydLink, labFacebook } from '../../constants/links';

function Logos() {
  return (
    <div className={styles.logos}>
      <a href={labFacebook} target="_blank" rel="noopener noreferrer">
        <img src={logoLab} title="LAB - Leis Absurdas do Brasil" alt="LAB" />
      </a>

      <a href={ydLink} target="_blank" rel="noopener noreferrer">
        <img src={logoYD} title="Yuri Delgado" alt="Yuri Delgado" />
      </a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { score: state.score };
}

export default connect(mapStateToProps)(Logos);
