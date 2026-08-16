'use client';

import React, { useState } from 'react';
import { updateServerListing } from './actions';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ServerListing } from '@niko/db';
import { toast } from 'react-hot-toast';
import { Loader2, Globe, Server, Link as LinkIcon, Save } from 'lucide-react';

export default function DiscoveryClient({ 
  guildId, 
  initialListing 
}: { 
  guildId: string;
  initialListing: ServerListing | null;
}) {
  const [isPublic, setIsPublic] = useState(initialListing?.isPublic || false);
  const [description, setDescription] = useState(initialListing?.description || '');
  const [category, setCategory] = useState(initialListing?.category || '');
  const [language, setLanguage] = useState(initialListing?.language || 'en');
  const [inviteUrl, setInviteUrl] = useState(initialListing?.inviteUrl || '');
  const [tags, setTags] = useState<string>(initialListing?.tags.join(', ') || '');
  
  const [isSaving, setIsSaving] = useState(false);

  const categories = [
    'Gaming', 'Anime', 'AI', 'Development', 'Music', 
    'Community', 'Education', 'Creators', 'Technology', 'Other'
  ];

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean).slice(0, 5); // max 5 tags
      
      await updateServerListing(guildId, {
        isPublic,
        description,
        category,
        language,
        inviteUrl,
        tags: tagsArray
      });
      toast.success('Discovery settings saved successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to save settings.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-card border rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isPublic ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Public Discovery</h2>
            <p className="text-muted-foreground text-sm">
              Allow users to discover and join your server on the public Niko Server Directory.
            </p>
          </div>
        </div>
        <Switch 
          checked={isPublic}
          onCheckedChange={setIsPublic}
        />
      </div>

      <div className="bg-card border rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-2">
          <Label htmlFor="description">Server Description</Label>
          <Textarea 
            id="description"
            placeholder="Tell everyone what makes your community special..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-32 resize-none"
            maxLength={1024}
          />
          <p className="text-xs text-muted-foreground text-right">{description.length}/1024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select 
              id="category"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select a category...</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Primary Language</Label>
            <select 
              id="language"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English (en)</option>
              <option value="es">Spanish (es)</option>
              <option value="fr">French (fr)</option>
              <option value="de">German (de)</option>
              <option value="ja">Japanese (ja)</option>
              <option value="pt">Portuguese (pt)</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags (Comma separated, max 5)</Label>
          <Input 
            id="tags"
            placeholder="gaming, chill, events, anime..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="invite">Permanent Discord Invite URL</Label>
          <div className="flex items-center">
            <div className="bg-secondary px-3 py-2 border border-r-0 rounded-l-md text-muted-foreground flex items-center justify-center">
              <LinkIcon className="w-4 h-4" />
            </div>
            <Input 
              id="invite"
              placeholder="https://discord.gg/..."
              value={inviteUrl}
              onChange={(e) => setInviteUrl(e.target.value)}
              className="rounded-l-none"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            You must provide a valid invite link for your server to appear publicly.
          </p>
        </div>

        <div className="pt-4 flex justify-end">
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            Save Discovery Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
