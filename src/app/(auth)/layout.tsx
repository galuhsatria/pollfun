import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PollFun | Login',
  description: 'Buat form dan survey dengan menyenangkan',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
