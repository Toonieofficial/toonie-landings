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
        <main className="container min-h-screen items-center mt-8 top-20 ">{children}</main>
      </body>
    </html>
  );
}
