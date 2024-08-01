import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 md:p-24">
      <div className="flex flex-col items-center grow justify-center">
        <div className="flex overflow-auto">
          <Image
            src="/lookup-red.jpg"
            alt="Gowtham Reilly"
            width={200}
            height={200}
            className="rounded-l"
          />
          <Image
            src="/happy-green.jpg"
            alt="Gowtham Reilly"
            width={200}
            height={200}
          />
          <Image
            src="/way-back-in-coat.jpg"
            alt="Gowtham Reilly"
            width={200}
            height={200}
            className="rounded-r"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4 text-black">Gowtham Reilly</h1>
        <p className="text-lg mt-2 text-black">In the pursuit of greatness</p>
      </div>
    </main>
  );
}
