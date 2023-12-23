"use client";

import { useEffect, useState } from "react";
import { getClasses } from "../../(root)/config/helper";
export default function timetable() {
  const [classes, setClasses] = useState();
  useEffect(() => {
    getClasses(setClasses);
  }, []);
  console.log(classes);

  return (
    <>
      <div className="flex justify-around p-10 gap-2">
        <div className="">
          <select name="" id="" className="w-85 px-10 py-4 rounded-xl">
            {classes?.map((e) => (
              <option key={e.id} value={e.id}>
                {e.className}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <select name="" id="" className="w-85 px-10 py-4 rounded-xl">
            <option value="">12-10-2023</option>
          </select>
        </div>
        <div className="">
          <button className="w-85 px-10 py-4 bg-white rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
