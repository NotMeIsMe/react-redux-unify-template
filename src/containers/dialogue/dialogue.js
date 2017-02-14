import React from 'react';
import styles from './dialogue.css';
class Dialogue extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toshowFaceCom: false
    };
  }
  render () {
    return <div className={styles.dialogue}>
              <div></div>
              <div></div>
              <div style={{
                bottom: this.state.toshowFaceCom ? 0 : -200
              }}>
                <div>
                  <span onClick={() => {
                    console.log('click');
                    this.setState({ toshowFaceCom: !this.state.toshowFaceCom });
                  }}></span>
                  <span>
                    <input type="text" value="submit" />
                  </span>
                  <span></span>
                </div>
                <div>
                  123
                </div>
              </div>
           </div>;
  }
}

export default Dialogue;
