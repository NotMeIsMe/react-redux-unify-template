import React from 'react';
import styles from './load.css';

class Loading extends React.Component {
  render () {
    const toCloseStyle = {
      display: (this.props.toClose === undefined || this.props.toClose === false) ? 'block' : 'none'
    };
    return <div className={styles.loadData} style={ toCloseStyle }>
      <div>
        <div className={styles.uilRippleCss} style={{ transform: 'scale(0.6)' }}><div></div><div></div></div>
      </div>
    </div>;
  }
}

Loading.propTypes = {
  toClose: React.PropTypes.bool
};

export default Loading;
