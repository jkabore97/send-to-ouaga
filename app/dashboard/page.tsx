'use client';
import { useState } from 'react';
import { ArrowRight, History, Wallet, Eye } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [network, setNetwork] = useState<'orange' | 'mobicash' | 'telecel'>('orange');

  const recentTransactions = [
    { id: 'TXN001', date: 'Jun 7', amount: 150, recipient: '+226 70 12 34 56', network: 'Orange' },
    { id: 'TXN002', date: 'Jun 5', amount: 75, recipient: '+226 65 98 76 54', network: 'Mobi' },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !recipient) {
      alert('Please fill in amount and recipient phone number');
      return;
    }
    alert(`Successfully sent $${amount} to ${recipient} via ${network.toUpperCase()} Money! (Demo)`);
    setAmount('');
    setRecipient('');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-xl">💰</div>
            <span className="font-bold text-xl">Send to Ouaga</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-900 px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
              <Wallet className="w-4 h-4 text-emerald-500" /> Balance: <span className="font-semibold">$1,245.80</span>
            </div>
            <Link href="/history" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm transition">
              <History className="w-4 h-4" /> History
            </Link>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Send Money to Ouagadougou</h1>
          <p className="text-gray-400">Instant transfer to Orange Money, Mobicash or Telecel Money</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Send Form */}
          <div className="lg:col-span-3 bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
              <ArrowRight className="text-emerald-500" /> New Transfer
            </h3>

            <form onSubmit={handleSend} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Amount (USD)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="50"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-2xl text-4xl font-semibold focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Recipient Phone Number</label>
                <input
                  type="tel"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="+226 70 12 34 56"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-2xl text-lg focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3">Select Mobile Money Network</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['orange', 'mobicash', 'telecel'] as const).map((net) => (
                    <button
                      key={net}
                      type="button"
                      onClick={() => setNetwork(net)}
                      className={`p-4 rounded-2xl border text-left transition ${network === net 
                        ? 'border-emerald-500 bg-emerald-950' 
                        : 'border-gray-700 hover:border-gray-600'}`}
                    >
                      <div className="font-semibold capitalize">{net}</div>
                      <div className="text-xs text-gray-400">{net === 'orange' ? 'Orange Money' : net === 'mobicash' ? 'MobiCash' : 'Telecel Money'}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition active:scale-[0.985]"
              >
                Send Money Now <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <History className="text-emerald-500" /> Recent Transfers
                </h4>
                <Link href="/history" className="text-emerald-500 text-sm flex items-center gap-1 hover:underline">
                  View all <Eye className="w-3 h-3" />
                </Link>
              </div>
              
              {recentTransactions.length > 0 ? (
                <div className="space-y-3">
                  {recentTransactions.map((tx, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-800/50 p-3 rounded-2xl text-sm">
                      <div>
                        <div className="font-mono text-emerald-400">{tx.id}</div>
                        <div className="text-gray-400 text-xs">{tx.date} • {tx.network}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${tx.amount}</div>
                        <div className="text-gray-500 text-xs">{tx.recipient}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-400 text-sm">No transfers yet.</div>
              )}
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-sm">
              <div className="font-semibold mb-3">Transfer Info</div>
              <ul className="space-y-2 text-gray-400">
                <li>• Instant delivery to all 3 networks</li>
                <li>• Low fees starting at $1.99</li>
                <li>• 24/7 support available</li>
                <li>• Secure & encrypted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}