import React from 'react';
import styles from './toolbar.css';

class ToolBar extends React.Component {
  render () {
    return <div className={styles.toolBarWrap}>
              <div className={styles.arrows} onClick={this.props.onLclick}>
                <image className={styles.arrowsPic} src={require('./back.png')}></image>
              </div>
              <div className={styles.title}>
                {this.props.title}
              </div>
              <div className={styles.messages} onClick={this.props.onRclick}>
                {
                  this.props.count && this.props.count !== 0 && <span className={styles.count}>{this.props.count}</span>
                }
                <image className={styles.messagesPic} src={require('./remind.png')}></image>
              </div>
          </div>;
  }
}

ToolBar.propTypes = {
  title: React.PropTypes.string,
  onLclick: React.PropTypes.func,
  onRclick: React.PropTypes.func,
  count: React.PropTypes.number
};

export default ToolBar;

