import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import Project from "../../../../database/projectModel";

export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }) {
    const { slug } = await params;
  await connectDB();
  

  const body = await req.json();
  const { user, comment, projectId } = body;

  if (!user || !comment || !projectId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      {
        $push: {
          comments: {
            user,
            comment,
            time: new Date(),
          },
        },
      },
      { new: true }
    ).orFail();

    return NextResponse.json(updatedProject, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }
}
