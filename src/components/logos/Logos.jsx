import React from 'react';
import styles from './Logos.module.scss';
import logoYD from '../../images/logo-yd.svg';
import logoLab from '../../images/logo-lab.png';
import { connect } from 'react-redux';
import { ydLink, anarcozeTwitter } from '../../constants/links';

function Logos() {
  return (
    <div className={styles.logos}>
      <a href={anarcozeTwitter} target="_blank" rel="noopener noreferrer">
        <img src={logoLab} title="Anarcoze" alt="Anarcoze" />
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
