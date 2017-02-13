import React from 'react';
import styles from './button.css';

class FloatBt extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toClose: true
    };
  }

  render () {
    const tocloseStyle = this.state.toClose ? {
      display: 'none'
      // animation: `${styles.btmovebk} 0.6s`,
      // MozAnimation: `${styles.btmovebk} 0.6s`,
      // WebkitAnimation: `${styles.btmovebk} 0.6s`,
      // OAnimation: `${styles.btmovebk} 0.6s`,
      // animationFillMode: 'forwards'
    } : {
      display: 'block',
      animation: `${styles.btmove} 0.6s`,
      MozAnimation: `${styles.btmove} 0.6s`,
      WebkitAnimation: `${styles.btmove} 0.6s`,
      OAnimation: `${styles.btmove} 0.6s`,
      animationFillMode: 'forwards'
    };

    return <div className={styles.btWrap} onClick={ () => this.setState({ toClose: !this.state.toClose }) }>
                <div style = { tocloseStyle }>
                    <span onClick={() => console.log('1')}/>
                    <span onClick={() => console.log('2')}/>
                    <span onClick={() => console.log('3')}/>
                </div>
           </div>;
  }
}

export default FloatBt;

