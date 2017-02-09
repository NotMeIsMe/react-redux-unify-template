import React from 'react';
import styles from './load.css';

class Loading extends React.Component {
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
  toClose: React.PropTypes.bool
};

export default Loading;
