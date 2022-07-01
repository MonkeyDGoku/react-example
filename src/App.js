import React from 'react';
import HooksList from './components/HooksList';
import UserSate from './components/UserState/UserState';
import UseEffect from './components/UseEffect/UseEffect';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hooks Api Reference</h1>
      <HooksList />
      <hr />
      <h1>Basic Hooks</h1>
      <UserSate />
      <hr />
      <UseEffect />
    </div>
  );
}
