import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <h1 className="text-8xl">Console.peg</h1>
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
