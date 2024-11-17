"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const lessons = [
  { id: 1, title: "基本操作を学ぼう", description: "LoLの基本操作を学びます。", details: "詳細な内容がここに含まれます。" },
  { id: 2, title: "チャンピオンの役割", description: "チャンピオンの各役割を理解します。", details: "チャンピオンの役割についての詳細な内容。" },
  { id: 3, title: "ミニオンのラストヒット", description: "効率的にミニオンを倒す方法を学びます。", details: "ミニオンのラストヒットのテクニック詳細。" },
];

export default function GuidesEntrance() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [courseType, setCourseType] = useState<'yaruki' | 'nonbiri' | null>(null);
  const [user] = useAuthState(auth);
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  useEffect(() => {
    const fetchCompletedLessons = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCompletedLessons(docSnap.data().completedLessons || []);
        }
      }
    };
    fetchCompletedLessons();
  }, [user]);

  const handleCompleteLesson = async (lessonId: number) => {
    if (!user) return;
    const updatedLessons = [...completedLessons, lessonId];
    setCompletedLessons(updatedLessons);

    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, { completedLessons: updatedLessons }, { merge: true });
  };

  const handleUndoLesson = async (lessonId: number) => {
    if (!user) return;
    const updatedLessons = completedLessons.filter(id => id !== lessonId);
    setCompletedLessons(updatedLessons);

    const docRef = doc(db, 'users', user.uid);
    await updateDoc(docRef, { completedLessons: updatedLessons });
  };

  const handleToggleLesson = (lessonId: number) => {
    setActiveLesson((prev) => (prev === lessonId ? null : lessonId));
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const filteredLessons = courseType === 'nonbiri' ? lessons.filter((lesson) => [1, 3].includes(lesson.id)) : lessons;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 text-center">
        {!courseType && (
          <>
            <h1 className="text-3xl font-bold mt-8">LoL初心者虎の巻 - どのコースで始めますか？</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
              {/* のんびりコースへのリンク */}
              <div
                onClick={() => setCourseType('nonbiri')}
                className="relative inline-block cursor-pointer"
              >
                <Image src="/nonbiri.png" alt="のんびりコース" width={300} height={200} priority />
              </div>
              {/* やる気コースへのリンク */}
              <div
                onClick={() => setCourseType('yaruki')}
                className="relative inline-block cursor-pointer"
              >
                <Image src="/yaruki.png" alt="やる気コース" width={300} height={200} priority />
              </div>
            </div>
          </>
        )}
        {courseType && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold mt-8">
              {courseType === 'yaruki' ? 'やる気コースの進行状況' : 'のんびりコースの進行状況'}
            </h2>
            <div className="mt-4">
              {filteredLessons.map((lesson) => (
                <div key={lesson.id} className="p-4 border rounded-lg mb-4">
                  <h2 className="text-2xl font-semibold">{lesson.title}</h2>
                  <p className="mt-2">{lesson.description}</p>
                  <div className="flex justify-center gap-4 mt-2">
                    <button
                      onClick={() => handleToggleLesson(lesson.id)}
                      className="bg-yellow-500 text-white py-2 px-4 rounded"
                    >
                      {activeLesson === lesson.id ? '学習終了' : '学習開始'}
                    </button>
                    {completedLessons.includes(lesson.id) ? (
                      <button
                        onClick={() => handleUndoLesson(lesson.id)}
                        className="bg-red-500 text-white py-2 px-4 rounded"
                      >
                        習得を解除
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCompleteLesson(lesson.id)}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                      >
                        習得した
                      </button>
                    )}
                  </div>
                  {activeLesson === lesson.id && (
                    <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                      <h3 className="text-xl font-bold">{lesson.title} - 詳細</h3>
                      <p className="mt-2">{lesson.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
