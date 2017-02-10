import React from 'react';
import styles from './tab.css';

/*eslint-disable*/
if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, 'flatMap', {
    value: function(predicate) {
      return Array.prototype.concat.apply([], this.map(predicate));
    }
  });
}
/*eslint-enable*/

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
    // leftBox的条目
    const tabLItemCssL = k => this.state.sindex === k ? styles.selected : styles.unselected;
    // rightBox的条目
    const tabRItemCss = (value3) => value3.isclass === true && styles.spec;
    const tabRItemId = (value3) => value3.isclass && value3.classIndex;
    const tabRItemsClass = (value3) => value3.isclass && <div className={styles.classTitle}>{leftComs[value3.classIndex]}</div>;
    // 渲染组件
    return <div className={styles.tabWrap}>
              <div className={styles.tabLeftWrap}>
                {
                  leftComs.map((value, k) =>
                    <a href={`#${k}`} className={ tabLItemCssL(k) } onClick={() => this.setState({ sindex: k })} key={k}>{value}</a>)
                }
              </div>
              <div className={styles.tabRightWrap}>
                {
                  rightComs.flatMap((value, k) =>
                    value.map((value2, k2) => ({ isclass: k2 === 0, classIndex: k, content: value2 }))
                  ).map((value3, k3) =>
                    <div className={tabRItemCss(value3)} id={tabRItemId(value3)} key={k3 + 100}>{tabRItemsClass(value3)}{value3.content}</div>
                  )
                }
              </div>
          </div>;
  }
}

Tab.propTypes = {
  rData: React.PropTypes.array
};

export default Tab;

