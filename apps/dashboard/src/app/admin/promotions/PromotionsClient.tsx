'use client';

import React, { useState } from 'react';
import { createPromotion, updatePromotion } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-hot-toast';
import { FeaturedPromotion, Guild } from '@niko/db';

type PromotionWithGuild = FeaturedPromotion & { guild: Guild };

export default function PromotionsClient({ initialPromotions }: { initialPromotions: PromotionWithGuild[] }) {
  const [promotions, setPromotions] = useState(initialPromotions);
  
  // New Promotion State
  const [newGuildId, setNewGuildId] = useState('');
  const [newType, setNewType] = useState('FEATURED_PLACEMENT');
  const [newStatus, setNewStatus] = useState('ACTIVE');
  const [newExpiresAt, setNewExpiresAt] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleCreate = async () => {
    try {
      if (!newGuildId || !newExpiresAt) return toast.error('Guild ID and Expiration are required.');
      await createPromotion({
        guildId: newGuildId,
        promotionType: newType,
        status: newStatus,
        expiresAt: newExpiresAt,
        promotionalMessage: newMessage
      });
      toast.success('Promotion created! Refresh the page to see changes.');
    } catch (e: any) {
      toast.error(e.message || 'Failed to create promotion.');
    }
  };

  const handleStatusChange = async (id: number, status: string, expiresAt: Date, msg: string | null) => {
    try {
      await updatePromotion(id, { status, expiresAt: expiresAt.toISOString(), promotionalMessage: msg || '' });
      toast.success('Updated successfully.');
    } catch (e: any) {
      toast.error(e.message || 'Failed to update.');
    }
  };

  return (
    <div className="space-y-10">
      <div className="bg-card border p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-bold">Create New Promotion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="space-y-2">
            <Label>Guild ID</Label>
            <Input value={newGuildId} onChange={e => setNewGuildId(e.target.value)} placeholder="Discord Server ID" />
          </div>
          <div className="space-y-2">
            <Label>Type</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={newType} onChange={e => setNewType(e.target.value)}>
              <option value="FEATURED_PLACEMENT">Featured Listing</option>
              <option value="DM_PROMOTION">DM Promotion</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={newStatus} onChange={e => setNewStatus(e.target.value)}>
              <option value="ACTIVE">Active</option>
              <option value="PAUSED">Paused</option>
              <option value="EXPIRED">Expired</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Expiration Date</Label>
            <Input type="datetime-local" value={newExpiresAt} onChange={e => setNewExpiresAt(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Message (Optional)</Label>
            <Input value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Custom DM text" />
          </div>
        </div>
        <Button onClick={handleCreate}>Create Promotion</Button>
      </div>

      <div className="bg-card border p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Existing Promotions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-secondary/50 border-b">
              <tr>
                <th className="px-4 py-3">Server</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Expires At</th>
                <th className="px-4 py-3">Metrics</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map(promo => (
                <tr key={promo.id} className="border-b border-white/5">
                  <td className="px-4 py-3 font-medium">
                    {promo.guild.name} <br/>
                    <span className="text-xs text-muted-foreground">{promo.guildId}</span>
                  </td>
                  <td className="px-4 py-3">{promo.promotionType}</td>
                  <td className="px-4 py-3">
                    <select 
                      className="bg-transparent border rounded p-1 text-xs" 
                      value={promo.status} 
                      onChange={e => handleStatusChange(promo.id, e.target.value, promo.expiresAt, promo.promotionalMessage)}
                    >
                      <option value="ACTIVE">Active</option>
                      <option value="PAUSED">Paused</option>
                      <option value="EXPIRED">Expired</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">{new Date(promo.expiresAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-xs">
                    Impr: {promo.impressions} | Click/DM: {promo.promotionType === 'DM_PROMOTION' ? promo.dmSent : promo.clicks}
                  </td>
                  <td className="px-4 py-3">
                    <Button variant="outline" size="sm" onClick={() => handleStatusChange(promo.id, 'EXPIRED', promo.expiresAt, promo.promotionalMessage)}>
                      Force Expire
                    </Button>
                  </td>
                </tr>
              ))}
              {promotions.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No promotions found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
