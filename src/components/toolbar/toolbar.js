import React from 'react';
import styles from './toolbar.css';

class ToolBar extends React.Component {
  render () {
    const countSpan = this.props.count && this.props.count !== 0 && <span className={styles.count}>{this.props.count}</span>;
    const showMess = bool => ({ display: bool ? 'block' : 'none' });

    return <div className={styles.toolBarWrap}>
              <div className={styles.arrows} onClick={this.props.onLclick}>
                <image className={styles.arrowsPic} src={require('./back.png')}></image>
              </div>
              <div className={styles.title}>
                {this.props.title}
              </div>
              <div style={ showMess(this.props.showMess) } className={styles.messages} onClick={this.props.onRclick}>
                { countSpan }
                <image className={styles.messagesPic} src={require('./remind.png')}></image>
              </div>
          </div>;
  }
}

ToolBar.propTypes = {
  title: React.PropTypes.string,
  onLclick: React.PropTypes.func,
  onRclick: React.PropTypes.func,
  count: React.PropTypes.number,
  showMess: React.PropTypes.bool.isRequired
};

export default ToolBar;

