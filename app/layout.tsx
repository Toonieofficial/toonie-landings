// app/layout.tsx
import '@/styles/global.css';
import Header from '@/components/Header';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
