import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
export interface PostsProps {
  _createdAt: Date;
  views: number;
  author: {
    _id: number;
    name: string;
  };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Júlia Haramoni",
      },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png",
      category: "Plants",
      title: "We are Plants",
    },
  ];

  return (
    <>
      <section className=" w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br /> Conect With Entrepreneurs
        </h1>

        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !max-w-3xl">
          Submit Ideas, Vote on Piches , and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="text-300-semibold">
          {query ? `Search resolts for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts.map((post: PostsProps) => (
            <StartupCard post={post} key={post._id} />
          ))}
        </ul>
      </section>
    </>
  );
}
