import { NextResponse } from 'next/server'
 
export async function GET(request, {params}) {
    const id = params.id;
    const courses = require('../data.json'); // Adjust the path as needed
    const course = await courses.find(course => course.id === id);
  console.log(course)
    return NextResponse.json(course)
}