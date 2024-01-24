import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from './routes/AppRoutes';
import './style/App.css';
import Layout from './style/Layout';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Layout>
      <QueryClientProvider client={client}>
        <AppRoutes />
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
