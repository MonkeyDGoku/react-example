import React from 'react';
import Example from '../Example.jsx';
import { UseEffectEx1str } from './UseEffectEx1str.js';
import CodeBg from '../CodeBg.jsx';
import UseEffectEx1 from './UseEffectEx1.jsx';
export default function UseEffect() {
  return (
    <div>
      <h2>useEffect</h2>
      <Example>
        <CodeBg text={UseEffectEx1str} />
        <UseEffectEx1 />
      </Example>
    </div>
  );
}
