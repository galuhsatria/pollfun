'use client';

import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { data: session} = useSession();
  const router = useRouter();

  if (session) {
    router.push('/');
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border px-6 py-8 rounded-md w-92 text-center">
        <p className="logo text-4xl font-bold">PollFun</p>
        <p className="text-sm">Silahkan masuk untuk melanjutkan</p>
        <div className="mt-4">
          <Button onClick={() => signIn('github')} variant={'outline'}>
            Login dengan GitHub <Image src={'/github-mark.png'} width={23} height={23} alt="Github Logo" className="ms-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
