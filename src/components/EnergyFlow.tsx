'use client';
export default function EnergyFlow() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 text-sm">
      {[
        { id: 'spirit', title: 'Spirit', desc: 'Illumination • Presence • Identity' },
        { id: 'soul', title: 'Soul', desc: 'Memory • Emotion • Integration' },
        { id: 'body', title: 'Body', desc: 'Regulation • Grounding • Embodiment' }
      ].map((s) => (
        <div id={s.id} key={s.id} className="rounded-2xl p-5 border border-white/10 bg-white/5">
          <h3 className="font-semibold mb-1">{s.title}</h3>
          <p className="text-white/70">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
