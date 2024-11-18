"use client";
import { lessons, getFilteredLessons } from '../../data/lessons';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import LessonDetails from '../../components/LessonDetails';

export default function GuidesEntrance() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [courseType, setCourseType] = useState<'yaruki' | 'nonbiri' | null>(null);
  const [user] = useAuthState(auth);
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [showCompleted, setShowCompleted] = useState(true); // 学習済みレッスンを表示するかどうかの状態

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

  // コースタイプに基づいてフィルタリングされたレッスンを取得
  const filteredLessons = getFilteredLessons(courseType);

  // 表示するレッスンをフィルタリング（学習済みのものを非表示にする場合のロジック）
  const visibleLessons = filteredLessons.filter(lesson => {
    if (showCompleted) {
      return true; // 学習済みのレッスンを表示
    } else {
      return !completedLessons.includes(lesson.id); // 学習済みのレッスンを非表示
    }
  });

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 text-left">
        {!courseType && (
          <>
            <h1 className="text-3xl font-bold mt-8">LoL初心者虎の巻 - どのコースで始めますか？</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
              {/* のんびりコースへのリンク */}
              <div
                onClick={() => setCourseType('nonbiri')}
                className="relative inline-block cursor-pointer"
              >
                <Image src="/nonbiri.png" alt="のんびりコース" width={300} height={200} priority style={{ margin: '3px 0' }} />
              </div>
              {/* やる気コースへのリンク */}
              <div
                onClick={() => setCourseType('yaruki')}
                className="relative inline-block cursor-pointer"
              >
                <Image src="/yaruki.png" alt="やる気コース" width={300} height={200} priority style={{ margin: '3px 0' }} />
              </div>
            </div>
          </>
        )}
        {courseType && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold mt-8">
              {courseType === 'yaruki' ? 'やる気コースの進行状況' : 'のんびりコースの進行状況'}
            </h2>

            {/* 学習済みレッスンの表示/非表示を切り替えるボタン */}
            <div className="mt-4">
              <button
                onClick={() => setShowCompleted((prev) => !prev)}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                {showCompleted ? '学習済みレッスンを非表示にする' : '学習済みレッスンを表示する'}
              </button>
            </div>

            <div className="mt-4">
              {visibleLessons.map((lesson) => (
                <div key={lesson.id} className="p-4 border rounded-lg mb-4 bg-white dark:bg-gray-800 text-black dark:text-white">
                  <h2 className="text-2xl font-semibold">{lesson.title}</h2>
                  <div className="mt-2">
                    <LessonDetails lessonId={lesson.id} />
                  </div>
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
                    <div className="mt-4 p-4 border rounded-lg bg-gray-100 dark:bg-gray-700">
                      <LessonDetails lessonId={lesson.id} />
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
