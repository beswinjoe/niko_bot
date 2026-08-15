import { getSession } from '@/lib/session';
import { PrismaClient } from '@niko/db';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Settings, LogOut, ShieldAlert } from 'lucide-react';

const prisma = new PrismaClient();

interface ExtendedUser {
  id: string;
  username: string;
  globalName?: string | null;
  avatar?: string | null;
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect('/login');

  const user = await prisma.user.findUnique({
    where: { id: session.userId }
  });

  if (!user) redirect('/login');
  const extUser = user as unknown as ExtendedUser;

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      <aside className="w-72 bg-black/40 border-r border-white/5 flex flex-col p-6 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 mb-10 px-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Niko Logo" className="w-10 h-10 object-contain rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
          <span className="text-2xl font-extrabold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">Niko</span>
        </Link>
        
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Servers
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <Settings className="w-5 h-5" />
            Account Settings
          </Link>
        </nav>

        <div className="flex items-center gap-3 p-3 border-t border-white/5 mt-auto">
          {extUser.avatar ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={extUser.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-white/10" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-neutral-800" />
          )}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate text-white">{extUser.globalName || extUser.username}</div>
            <div className="text-xs text-neutral-500 truncate">@{extUser.username}</div>
          </div>
          <form action="/api/auth/logout" method="POST" className="m-0">
            <button type="submit" className="text-neutral-500 hover:text-red-400 hover:bg-red-400/10 p-2 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 p-10 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
