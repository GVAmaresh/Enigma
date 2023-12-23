// // Import React and any other necessary modules
// import React from "react";
// import Image from "next/image";
// // Define the aspect-ratio function
// const aspectRatio = (ratioA: number, ratioB: number) => {
//   const factor = `calc(${ratioA} / ${ratioB})`;
//   return `calc((100vw - (3 * 10px)) / (4 * ${factor}))`;
// };

// // Define the React component
// const MyGrid: React.FC = () => {
//   return (
//     <div className="grid max-w-screen-xl bg-transparent grid-cols-4 gap-5 grid-flow-dense auto-rows-min p-2 h-full ">
//       <div className="grid__item bg-light-3 p-2 col-span-2.5 row-span-4 h-96 rounded-xl">
//         {/* Content for item 1 */}
//       </div>
//       {/* <div className="grid__item bg-slate-600 p-2 col-span-1 h-64">3</div> */}
//       <div className="grid__item bg-gray-950 p-2 col-span-3 row-span-3 h-64 rounded-xl grid grid-cols-3 grid-rows-3">
//         <div className="col-span-1 row-span-3">
//           <Image
//             src={"/img/img11.png"}
//             alt="Profile Image"
//             width={228}
//             height={228}
//             className="rounded-full"
//           />
//         </div>
//         <div className="col-span-2 row-span-2 pt-20 font-extrabold text-heading1-bold text-white">
//           Hello Welcome!
//         </div>
//       </div>
//       <div className="grid__item bg-yellow-600 p-2 col-start-3 col-end-5 h-64 rounded-xl">
//         5<h2>Current ratio: 16:9</h2>
//       </div>
//       <div className="grid__item bg-red-700 p-2 col-span-2 row-start-4.5 row-end-6 h-64 mt-[-18%] rounded-xl">
//         7
//       </div>
//     </div>
//   );
// };

// // Export the component
// export default MyGrid;
export default function Home() {
  return <></>;
}
