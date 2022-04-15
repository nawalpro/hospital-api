import RoutePath from './routes/index';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return ( 
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <RoutePath/>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
