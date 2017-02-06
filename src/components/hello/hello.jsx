import React from 'react';

@asyncConnect ({
  lunch: (params, helpers) => Promise.resolve({id: 1, name: 'Borsch'})
})
class Hello extends React.Component {
    render() {
        return <h1>Hello</h1>;
    }
}

export default Hello;

