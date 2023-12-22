// "use server";
// import axios from "axios";
// const fetchData = async (input: string) => {
//   try {
//     const response = await axios.post("http://127.0.0.1:8000/input", {
//       input: input,
//     });

//     if (response.status !== 200) {
//       throw new Error("Network response was not ok");
//     }

//     const data = response.data;
//     console.log(data);
//     return data.bot;
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//   }
// };
// export default fetchData;
