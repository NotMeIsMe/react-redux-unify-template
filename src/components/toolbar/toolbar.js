import React, { PropTypes, Component } from 'react';
import styles from './Toolbar.css';

class ToolBar extends Component {
  render () {
    return <div className={styles.toolBarWrap}>
              <div className={styles.arrows}>
                <image className={styles.arrowsPic} src={require('./back.png')} onClick={this.props.onclick}></image>
              </div>
              <div className={styles.title}>
                {this.props.title}
              </div>
          </div>;
  }
}

ToolBar.propTypes = {
  title: PropTypes.string,
  onclick: PropTypes.func
};

export default ToolBar;

