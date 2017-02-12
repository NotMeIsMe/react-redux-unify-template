import React from 'react';
import styles from './list.css';
class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lData: [
            {title: 'x'}, {title: 's'}, {title: 'r'},
            {title: 'x'}, {title: 's'}, {title: 'r'},
            {title: 'x'}, {title: 's'}, {title: 'r'}
      ]};
  }
  render () {
    return <div className={styles.list}>
                {
                    this.state.lData.map((s, k) => {
                      return <div key={k}>{s.title}
                        <span />
                      </div>;
                    })
                }
           </div>;
  }
}

export default List;
