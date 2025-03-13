import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esai Saya',
  description: 'Halaman Esai.',
  openGraph: {
    title: 'Esai Saya',
    description: 'Halaman Esai.',
  },
};

export default function Essays() {
  const essays = [
    { title: "Belajar React dari Nol", date: "10 Maret 2025" },
    { title: "Menggunakan Next.js untuk Website", date: "15 Maret 2025" },
    { title: "Membuat Website Pribadi", date: "20 Maret 2025" }
  ];

  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
        <p className="text-zinc-600 mt-2">Beberapa artikel yang telah saya tulis.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {essays.map((essay, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-xl font-semibold">{essay.title}</h2>
            <p className="text-sm text-zinc-500">{essay.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
