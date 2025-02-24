import { connectToDatabase } from "@/lib/db.js";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase(); // Connect to MongoDB
    const projects = await Project.find({});
    return new NextResponse(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch projects" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
