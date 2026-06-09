import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Send to Ouaga | Money Transfers to Burkina Faso',
  description: 'Send money instantly to Orange Money, Mobicash, and Telecel Money in Ouagadougou, Burkina Faso. Fast, secure, and low fees.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}