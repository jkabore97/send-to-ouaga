'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [method, setMethod] = useState<'email' | 'phone'>('phone');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'input' | 'otp'>('input');

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`OTP sent to your ${method}! (Demo mode)`);
    setStep('otp');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-8">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-2xl">💰</div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-gray-400 text-center mb-8">Sign in to send money to Ouaga</p>

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

        <form onSubmit={step === 'input' ? handleSendOTP : handleVerify}>
          {step === 'input' ? (
            <input
              type={method === 'email' ? 'email' : 'tel'}
              placeholder={method === 'email' ? 'your@email.com' : '+226 XX XX XX XX'}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full p-4 bg-gray-800 border border-gray-700 rounded-2xl text-white mb-6 focus:outline-none focus:border-emerald-500"
              required
            />
          ) : (
            <input
              type="text"
              placeholder="Enter OTP code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-4 bg-gray-800 border border-gray-700 rounded-2xl text-white mb-6 focus:outline-none focus:border-emerald-500 text-center text-2xl tracking-[4px]"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 rounded-2xl font-semibold text-lg transition"
          >
            {step === 'input' ? 'Send OTP' : 'Verify & Login'}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account? <Link href="/register" className="text-emerald-500 hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}