"use client";
import React, { useState } from "react";

interface Student {
  name: string;
  usn: string;
  isTrue: boolean;
}

interface StudentDetailProps extends Student {
  index: number;
}

const StudentDetail: React.FC<StudentDetailProps> = ({
  index,
  name,
  usn,
  isTrue,
}) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = () => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };

  return (
    <>
      <div
        key={index}
        className={`flex justify-evenly py-2 mb-1 cursor-pointer ${
          selectedItem === index
            ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
            : "bg-black"
        }`}
        onClick={handleItemClick}
      >
        <div className="">{index}</div>
        <div className="w-20">{name}</div>
        <div className="usn">{usn}</div>
      </div>
    </>
  );
};

const TotalStudent: React.FC = () => {
  const isTrueArray: Student[] = [
    { name: "Amaresh", usn: "1DS21CS081", isTrue: true },
    { name: "John", usn: "1DS21CS082", isTrue: false },
    { name: "Alice", usn: "1DS21CS083", isTrue: true },
  ];

  return (
    <div className="text-white p-10">
      <div className="text-heading3-bold mb-5">Total Student: 126</div>
      <hr />
      <div className="mt-2">
        {isTrueArray.map((item, index) => (
          <StudentDetail
            key={index}
            index={index}
            name={item.name}
            usn={item.usn}
            isTrue={item.isTrue}
          />
        ))}
      </div>
    </div>
  );
};

export default TotalStudent;
