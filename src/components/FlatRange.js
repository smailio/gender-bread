import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  input[type='range'] {
    box-sizing: border-box;
    -webkit-appearance: none;
    width: 98%;
    height: 20px;
    margin: 4px 10px;
    background: linear-gradient(to right, #9a2720 0%, #9a2720 100%) no-repeat
      center;
    background-size: 98% 10px;
    overflow: hidden;
    outline: none;
  }

  input[type='range']::-moz-range-track {
    visibility: hidden;
  }

  input[type='range']::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #f26b5e;
    position: relative;
    z-index: 3;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 0;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #f26b5e;
    position: relative;
    z-index: 3;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 0;
  }
`;

export default ({}) => (
  <Wrapper>
    <input type="range" defaultValue={40} />
  </Wrapper>
);
