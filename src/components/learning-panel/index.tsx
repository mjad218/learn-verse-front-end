import { Course } from "@/types/course.type";

type Props = {
  courses: Course[];
};

const LearnPanel = ({ courses }: Props) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>{course.courseName}</div>
      ))}
    </div>
  );
};

export default LearnPanel;
