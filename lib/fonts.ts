import { 
  Montserrat, 
  Poppins, 
  Raleway,
  Inter 
} from 'next/font/google';

// Define the main heading font
export const headingFont = Montserrat({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

// Define the body text font
export const bodyFont = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

// Define an accent font for special elements
export const accentFont = Raleway({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-accent',
  display: 'swap',
});

// Keep the existing Inter font as a fallback
export const fallbackFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-fallback',
  display: 'swap',
});
