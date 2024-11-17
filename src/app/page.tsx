"use client";

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function HomePage() {
  const [user] = useAuthState(auth);

  const [completedLessons, setCompletedLessons] = useState(0);
  const totalLessons = 3; // lessons.length に相当

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setCompletedLessons(data.completedLessons?.length || 0);
        }
      }
    };
    fetchProgress();
  }, [user]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mt-8">LoL 初心者がマスターになるまでの虎の巻</h1>
        <p className="mt-4 text-lg">↓入口はこちら↓</p>
        {/* 虎の巻へのリンク */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
          <Link href="/guides" className="relative inline-block cursor-pointer">
            <div className="w-72 h-48">
              <Image src="/toranomaki.webp" alt="LoL初心者虎の巻へ進む" layout="fill" objectFit="cover" />
            </div>
            <span className="text-lg font-semibold block mt-2">LoL初心者虎の巻へ進む</span>
          </Link>
        </div>
        <div className="mt-4 text-lg font-semibold">
          <p>進捗状況: {completedLessons}/{totalLessons} 習得済み</p>
          <p>進捗状況の保存にはログインが必要です。内容自体はログインしなくても見れます。</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
