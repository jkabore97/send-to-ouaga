'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [method, setMethod] = useState<'email' | 'phone'>('phone');
  const [identifier, setIdentifier] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account created! OTP sent to your ' + method + ' (Demo)');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-8">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-2xl">💰</div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-gray-400 text-center mb-8">Start sending money to Burkina Faso</p>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMethod('phone')}
            className={`flex-1 py-3 rounded-2xl font-medium transition ${method === 'phone' ? 'bg-emerald-600' : 'bg-gray-800 text-gray-400'}`}
          >
            Phone
          </button>
          <button
            onClick={() => setMethod('email')}
            className={`flex-1 py-3 rounded-2xl font-medium transition ${method === 'email' ? 'bg-emerald-600' : 'bg-gray-800 text-gray-400'}`}
          >
            Email
          </button>
        </div>

        <form onSubmit={handleRegister}>
          <input
            type={method === 'email' ? 'email' : 'tel'}
            placeholder={method === 'email' ? 'your@email.com' : '+226 XX XX XX XX'}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-2xl text-white mb-6 focus:outline-none focus:border-emerald-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 rounded-2xl font-semibold text-lg transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account? <Link href="/login" className="text-emerald-500 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}