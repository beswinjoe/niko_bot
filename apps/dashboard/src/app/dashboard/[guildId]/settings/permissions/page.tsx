import { getGuildRoles, getRoleSettings } from './actions';
import PermissionsClient from './PermissionsClient';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function PermissionsPage({ params }: { params: Promise<{ guildId: string }> }) {
  const session = await getSession();
  if (!session) redirect('/login');

  const { guildId } = await params;

  try {
    const roles = await getGuildRoles(guildId);
    const data = await getRoleSettings(guildId);

    return (
      <PermissionsClient
        guildId={guildId}
        roles={roles}
        initialData={data}
      />
    );
  } catch (err: any) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error Loading Permissions</h1>
        <p className="text-neutral-400">{err.message}</p>
      </div>
    );
  }
}
