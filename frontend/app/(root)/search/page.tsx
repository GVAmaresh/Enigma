//app/page.tsx

// import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  // const user = await currentUser();

  // const result = await fetchPosts(1, 30);

  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10 "></section>
    </div>
  );
}
