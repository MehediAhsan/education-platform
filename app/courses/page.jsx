
import Link from "next/link";

async function getCourses(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/courses`)
  const courses = await response.json();
  return courses;
}

const CoursesPage = async () => {
    
      

      const courses = await getCourses();
      

 
  return (
    <div className="container mx-auto py-12 pt-28">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        Explore Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="shadow-md p-6 rounded-lg h-full border-2 border-teal-500 bg-slate-950 cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-200">{course.title}</h3>
              <p className="text-gray-200 mb-4">{course.description}</p>
              <Link href={`/courses/${course.id}`} className="bg-teal-500 hover:bg-teal-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition duration-300 -skew-y-3 transform">
                
                  Learn More
               
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesPage
