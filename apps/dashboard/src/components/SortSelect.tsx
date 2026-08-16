'use client';

import React from 'react';

export default function SortSelect({ defaultValue }: { defaultValue: string }) {
  return (
    <select 
      name="sort" 
      defaultValue={defaultValue}
      onChange={(e) => {
        const form = e.target.form;
        if (form) form.submit();
      }}
      className="h-14 bg-card/60 backdrop-blur-md border-2 border-border rounded-xl px-4 text-sm font-medium focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm cursor-pointer appearance-none"
    >
      <option value="recommended">Recommended</option>
      <option value="members">Most Members</option>
      <option value="recent">Recently Added</option>
      <option value="updated">Recently Updated</option>
      <option value="name">Name A-Z</option>
    </select>
  );
}
