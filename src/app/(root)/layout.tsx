import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PollFun | Home',
  description: 'Buat form dan survey dengan menyenangkan',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='min-h-screen'>
      <Navbar />
      {children}
      <Footer/>
    </section>
  );
}
