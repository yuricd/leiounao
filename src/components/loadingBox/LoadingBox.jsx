import React from 'react';
import styles from './LoadingBox.module.scss';
import snake from '../../images/snake.png';

function LoadingBox(props) {
  
  const { loading, children } = props;

  return (
    <>
    {loading && (
      <div className={styles.loadingBox}>
        <div className={styles.content}>
          <figure>
            <img src={snake} alt="Carregando" />
            <figcaption>Carregando...</figcaption>
          </figure>
        </div>
      </div>
    )}
    {children}
    </>
  )
}

export default LoadingBox;
