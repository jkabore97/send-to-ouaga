'use client';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-xl">💰</div>
            <h1 className="text-2xl font-bold">Send to Ouaga</h1>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-emerald-400 transition">How it works</a>
            <Link href="/login" className="hover:text-emerald-400 transition">Login</Link>
            <Link 
              href="/register" 
              className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 rounded-full font-medium transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6 text-sm">
            <span className="text-emerald-400">⚡</span>
            <span>Instant transfers to Burkina Faso</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter">
            Send Money Home<br />to <span className="text-emerald-500">Ouagadougou</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-10 max-w-lg mx-auto">
            Direct to Orange Money, Mobicash & Telecel Money.<br />Fast, secure, and low fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-emerald-600 hover:bg-emerald-700 text-xl font-semibold px-10 py-5 rounded-2xl inline-flex items-center justify-center gap-3 transition active:scale-[0.985]"
            >
              Send Money Now <ArrowRight className="w-6 h-6" />
            </Link>
            <a 
              href="#wallets" 
              className="border border-gray-700 hover:border-gray-500 text-xl font-semibold px-10 py-5 rounded-2xl transition"
            >
              See Supported Wallets
            </a>
          </div>
        </div>
      </div>

      {/* Supported Wallets */}
      <div id="wallets" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Supported Mobile Money Networks</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Orange Money", icon: "🟠", desc: "Fastest delivery" },
            { name: "Mobicash", icon: "🔵", desc: "Reliable & trusted" },
            { name: "Telecel Money", icon: "🟢", desc: "Growing network" }
          ].map((wallet) => (
            <div key={wallet.name} className="bg-gray-900/60 border border-gray-800 rounded-3xl p-10 text-center hover:border-emerald-500 transition group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition">{wallet.icon}</div>
              <h4 className="text-3xl font-semibold mb-2">{wallet.name}</h4>
              <p className="text-emerald-500">{wallet.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust / Features */}
      <div id="how" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-14">Why People Trust Send to Ouaga</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-950 rounded-2xl flex items-center justify-center mb-5">
                <Shield className="w-8 h-8 text-emerald-500" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Bank-Level Security</h4>
              <p className="text-gray-400">End-to-end encryption and full KYC verification on every transfer.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-950 rounded-2xl flex items-center justify-center mb-5">
                <Zap className="w-8 h-8 text-emerald-500" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Instant Delivery</h4>
              <p className="text-gray-400">Money arrives in the recipient's wallet in under 30 seconds.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-950 rounded-2xl flex items-center justify-center mb-5">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Built for the Diaspora</h4>
              <p className="text-gray-400">Trusted by thousands of Burkinabè living abroad.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 text-center px-6">
        <h3 className="text-4xl font-bold mb-4">Ready to send money home?</h3>
        <p className="text-gray-400 mb-8 text-lg">Create your free account in under 2 minutes.</p>
        <Link 
          href="/register" 
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-xl font-semibold px-12 py-5 rounded-2xl transition active:scale-[0.985]"
        >
          Get Started for Free
        </Link>
      </div>
    </div>
  );
}