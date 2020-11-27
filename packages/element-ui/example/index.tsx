import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Button } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <Button type="Primary" />
      <Button type="Secondary" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
