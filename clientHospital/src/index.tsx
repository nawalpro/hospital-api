import React from 'react';
import ReactDOM from 'react-dom';
import RoutePath from './routes/index';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme.css';
import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
    <RoutePath/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')

);


