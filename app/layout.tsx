// app/layout.tsx
import '@/styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto_Mono } from 'next/font/google';
import Providers from '@/components/progress';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

const robotoMono = Roboto_Mono({
  subsets: ['latin'], 
  weight: ['400', '700'], 
});
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps ): JSX.Element {


  return (
    <html lang="en" >
      <body className='bg-black mx-5 md:mx-20 font-sans'>
        <Header />
        <main className="mt-8 top-20">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
