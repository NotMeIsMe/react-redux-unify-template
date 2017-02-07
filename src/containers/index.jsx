import React from 'react';
import './favicon.ico';

class Index extends React.Component {
  render() {
    return (
      <div className="containter">
        { this.props.children }
      </div>
    );
  }
}

Index.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default Index;

