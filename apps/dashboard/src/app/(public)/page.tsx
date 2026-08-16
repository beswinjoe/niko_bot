import Link from 'next/link';
import { Shield, Zap, Activity, ChevronRight, Server } from 'lucide-react';
import { prisma } from "@niko/db";

export default async function Home() {
  let serverCount = 0;
  try {
    serverCount = await prisma.guild.count();
  } catch (e) {}

  const addBotUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=277025508352&scope=bot%20applications.commands`;

  return (
    <>
      <div className="max-w-5xl mx-auto text-center mt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
            <Activity className="w-4 h-4" /> Advanced AI Moderation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Smarter moderation. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
              Better server security.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Provide moderation, server security, custom role permissions, rules management, AFK, analytics, server intelligence, one-click security recommendations, and a web dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <a href={addBotUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105">
              Add Niko to Discord
            </a>
            <Link href="/features" className="w-full sm:w-auto flex items-center justify-center gap-2 glass hover:bg-white/5 px-8 py-4 rounded-xl font-semibold text-white transition-all">
              Explore Niko <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Analytics Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-3xl border border-white/5 backdrop-blur-xl">
              <div className="text-4xl font-extrabold text-white mb-2">99.9%</div>
              <div className="text-neutral-400 font-medium">Uptime Guarantee</div>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="text-4xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
                  <Server className="w-8 h-8 text-accent" /> {serverCount > 0 ? serverCount : "1,000+"}
                </div>
                <div className="text-neutral-400 font-medium">Servers Protected</div>
              </div>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/5 backdrop-blur-xl">
              <div className="text-4xl font-extrabold text-white mb-2">&lt; 50ms</div>
              <div className="text-neutral-400 font-medium">Threat Response Time</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto mt-32 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why choose Niko?</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Built from the ground up to handle the most demanding communities on Discord.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 border border-accent/30">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Threat Detection</h3>
              <p className="text-neutral-400 leading-relaxed">Automatically detects and quarantines malicious links, phishing attempts, and coordinated raids before they impact your users.</p>
            </div>
            
            <div className="bg-black/40 border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Content Moderation</h3>
              <p className="text-neutral-400 leading-relaxed">Powered by advanced language models to accurately identify toxicity, harassment, and severe rule violations in real-time context.</p>
            </div>

            <div className="bg-black/40 border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30">
                <Zap className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Retaliation</h3>
              <p className="text-neutral-400 leading-relaxed">Automated action execution. Niko acts in milliseconds to delete messages, timeout offenders, and alert your human staff instantly.</p>
            </div>
          </div>
        </div>
    </>
  );
}
