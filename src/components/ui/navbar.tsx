'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from './button';
import { LogOut } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="border-b">
      <nav className="layout py-3 flex justify-between items-center">
        <div className="logo">
          <Link href={'/'} className="font-bold text-2xl">
            PollFun
          </Link>
        </div>
        <div>
          {!session ? (
            <Button className="rounded-full border-black px-4" variant={'outline'} size={'sm'} onClick={() => router.push('/auth/login')}>
              Sign In
            </Button>
          ) : (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <p className="flex gap-2 items-center hover:bg-zinc-100 rounded-md px-3 py-2 cursor-pointer">
                    <Image src={session.user?.image || ''} width={25} height={25} alt={session.user?.name || ''} className="rounded-full" />
                    {session.user?.name}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => signOut()} className="text-red-500 focus:text-red-400 hover:text-red-400 cursor-pointer">
                    Sign Out <LogOut className="ms-2 w-4" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
