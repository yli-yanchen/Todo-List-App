import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Adjust the import based on your setup

// DELETE /api/tasks/[id] - Delete a task
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Wait for the params to be resolved
  const { id } = await params; // Await the params object

  if (!id) {
    return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
  }

  try {
    await prisma.task.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    );
  }
}
