import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col py-20 px-20 justify-between ">
      <div>
        <Link href="/">
          <p>{"<-"} Go back home</p>
        </Link>
        <h2 className="text-7xl">projects</h2>
        <p className="text-2xl">stuff we did.</p>
        <div className="flex mt-10">
          <div className=" border-2 border-white w-[320px] h-[450px] rounded-lg">
            <img src="https://placehold.co/600x400/EEE/31343C" />
            <div className="p-5">
              <h3 className="text-2xl">
                How we created this blog in less than 3 hours?
              </h3>
              <p className="text-lg mt-2">
                This blog was created in less than a day and this here is going
                to tell you how that happened.
              </p>
              <p className="mt-4">Go to Blog {"->"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
