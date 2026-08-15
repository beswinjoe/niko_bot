'use client';

import { useState } from 'react';
import { DiscordRole, saveRoleSettings } from './actions';
import { useRouter } from 'next/navigation';

export default function PermissionsClient({
  guildId,
  roles,
  initialData
}: {
  guildId: string;
  roles: DiscordRole[];
  initialData: { setting: any; cmdPerms: any[] };
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [baseRoles, setBaseRoles] = useState({
    modRole: initialData.setting?.modRole || '',
    seniorModRole: initialData.setting?.seniorModRole || '',
    adminRole: initialData.setting?.adminRole || '',
    mutedRole: initialData.setting?.mutedRole || '',
  });

  const initCmdRoles: Record<string, string[]> = {
    warn: [], timeout: [], kick: [], ban: [], purge: [], security: []
  };
  
  if (initialData.cmdPerms) {
    initialData.cmdPerms.forEach(p => {
      if (initCmdRoles[p.command]) initCmdRoles[p.command].push(p.roleId);
    });
  }

  const [commandRoles, setCommandRoles] = useState<Record<string, string[]>>(initCmdRoles);

  const handleBaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBaseRoles(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddCmdRole = (cmd: string, roleId: string) => {
    if (!roleId || commandRoles[cmd].includes(roleId)) return;
    setCommandRoles(prev => ({
      ...prev,
      [cmd]: [...prev[cmd], roleId]
    }));
  };

  const handleRemoveCmdRole = (cmd: string, roleId: string) => {
    setCommandRoles(prev => ({
      ...prev,
      [cmd]: prev[cmd].filter(id => id !== roleId)
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await saveRoleSettings(guildId, { ...baseRoles, commandRoles });
      alert('Settings saved successfully!');
      router.refresh();
    } catch (err: any) {
      alert(`Error saving settings: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const BaseRoleSelect = ({ label, name }: { label: string; name: string }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-neutral-300">{label}</label>
      <select
        name={name}
        value={(baseRoles as any)[name]}
        onChange={handleBaseChange}
        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#5865F2] outline-none transition-all"
      >
        <option value="">[ Select Role ]</option>
        {roles.map(r => (
          <option key={r.id} value={r.id}>{r.name}</option>
        ))}
      </select>
    </div>
  );

  const CmdRoleManager = ({ label, cmd }: { label: string; cmd: string }) => (
    <div className="flex flex-col gap-3 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
      <label className="text-sm font-medium text-white">{label}</label>
      <div className="flex flex-wrap gap-2">
        {commandRoles[cmd].map(rId => {
          const r = roles.find(ro => ro.id === rId);
          return (
            <span key={rId} className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 rounded-md text-sm">
              {r ? r.name : 'Unknown Role'}
              <button onClick={() => handleRemoveCmdRole(cmd, rId)} className="text-neutral-400 hover:text-red-400">×</button>
            </span>
          );
        })}
      </div>
      <div className="flex gap-2 mt-2">
        <select
          id={`add-${cmd}`}
          className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-[#5865F2] outline-none"
        >
          <option value="">[ Select Role to Add ]</option>
          {roles.map(r => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>
        <button
          onClick={() => {
            const select = document.getElementById(`add-${cmd}`) as HTMLSelectElement;
            handleAddCmdRole(cmd, select.value);
            select.value = '';
          }}
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Role & Permissions Configuration</h1>

      <div className="space-y-8">
        <section className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#5865F2]">Base Roles</h2>
          <p className="text-neutral-400 mb-6 text-sm">Assign the core moderation hierarchy for your server.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseRoleSelect label="Moderator Role" name="modRole" />
            <BaseRoleSelect label="Senior Moderator Role" name="seniorModRole" />
            <BaseRoleSelect label="Administrator Role" name="adminRole" />
            <BaseRoleSelect label="Muted Role" name="mutedRole" />
          </div>
        </section>

        <section className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#ED4245]">Command Permissions</h2>
          <p className="text-neutral-400 mb-6 text-sm">Strictly require specific roles to use these commands. (Discord permissions are still enforced). You can add multiple roles per command.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CmdRoleManager label="Warn Command (/warn, !warn)" cmd="warn" />
            <CmdRoleManager label="Timeout Command (/timeout, !mute)" cmd="timeout" />
            <CmdRoleManager label="Kick Command (/kick, !kick)" cmd="kick" />
            <CmdRoleManager label="Ban Command (/ban, !ban)" cmd="ban" />
            <CmdRoleManager label="Purge Command (/purge, !purge)" cmd="purge" />
            <CmdRoleManager label="Security Command (/security)" cmd="security" />
          </div>
        </section>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] disabled:opacity-50 text-white rounded-xl font-bold transition-colors"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
