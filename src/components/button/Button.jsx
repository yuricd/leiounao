import React, { useState, useEffect } from 'react';
import styles from './Button.module.scss';
import { connect } from 'react-redux';
import { incrementScore } from '../../actions';

function Button(props) {
  const { answered, expected, handleClick, type } = props;

  const [classStyle, setClassStyle] = useState('');

  const _handleClick = () => {
    handleClick && handleClick();
    if (!answered) {
      if (type === expected) {
        setClassStyle(styles.correct);
        props.dispatch(incrementScore());
      } else {
        setClassStyle(styles.wrong);
      }
    }
  }

  useEffect(() => {
    if (!answered) {
      setClassStyle('');
    }
  }, [answered])

  return (
    <button
      className={`${styles.option} ${classStyle}`}
      onClick={_handleClick}
    >
      {props.children}
    </button>
  );
}

export default connect()(Button);
