import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './routes/Router';
import { InstallProvider } from './context/InstallContext';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="top-right"
      containerStyle={{
        top: 85,
      }}
    />

    <InstallProvider>
      <RouterProvider router={router} />
    </InstallProvider>
  </StrictMode>,
)