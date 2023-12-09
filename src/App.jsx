import { Course } from "./components/Course";
import { courses } from "./Courses";

function App() {
  
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
}

export default App;
