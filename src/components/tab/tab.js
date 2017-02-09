import React from 'react';
import styles from './tab.css';

if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, 'flatMap', {
    value: function(predicate) {
      return Array.prototype.concat.apply([], this.map(predicate));
    }
  });
}

class Tab extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sindex: 0
    };
  }
  render () {
    const leftComs = []; const rightComs = [];
    this.props.rData.forEach((d, k) => {
      if (d.className && d.arrs) {
        leftComs.push(d.className);
        rightComs.push(d.arrs);
      }
    });

    return <div className={styles.tabWrap}>
              <div className={styles.tabLeftWrap}>
                {
                  leftComs.map((value, k) =>
                    <a href={`#${k}`} className={ this.state.sindex === k ? styles.selected : styles.unselected } onClick={() => this.setState({ sindex: k })} key={k}>{value}</a>)
                }
              </div>
              <div className={styles.tabRightWrap}>
                {
                  rightComs.flatMap((value, k) => value.map((value2, k2) => <div className={k2 === 0 && styles.spec} id={k2} key={(k2 + 1) * (k + 100)}>{k2 === 0 && <div className={styles.classTitle}>{leftComs[k]}</div>}{value2}</div>))
                }
              </div>
          </div>;
  }
}

Tab.propTypes = {
  rData: React.PropTypes.array
};

export default Tab;

