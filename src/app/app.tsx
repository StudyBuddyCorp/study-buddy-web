import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './providers/theme-provider';
import { StoreProvider } from './providers/store-provider';
import { router } from './providers/router-provider';
import { Toaster } from '@/ui/toaster';

function App() {
  return (
    <ThemeProvider
      defaultTheme='system'
      storageKey='vite-ui-theme'>
      <StoreProvider>
        <Toaster />
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
