
export default function About() {
  return (
    <div className="grid bg-sand dark:bg-gray-950 text-gray-900 dark:text-white grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex-col text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            StarWapp
          </h1>
          <h3 className="text-2xl sm:text-4xl font-bold mb-4">
            A Star Wars explorer
          </h3>

          <section className="text-lg sm:text-xl max-w-4xl space-y-4 mb-4">
            <p>
              <strong>StarWapp</strong> is a fan-made application that brings the Star Wars universe closer to you.
              Dive into a galactic database of starships — from nimble starfighters to massive capital ships —
              and learn about their design, specs, and the roles they played across the galaxy.
            </p>
            <p>
              Whether you&apos;re a die-hard fan or just getting started, StarWapp helps you explore the rich lore and
              technology behind these iconic vessels.
            </p>
            <ul className="list-disc pl-6">
              <li>Browse a collection of Star Wars Characters, Starhips, Planets and Films</li>
              <li>Smooth UI with dark mode support</li>
              <li>Powered by Next.js and the Star Wars API (SWAPI)</li>
            </ul>
          </section>

          <p className="text-lg sm:text-xl mb-2">
            Built with passion by <strong><a href="https://github.com/MatiCepe">MatiCepe</a></strong> 
          </p>

          <blockquote className="italic text-gray-700 dark:text-gray-300 mt-4">
            “Traveling through hyperspace ain&apos;t like dusting crops, farm boy.”
            <span className="block text-right">— Han Solo</span>
          </blockquote>
        </div>

      </main>

    </div>
  );

}