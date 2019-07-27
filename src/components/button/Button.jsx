import React from 'react';
import styles from './Button.module.scss';

function Button(props) {
  const { answered, given, expected, handleClick } = props;

  const _handleClick = () => {
    handleClick();
  }

  console.log({given, expected})

  let style;
  if (answered) {
    if (given === expected) {
      style = {
        background: 'green',
      }
    }
  }
    
  return (
    <button
      className={styles.option}
      onClick={_handleClick}
      style={style}
    >
      {props.children}
    </button>
  );
  
}

export default Button;
