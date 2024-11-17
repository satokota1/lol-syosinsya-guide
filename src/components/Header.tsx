"use client";

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LoginButton = dynamic(() => import('../components/LoginButton'), { ssr: false });

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/" legacyBehavior>
          <a>HOME</a>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {/* Discordリンクとコーチングサーバーの文言 */}
        <a href="https://discord.gg/MrEbbWAjsb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <Image src="/discord.svg" alt="Discord" width={30} height={30} />
          <span>コーチングサーバーはこちら</span>
        </a>
        <LoginButton />
      </div>
    </header>
  );
}
