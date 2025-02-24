import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

// GET /api/tasks - Get all tasks
export async function GET(req: NextRequest) {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

// POST /api/tasks - Create a new task
export async function POST(req: NextRequest) {
  try {
    const { text, color } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: { text, color },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating task:', error.message);
    } else {
      console.error('Unknown error creating task:', error);
    }

    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
