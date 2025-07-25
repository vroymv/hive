import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/nextauth';
import { createWorkspace, getWorkspaceByUserId } from '@/services/workspace';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !(session.user as { id?: string }).id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = (session.user as { id: string }).id;
  const workspace = await getWorkspaceByUserId(userId);
  if (!workspace) {
    return NextResponse.json({ workspace: null }, { status: 200 });
  }
  return NextResponse.json({ workspace }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !(session.user as { id?: string }).id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = (session.user as { id: string }).id;
  const body = await request.json();
  const { name, description, slug } = body;
  if (!name || !slug) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  const workspace = await createWorkspace({ name, description, slug, ownerId: userId });
  return NextResponse.json({ workspace }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !(session.user as { id?: string }).id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = (session.user as { id: string }).id;
  // Find the workspace owned by this user
  const workspace = await db.workspace.findFirst({ where: { ownerId: userId } });
  if (!workspace) {
    return NextResponse.json({ error: 'No workspace found for user' }, { status: 404 });
  }
  await db.workspace.delete({ where: { id: workspace.id } });
  return NextResponse.json({ success: true }, { status: 200 });
} 