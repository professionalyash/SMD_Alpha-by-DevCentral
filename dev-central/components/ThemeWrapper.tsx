import React from 'react'
import { ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';


const ThemeWrapper = ({children}: any) => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
      });
    
      const toggleColorScheme = (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
      useHotkeys([['mod+J', () => toggleColorScheme()]]);
    
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  </ColorSchemeProvider>
    
  )
}

export default ThemeWrapper;