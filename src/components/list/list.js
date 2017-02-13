import React from 'react';
import styles from './list.css';
class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lData: [
            {title: 'x'}, {title: 's'}, {title: 'r'},
            {title: 'x'}, {title: 's'}, {title: 'r'}
      ]};
  }
  render () {
    const dyeColor = k => (k % 2) === 0 ? styles.bisque : styles.lightskyblue;

    return <div className={styles.list}>
                {
                    this.state.lData.map((s, k) => {
                      return <div className={ dyeColor(k) } key={k}>{s.title}
                        <span className={ dyeColor(k) } />
                      </div>;
                    })
                }
           </div>;
  }
}

export default List;
