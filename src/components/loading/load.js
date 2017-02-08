import React, { PropTypes, Component } from 'react';
import styles from './load.css';

class Loading extends Component {
  render () {
    return <div className={styles.loadData} style={{
      display: (this.props.toClose === undefined || this.props.toClose === false) ? 'block' : 'none'
    }}>
      <div>
        <img src={require('./ripple.gif')} alt="加载中" />
      </div>
    </div>;
  }
}

Loading.propTypes = {
  toClose: PropTypes.bool
};

export default Loading;
