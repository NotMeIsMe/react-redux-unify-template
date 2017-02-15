import React from 'react';
import styles from './dialogue.css';
class Dialogue extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toshowFaceCom: false,
      test: [
        {
          text: '明天我要回美国',
          name: '小明',
          from: '',
          to: '',
          date: ''
        }, {
          text: 'ok',
          name: '小明',
          from: '',
          to: '',
          date: ''
        }, {
          text: 'ok',
          name: '小明',
          from: '',
          to: '',
          date: ''
        }
      ]
    };
  }
  render () {
    const toshowFaceComStyle = { bottom: this.state.toshowFaceCom ? 0 : -212 };
    const updateShowFaceCom = () => this.setState({ toshowFaceCom: !this.state.toshowFaceCom });
    const showBoxInvert = k => ((k % 2) === 1) && styles.showBoxInvert;
    const sendMessage = () => { console.log(this.textInput.value); this.props.sendMessage(this.textInput.value); };

    return <div className={styles.dialogue}>
              <div></div>
              <div>
                {
                  this.state.test.map((d, k) => {
                    return (
                      <div className={showBoxInvert(k)} key={k}>
                        <span></span>
                        <span data-name={d.name}>{d.text}</span>
                      </div>);
                  })
                }
              </div>
              <div style={toshowFaceComStyle}>
                <div>
                  <span onClick={updateShowFaceCom}/>
                  <span>
                    <input ref={input => { this.textInput = input; }} type="text" />
                  </span>
                  <span onClick={sendMessage}/>
                </div>
                <div>
                  123
                </div>
              </div>
           </div>;
  }
}

Dialogue.propTypes = {
  sendMessage: React.PropTypes.func
};

export default Dialogue;
