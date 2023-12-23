import Teacher from "./Teacher";
import Student from "./totalStudents";
import Timetable from "./timetable";
export default function teacherAttendance() {
  return (
    <>
      <div className=" p-16">
        <Teacher />
        <Timetable />
        <Student />
        <div className="p-3 bg-sky-600 w-20 text-center text-white font-bold rounded-lg mt-5">
          Save
        </div>
      </div>
    </>
  );
}
