'use client';
import Link from 'next/link';

export default function TransactionHistory() {
  const transactions = [
    { id: 'TXN001', date: '2026-06-07', amount: 150, recipient: '+226 70 12 34 56', network: 'Orange Money', status: 'Completed' },
    { id: 'TXN002', date: '2026-06-05', amount: 75, recipient: '+226 65 98 76 54', network: 'Mobicash', status: 'Completed' },
    { id: 'TXN003', date: '2026-06-01', amount: 200, recipient: '+226 78 45 12 90', network: 'Telecel Money', status: 'Completed' },
    { id: 'TXN004', date: '2026-05-28', amount: 50, recipient: '+226 70 33 22 11', network: 'Orange Money', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-black border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400">
            ← Back to Dashboard
          </Link>
          <h1 className="font-bold text-xl">Transaction History</h1>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Your Transfers</h2>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left p-4 font-medium text-gray-400">Transaction ID</th>
                <th className="text-left p-4 font-medium text-gray-400">Date</th>
                <th className="text-left p-4 font-medium text-gray-400">Amount</th>
                <th className="text-left p-4 font-medium text-gray-400">Recipient</th>
                <th className="text-left p-4 font-medium text-gray-400">Network</th>
                <th className="text-left p-4 font-medium text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-t border-gray-800 hover:bg-gray-800/50">
                  <td className="p-4 font-mono text-sm text-emerald-400">{tx.id}</td>
                  <td className="p-4 text-gray-300">{tx.date}</td>
                  <td className="p-4 font-semibold">${tx.amount}</td>
                  <td className="p-4 text-gray-300">{tx.recipient}</td>
                  <td className="p-4 text-gray-300">{tx.network}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-emerald-950 text-emerald-400">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Showing your last 4 transfers. Real transactions will appear here after you send money.
        </p>
      </div>
    </div>
  );
}