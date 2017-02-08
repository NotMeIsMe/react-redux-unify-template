import React, { PropTypes, Component } from 'react';
import styles from './simple.css';

class Simple extends Component {
  render () {
    return <div className={styles.simple} style={{
      display: (this.props.toClose === undefined || this.props.toClose === false) ? 'block' : 'none'
    }}>
      <div>
        <div>温馨提醒</div>
        <div>
          {
            this.props.content
          }
        </div>
        <div>
          <button onClick={this.props.onLclick}>确定</button>
          <button onClick={this.props.onRclick}>取消</button>
        </div>
      </div>
    </div>;
  }
}

Simple.propTypes = {
  toClose: PropTypes.bool,
  onLclick: PropTypes.func,
  onRclick: PropTypes.func,
  content: PropTypes.string
};

export default Simple;
