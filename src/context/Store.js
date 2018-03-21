import React, { Component } from 'react';

const Context = React.createContext();

export class StoreProvider extends Component {
  state = {
    name: '',
    bioSex: { f: 20, m: 90 },
    sexualAttraction: { f: 0, m: 0 },
    genderExpression: { f: 0, m: 0 },
    genderIdentity: { f: 0, m: 0 },
    romanticAttraction: { f: 0, m: 0 }
  };
  render() {
    return (
      <Context.Provider
        value={{ state: this.state, setState: this.setState.bind(this) }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export function injectState(mapStateToProps, mapSetStateToProps) {
  return Component => props => (
    <Context.Consumer>
      {({ state, setState }) => (
        <Component
          {...mapSetStateToProps(state)}
          {...mapSetStateToProps(setState)}
        />
      )}
    </Context.Consumer>
  );
}

export const StoreConsumer = Context.Consumer;
