import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreeScene from '@/components/ThreeScene';
import EnergyFlow from '@/components/EnergyFlow';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-4 pt-28 pb-14 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight glow">
          The Journey of the Wounded Heart
        </h1>
        <p className="mt-4 text-white/80">
          Where the broken become whole — through the light of Spirit, the truth of Soul, and the renewal of Body.
        </p>
        <div className="mt-10">
          <ThreeScene />
        </div>
        <EnergyFlow />
        <div id="journey" className="mt-12 text-sm text-white/70">
          <p>Start here: explore each layer and journal your reflections. More interactive features coming soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
