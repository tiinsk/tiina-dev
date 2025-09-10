import React from 'react';
import styled from 'styled-components';

import { Counter } from './Counter.js';

const Title = styled.h1`
  color: #bf4f74;
`;

export default function Page() {
  return (
    <>
      <Title>My Vike app</Title>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
