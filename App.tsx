import MainStack from './src/navigate';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';



const App = () => {
  return (
        <Provider store={store}>
        <MainStack></MainStack>
        </Provider>
  );
};



export default App;
