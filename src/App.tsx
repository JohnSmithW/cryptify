import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WebApp from '@twa-dev/sdk';
import './App.css';
import { HomePage } from '@/pages/home';
import { useEffect } from 'react';

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
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
