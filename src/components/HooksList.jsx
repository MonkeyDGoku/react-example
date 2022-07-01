import React from 'react';
import './HooksList.css';
export default function HooksList() {
  return (
    <div>
      <ul>
        <li>
          <div>Basic Hooks</div>
        </li>
        <ul>
          <li>
            <div>useState</div>
          </li>
          <li>
            <div>useEffect</div>
          </li>
          <li>
            <div>useContext</div>
          </li>
        </ul>
      </ul>
      <ul>
        <li>
          <div>Additional Hooks</div>
        </li>
        <ul>
          <li>
            <div>useReducer</div>
          </li>
          <li>
            <div>useCallback</div>
          </li>
          <li>
            <div>useMemo</div>
          </li>
          <li>
            <div>useRef</div>
          </li>
          <li>
            <div>useImperativeHandle</div>
          </li>
          <li>
            <div>useDebugValue</div>
          </li>
          <li>
            <div>useReducer</div>
          </li>
          <li>
            <div>useDeferredValue</div>
          </li>
          <li>
            <div>useTransition</div>
          </li>
          <li>
            <div>useId</div>
          </li>
        </ul>
      </ul>
      <ul>
        <li>
          <div>Library Hooks</div>
        </li>
        <ul>
          <li>
            <div>useSyncExternalStore</div>
          </li>
          <li>
            <div>useInsertionEffect</div>
          </li>
        </ul>
      </ul>
    </div>
  );
}
