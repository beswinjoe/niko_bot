import React from 'react';
import { MessageSquare, Book, Bug } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  const options = [
    {
      title: "Join Niko Discord",
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      description: "Chat with the community, ask questions, and get help directly from the developers.",
      linkText: "Join Server",
      linkUrl: "#" // Replace with actual discord link
    },
    {
      title: "Documentation",
      icon: <Book className="w-8 h-8 text-accent" />,
      description: "Read our comprehensive guides and setup instructions.",
      linkText: "Read Docs",
      linkUrl: "/docs"
    },
    {
      title: "Report a Bug",
      icon: <Bug className="w-8 h-8 text-orange-400" />,
      description: "Found an issue? Let us know so we can fix it.",
      linkText: "Report Issue",
      linkUrl: "#" // Replace with issue tracker link
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Need Help?</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          We're here to help you get the most out of Niko. Choose an option below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {options.map((option, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl border border-white/5 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              {option.icon}
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{option.title}</h2>
            <p className="text-neutral-400 mb-8 flex-grow">{option.description}</p>
            <Link 
              href={option.linkUrl}
              className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors"
            >
              {option.linkText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
