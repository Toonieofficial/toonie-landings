// app/layout.tsx
import '@/styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'], 
  weight: ['400', '700'], 
});
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" >
      <body className='bg-black mx-20 font-sans'>
        <Header />
        <main className="container min-h-screen items-center mt-8 top-20 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
