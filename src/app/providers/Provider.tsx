
import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import { Toaster } from '@/features/toast';
import { router } from '../router';
import { store } from '../store'
import { ThemeProvider } from './themeProvider';

export function Provider() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider storageKey="vite-ui-theme">
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  )
}