import Link from "next/link";

export default function Home() {
  return (
    <div className="flex px-40 py-40 h-screen w-screen justify-center items-center z-[1000]">
      <div>
        <h1 className="text-6xl lg:text-8xl text-center">Console.peg</h1>
        <p className="text-center text-md lg:text-3xl text-green-400">
          TURNING COCA 🥤 TO CODE 🧑‍💻 TO INJERA. 🫓
        </p>
        <div className="flex flex-col lg:flex-row gap-4 justify-between mt-10">
          <Link href="/articles">
            <h2 className="text-xl text-center lg:text-3xl text-red-400 border-2 border-red-400 p-2 rounded-lg hover:border-white hover:text-white ">
              articles
            </h2>
          </Link>

          <Link href="/projects">
            <h2 className="text-xl text-center lg:text-3xl text-red-400 border-2 border-red-400 p-2 rounded-lg hover:border-white hover:text-white">
              projects
            </h2>
          </Link>

          <Link href="/random">
            <h2 className="text-xl text-center lg:text-3xl text-red-400 border-2 border-red-400 p-2 rounded-lg hover:border-white hover:text-white">
              random
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
