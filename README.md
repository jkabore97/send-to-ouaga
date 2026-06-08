# Send to Ouaga

A modern, beautiful web app for sending remittances to mobile money wallets in Ouagadougou, Burkina Faso (Orange Money, Mobicash, Telecel Money).

## 🚀 Features
- Modern dark UI with smooth interactions
- User registration & login with phone or email (OTP demo)
- Dashboard with send money form
- Transaction history page with sample data
- Support for all 3 major networks in Burkina Faso

## 🛠 Tech Stack
- **Frontend**: Next.js 15 + Tailwind CSS + TypeScript
- **Icons**: Lucide React
- **Payments**: Ready for Flutterwave integration (demo mode included)

## ▶️ Getting Started

```bash
git clone https://github.com/jkabore97/send-to-ouaga.git
cd send-to-ouaga
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📍 Pages
- `/` - Landing page
- `/register` - Create account
- `/login` - Sign in
- `/dashboard` - Send money
- `/history` - View past transfers

## 💳 Adding Real Payments (Flutterwave)

To enable real payments:
1. Sign up at [Flutterwave](https://flutterwave.com)
2. Get your public key
3. Replace the demo `alert()` in `app/dashboard/page.tsx` with real Flutterwave checkout

Example integration point is already prepared in the Dashboard.

## 🌍 Deploy to Production

### Vercel (Recommended - Free & Easy)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your `send-to-ouaga` repo
4. Click Deploy

Your app will be live in ~1 minute with a free `.vercel.app` URL.

### Alternative: Cloudflare Pages
- Also excellent free option with fast global CDN.

## ⚠️ Important Legal Note
This is a **starter/demo template** only.
Real money remittance services require:
- Proper financial licenses
- Strong KYC/AML compliance
- Partnerships with licensed operators (Orange, Mobicash, Telecel) or aggregators like pawaPay / Tola Mobile

**Do not use this in production for real money movement without proper legal setup.**