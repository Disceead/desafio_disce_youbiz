import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="/posts" className="mb-16 text-4xl font-bold text-zinc-900 rounded-xl bg-red-500/30 p-8 dark:text-zinc-100 sm:text-5xl">
          Entrar 
        </Link>
      </main>
    </div>
  );
}
