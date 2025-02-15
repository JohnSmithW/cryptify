import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/shared/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WebApp from '@twa-dev/sdk';
import './App.css';
import { HomePage } from '@/pages/home';
import { useEffect } from 'react';
import { DashboardPage } from './pages/dashboard/';

WebApp.ready();
function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    WebApp.expand();
    WebApp.MainButton.setText('Track Crypto');
    // WebApp.MainButton.show();
    // WebApp.MainButton.onClick(() => {

    // })
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
