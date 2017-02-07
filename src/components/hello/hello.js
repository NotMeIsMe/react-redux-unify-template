import React from 'react';
import styles from './hello.css';

class Hello extends React.Component {
  render () {
    return <div className={ styles.hello }>hello</div>;
  }
}

export default Hello;

