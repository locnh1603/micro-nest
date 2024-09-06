import './global.scss';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Welcome to cms</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
