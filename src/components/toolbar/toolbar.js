import React, { PropTypes, Component } from 'react';
import styles from './Toolbar.css';

class ToolBar extends Component {
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
  title: PropTypes.string,
  onLclick: PropTypes.func,
  onRclick: PropTypes.func,
  count: PropTypes.number
};

export default ToolBar;

