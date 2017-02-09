import React from 'react';
import styles from './navbar.css';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sindex: 1
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
                        <div className={ this.state.sindex === k ? styles.selected : styles.unselected } onClick={() => this.setState({ sindex: k }) } key={k}>
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
  contents: React.PropTypes.array,
  navcontents: React.PropTypes.array
};

export default NavBar;

