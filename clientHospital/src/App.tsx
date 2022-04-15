import RoutePath from './routes/index';
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './state';

function App() {
  return ( 
    <Provider store={store}>
      <RoutePath/>
    </Provider>
  )
}

export default App
