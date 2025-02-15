import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../ui';

describe('CharacterForm', () => {
  it('should render', async () => {
    render(<HomePage />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
