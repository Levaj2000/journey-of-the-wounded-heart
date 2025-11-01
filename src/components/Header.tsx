'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-10 backdrop-blur bg-black/10 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide glow">Wounded Heart</Link>
        <div className="flex gap-4 text-sm">
          <Link href="#spirit" className="hover:underline">Spirit</Link>
          <Link href="#soul" className="hover:underline">Soul</Link>
          <Link href="#body" className="hover:underline">Body</Link>
          <Link href="#journey" className="hover:underline">Journey</Link>
          <Link href="/journal" className="hover:underline">Journal</Link>
        </div>
      </nav>
    </header>
  );
}
