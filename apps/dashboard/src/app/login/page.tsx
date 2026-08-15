import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden font-sans">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] bg-accent/20 -top-[10%] -left-[10%] animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-pink-500/10 -bottom-[10%] -right-[10%] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      
      <div className="relative z-10 glass p-10 rounded-3xl w-full max-w-md text-center">
        <div className="mb-10 flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Niko Logo" className="w-24 h-24 object-contain rounded-full shadow-[0_0_30px_rgba(124,58,237,0.5)] mb-6" />
          <h1 className="text-white text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-neutral-400 text-sm">Sign in to manage your server security</p>
        </div>

        <Link href="/api/auth/discord" className="flex items-center justify-center gap-3 w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-4 px-6 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(88,101,242,0.4)] border border-white/10">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
            <path fill="#fff" d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83a72.37 72.37 0 0 0-3.36-6.83 105.15 105.15 0 0 0-26.23 8.07C2.71 32.74-2.11 56.88.85 80.79a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c3.41-27.29-3.32-50.68-19.21-72.73zM42.49 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.4 12.69zm42.24 0C78.41 65.69 73.31 60 73.31 53s5-12.74 11.43-12.74S96.2 46 96.1 53s-5.06 12.69-11.37 12.69z"/>
          </svg>
          Login with Discord
        </Link>
      </div>
    </div>
  );
}
