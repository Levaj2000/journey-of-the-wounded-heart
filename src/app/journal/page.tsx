'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Entry {
  id: string;
  text: string;
  date: string;
}

export default function JournalPage() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);

  // Load saved entries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('woundedHeartJournal');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('woundedHeartJournal', JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (!entry.trim()) return;
    const newEntry: Entry = {
      id: Date.now().toString(),
      text: entry.trim(),
      date: new Date().toLocaleString()
    };
    setEntries([newEntry, ...entries]);
    setEntry('');
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <main className="min-h-screen px-4 pt-28 pb-16 max-w-3xl mx-auto text-center">
      <Link href="/" className="text-sm text-white/60 hover:underline">← Back to Home</Link>
      <h1 className="text-4xl font-semibold mt-4 glow">Journal Reflections</h1>
      <p className="text-white/70 mt-2">
        Your private reflections are stored safely in your browser — visible only to you.
      </p>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your reflection here..."
        className="w-full mt-6 rounded-xl p-4 bg-white/10 border border-white/10 text-white/90 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        rows={5}
      />

      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 rounded-full bg-cyan-500/80 hover:bg-cyan-400 text-black font-medium"
      >
        Save Entry
      </button>

      <div className="mt-10 text-left space-y-4">
        {entries.length === 0 && (
          <p className="text-white/60 text-sm text-center">No reflections yet — start by writing your first one.</p>
        )}
        {entries.map((e) => (
          <div key={e.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex justify-between text-xs text-white/50 mb-2">
              <span>{e.date}</span>
              <button onClick={() => handleDelete(e.id)} className="hover:text-red-400">Delete</button>
            </div>
            <p className="text-white/80 whitespace-pre-wrap">{e.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

