import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col py-20 px-20 justify-between ">
      <div>
        <Link href="/">
          <p>{"<-"} Go back home</p>
        </Link>
        <h2 className="text-7xl">random</h2>
        <p className="text-2xl">nothing here yet.</p>
      </div>
    </div>
  );
}
