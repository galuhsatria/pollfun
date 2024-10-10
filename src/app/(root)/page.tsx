import { Button } from '@/components/ui/button';
import React from 'react';
import { Rocket } from 'lucide-react';

export default function Page() {
  return (
    <main className="layout min-h-[81vh]">
      <div className="flex items-center flex-col py-28">
        <div className="text-center">
          <h1 className="logo text-7xl font-bold text-black">PollFun</h1>
          <p className="mt-1">Buat form dan survey dengan mudah dan menyenangkan</p>
        </div>
        <div className='mt-4'>
          <Button className='rounded-full hover:bg-transparent hover:border-black hover:border hover:text-black'>
            Coba sekarang <Rocket className='text-sm ms-2'/>
          </Button>
        </div>
      </div>
    </main>
  );
}
