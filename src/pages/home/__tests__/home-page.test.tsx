import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../ui';

describe('CharacterForm', () => {
  const queryClient = new QueryClient();
  it('should render', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
