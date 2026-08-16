import { Metadata } from 'next';
import { Mail, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Promote Your Server | Niko',
  description: 'Reach new communities and grow your Discord server with Niko featured promotions.',
};

export default function PromotePage() {
  const contactEmail = process.env.PROMOTION_EMAIL || 'partnerships@niko.security';
  const contactDiscord = process.env.PROMOTION_DISCORD || 'https://discord.gg/niko';

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Want to promote your <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Discord server with Niko?
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Reach active communities using Niko. Contact us to discuss tailored server promotion opportunities and featured placements.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-card border rounded-2xl p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Sparkles className="w-24 h-24 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Promotion Types</h2>
          <ul className="space-y-4 mb-8 text-muted-foreground">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
              <span><strong>Featured Server</strong> placement on the Niko Server Directory</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
              <span><strong>Website Homepage</strong> sponsorship blocks</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
              <span><strong>Niko DM Promotion</strong> directly to active Discord users (Strict limits apply)</span>
            </li>
          </ul>
          
          <div className="bg-secondary/50 rounded-xl p-4 flex items-start gap-3 border border-primary/20">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold mb-1">Quality First</p>
              <p className="text-xs text-muted-foreground">
                All promotions are manually reviewed by our team to ensure the highest quality for our users. We do not support self-service automated advertising.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-8 shadow-sm flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Contact us for availability and pricing. Our team will review your community and help you set up the perfect campaign.
          </p>

          <div className="space-y-4">
            <Button size="lg" className="w-full justify-start h-14 text-base" asChild>
              <a href={`mailto:${contactEmail}`}>
                <Mail className="w-5 h-5 mr-3" />
                Contact via Email
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="w-full justify-start h-14 text-base" asChild>
              <a href={contactDiscord} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-3 text-[#5865F2]" />
                Contact via Discord
              </a>
            </Button>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-8">
            Replies typically within 24-48 business hours.
          </p>
        </div>
      </div>
    </div>
  );
}
