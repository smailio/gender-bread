import React from 'react';
import { injectState } from '../context/Store';
import { Row } from './Grid';

const NameSection = ({ name, setName }) => (
  <Row
    style={{
      alignItems: 'center',
      height: '2.4em',
      borderLeft: '0.8em solid #E08283',
      padding: 8
    }}
  >
    <input
      style={{
        fontSize: '1em',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: '1px solid #E08283'
      }}
      value={name}
      onChange={e => setName(e.target.valid)}
      placeholder="Your name"
    />
  </Row>
);

export default injectState(
  state => ({
    name: state.name
  }),
  setState => ({ setName: name => setState({ name }) })
)(NameSection);
