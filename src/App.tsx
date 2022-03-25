import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Schedule from './Schedule';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Schedule />
    </QueryClientProvider>
  );
}

export default App;
