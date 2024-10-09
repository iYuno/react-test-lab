
import { RouterProvider } from 'react-router-dom';
import { Toaster } from '@/features/toast';
import { router } from '../router';
import { ThemeProvider } from './themeProvider';

export function Provider() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}