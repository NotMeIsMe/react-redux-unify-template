import React, { PropTypes, Component } from 'react';
import styles from './navbar.css';

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sindex: 0
    };
  }
  render () {
    return <div className={styles.navbarWrap}>
              <div className={styles.navbarContent}>
                {
                  this.props.contents[this.state.sindex]
                }
              </div>
              <div className={styles.navbarBottom}>
                {
                  this.props.navcontents.map((obj, k) => {
                    return (
                        <div onClick={() => {
                          this.setState({ sindex: k });
                        }} style={{
                          backgroundColor: this.state.sindex === k ? '#666' : 'transparent'
                        }} key={k}>
                            <img src={obj.ico} alt={obj.subtitle}/>
                            <span>{obj.subtitle}</span>
                        </div>
                    );
                  })
                }
              </div>
           </div>;
  }
}

NavBar.propTypes = {
  contents: PropTypes.array,
  navcontents: PropTypes.array
};

export default NavBar;

