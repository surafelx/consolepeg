import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col px-10 py-10 lg:px-40 lg:py-40 justify-between ">
      <div>
        <Link href="/">
          <p>{"<-"} Go back home</p>
        </Link>
        <h2 className="text-7xl text-red-400">articles</h2>
        <p className="text-2xl text-yellow-300">
          latest articles. insights. ideas.
        </p>

        <div className="flex mt-10 gap-8">
          <Link href="/how-we-created-this-blog-in-less-than-3-hours">
            <div className=" border-2 border-red-500 w-[320px] max-h-[450px] rounded-lg hover:border-white hover:text-white">
              <div className="p-5">
                <h3 className="text-2xl text-yellow-300">
                  How we created this blog in less than 3 hours?
                </h3>
                <p className="text-lg mt-2 text-green-300 ">
                  This blog was created in less than a day and this here is
                  going to tell you how that happened.
                </p>
                <p className="mt-4 text-blue-300">Go to Blog {"->"}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
