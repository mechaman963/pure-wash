import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import Navbar from '../Navbar';

// Mock the useMediaQuery hook
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn(),
}));

const mockUseMediaQuery = require('@mui/material').useMediaQuery;

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Navbar', () => {
  beforeEach(() => {
    // Default to desktop view
    mockUseMediaQuery.mockReturnValue(false);
  });

  it('renders logo', () => {
    renderWithTheme(<Navbar />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders book now button on desktop', () => {
    mockUseMediaQuery.mockReturnValue(false); // Desktop
    renderWithTheme(<Navbar />);
    const button = screen.getByRole('button', { name: /book now/i });
    expect(button).toBeInTheDocument();
  });

  it('hides book now button on mobile', () => {
    mockUseMediaQuery.mockReturnValue(true); // Mobile
    renderWithTheme(<Navbar />);
    const button = screen.queryByRole('button', { name: /book now/i });
    expect(button).not.toBeInTheDocument();
  });

  it('toggles menu when hamburger is clicked', () => {
    mockUseMediaQuery.mockReturnValue(true); // Mobile
    renderWithTheme(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(menuButton);
    
    // Menu should be visible after click
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('supports keyboard navigation', () => {
    mockUseMediaQuery.mockReturnValue(true); // Mobile
    renderWithTheme(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    
    // Test Enter key
    fireEvent.keyDown(menuButton, { key: 'Enter' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Test Space key
    fireEvent.keyDown(menuButton, { key: ' ' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
