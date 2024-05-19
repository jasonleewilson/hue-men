import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <main class='h-screen w-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl'>HUE-MEN.COM</h1>
    </main>
  );
}
