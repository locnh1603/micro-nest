'use client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './global.scss';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  cssVariables: true,
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Welcome to cms</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        
      </Head>
      <body>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
