import React from 'react';
import './App.css';

const MyAccount = React.lazy(() => import("MyAccount/App"));

function App() {
  console.log('HELLO')
  return (
    <React.Suspense fallback="Loading...">
        <MyAccount />
        <div>This is shell of microfront</div>
    </React.Suspense>
  );
}

export default App;
