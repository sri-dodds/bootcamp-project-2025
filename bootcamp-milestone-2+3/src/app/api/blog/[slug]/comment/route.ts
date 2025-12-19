import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../database/db";
import Blog from "../../../../../database/blogSchema";

type Params = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: Params) {
  await connectDB();

  const { slug } = params;
  const body = await req.json();

  const { user, comment } = body;

  // Basic validation
  if (!user || !comment) {
    return NextResponse.json(
      { error: "Missing user or comment" },
      { status: 400 }
    );
  }

  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
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

    return NextResponse.json(updatedBlog, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Blog not found" },
      { status: 404 }
    );
  }
}