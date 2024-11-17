// src/components/LoginButton.tsx

"use client";  // クライアントコンポーネントとして設定

import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function LoginButton() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('ログイン中にエラーが発生しました:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('ログアウト中にエラーが発生しました:', error);
    }
  };

  if (user) {
    return (
      <div>
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
          ログアウト
        </button>
      </div>
    );
  }

  return (
    <button onClick={signInWithGoogle} className="bg-green-500 text-white py-2 px-4 rounded">
      Googleでログイン
    </button>
  );
}
