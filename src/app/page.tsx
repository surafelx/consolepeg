import Link from "next/link";

export default function Home() {
  return (
    <div className="flex px-40 py-40 h-screen w-screen justify-center items-center z-[1000]">
      <div>
        <h1 className="text-8xl trippy-text text-center">Console.peg</h1>
        <p className="text-center text-2xl">
          turning coca 🥤 to code 🧑‍💻 to injera. 🫓
        </p>
        <div className="flex justify-between mt-10">
          <Link href="/articles">
            <h2 className="text-3xl">articles</h2>
          </Link>

          <Link href="/projects">
            <h2 className="text-3xl">projects</h2>
          </Link>

          <Link href="/random">
            <h2 className="text-3xl">random</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
