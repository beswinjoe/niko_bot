'use client';

import { useState } from 'react';
import { DiscordRole, saveRoleSettings } from './actions';
import { useRouter } from 'next/navigation';

function BaseRoleSelect({ label, name, roles, value, onChange }: { label: string; name: string; roles: DiscordRole[]; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-neutral-300">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#5865F2] outline-none transition-all"
      >
        <option value="">[ Select Role ]</option>
        {roles.map(r => (
          <option key={r.id} value={r.id}>{r.name}</option>
        ))}
      </select>
    </div>
  );
}

function CmdRoleManager({ label, cmd, roles, commandRoles, onAdd, onRemove }: { label: string; cmd: string; roles: DiscordRole[]; commandRoles: Record<string, string[]>; onAdd: (cmd: string, roleId: string) => void; onRemove: (cmd: string, roleId: string) => void }) {
  return (
    <div className="flex flex-col gap-3 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
      <label className="text-sm font-medium text-white">{label}</label>
      <div className="flex flex-wrap gap-2">
        {commandRoles[cmd].map(rId => {
          const r = roles.find(ro => ro.id === rId);
          return (
            <span key={rId} className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 rounded-md text-sm">
              {r ? r.name : 'Unknown Role'}
              <button onClick={() => onRemove(cmd, rId)} className="text-neutral-400 hover:text-red-400">×</button>
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
            onAdd(cmd, select.value);
            select.value = '';
          }}
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default function PermissionsClient({
  guildId,
  roles,
  initialData
}: {
  guildId: string;
  roles: DiscordRole[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: { setting: any; cmdPerms: any[] };
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [baseRoles, setBaseRoles] = useState({
    mutedRole: initialData.setting?.mutedRole || '',
  });

  const initCmdRoles: Record<string, string[]> = {
    warn: [], mute: [], kick: [], ban: [], unban: [], purge: [], security: [], rules: [], muterole: [], permissions: [], '*': []
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
    } catch (err: unknown) {
      alert(`Error saving settings: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Role & Permissions Configuration</h1>

      <div className="space-y-8">
        <section className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#5865F2]">Mute Role</h2>
          <p className="text-neutral-400 mb-6 text-sm">Assign the role given to users when they are muted.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseRoleSelect label="Muted Role" name="mutedRole" roles={roles} value={(baseRoles as Record<string, unknown>).mutedRole as string} onChange={handleBaseChange} />
          </div>
        </section>

        <section className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#ED4245]">Command Permissions</h2>
          <p className="text-neutral-400 mb-6 text-sm">Strictly require specific roles to use these commands. (Discord permissions are still enforced). You can add multiple roles per command.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CmdRoleManager label="All Commands (*)" cmd="*" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Warn" cmd="warn" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Mute" cmd="mute" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Kick" cmd="kick" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Ban" cmd="ban" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Unban" cmd="unban" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Purge" cmd="purge" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Security" cmd="security" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Rules" cmd="rules" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Muterole" cmd="muterole" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
            <CmdRoleManager label="Permissions Config" cmd="permissions" roles={roles} commandRoles={commandRoles} onAdd={handleAddCmdRole} onRemove={handleRemoveCmdRole} />
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
