import React from 'react';
import styles from './simple.css';

class Simple extends React.Component {
  render () {
    const wdis = {
      display: (this.props.toClose === undefined || this.props.toClose === false) ? 'block' : 'none'
    };
    return <div className={styles.simple} style={ wdis }>
      <div>
        <div>温馨提醒</div>
        <div>
          { this.props.content }
        </div>
        <div>
          <button onClick={this.props.onLclick}>取消</button>
          <button onClick={this.props.onRclick}>确定</button>
        </div>
      </div>
    </div>;
  }
}

Simple.propTypes = {
  toClose: React.PropTypes.bool,
  onLclick: React.PropTypes.func,
  onRclick: React.PropTypes.func,
  content: React.PropTypes.string
};

export default Simple;
