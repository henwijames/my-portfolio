import { NextResponse } from "next/server";
import projectData from "@/public/projects.json";

export async function GET() {
  return NextResponse.json(projectData);
}
