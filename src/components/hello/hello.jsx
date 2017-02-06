import React from 'react';
import { asyncConnect } from 'redux-async-connect'

@asyncConnect ({
  lunch: (params, helpers) => Promise.resolve({id: 1, name: 'Borsch'})
})
class Hello extends React.Component {
    render() {
        const lunch = this.props.lunch
        return <div>{lunch.name}</div>;
    }
}

export default Hello;

