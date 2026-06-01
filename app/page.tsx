'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white">
      <nav className="border-b border-white/10 backdrop-blur-md bg-black/50 fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-xl">💸</div>
            <h1 className="text-2xl font-bold tracking-tight">Send to Ouaga</h1>
          </div>
          <div className="flex gap-4">
            <a href="#" className="px-6 py-2.5 text-sm font-medium hover:bg-white/10 rounded-full transition">How it works</a>
            <button className="px-6 py-2.5 bg-white text-black rounded-full font-semibold">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-emerald-400">⚡</span>
            <span className="text-sm font-medium">Instant transfers to Burkina Faso</span>
          </div>
          <h2 className="text-7xl font-bold tracking-tighter mb-6">Send money home to Ouaga</h2>
          <p className="text-2xl text-white/70 max-w-lg mx-auto mb-12">Direct to Orange Money, Mobicash or Telecel Money. Fast, secure, low fees.</p>
          
          <button onclick="window.location.href='/dashboard'" className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-lg font-semibold rounded-2xl transition-all active:scale-95">
            Send Money Now →
          </button>
        </div>

        <div className="bg-white/5 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-center text-3xl font-semibold mb-12">Supported Wallets</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {['Orange Money', 'Mobicash', 'Telecel Money'].map((wallet) => (
                <div key={wallet} className="bg-white/10 p-10 rounded-3xl text-center backdrop-blur">
                  <div className="text-6xl mb-6">📱</div>
                  <h4 className="text-2xl font-semibold mb-2">{wallet}</h4>
                  <p className="text-white/60">Instant credit</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}