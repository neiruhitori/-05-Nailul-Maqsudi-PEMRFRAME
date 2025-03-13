import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function AboutMe() {
  return (
    <div className="mt-16 px-8 flex flex-col items-center text-center">
      <img
       src="/images/profile.png"
        alt="Foto Profil"
        className="w-40 h-40 rounded-full shadow-lg mb-4"
      />
      <h1 className="text-3xl font-bold">Halo, Saya Nailul Maqsudi 👋</h1>
      <p className="text-zinc-600 max-w-lg mt-2">
        Saya adalah seorang mahasiswa dari jurusan Teknik Informatika kelas RPL 4K dan saya saat ini sudah semester 8.
        Tujuan membuat website ini adalah sebagai salah satu cara untuk menyelesaikan tugas dari matakuliah Pemograman Berbasis  Framework.
      </p>
      <div className="flex gap-4 mt-4">
        <a href="https://github.com/username" target="_blank" className="text-zinc-800 hover:text-blue-500">
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" className="text-zinc-800 hover:text-blue-500">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="https://twitter.com/username" target="_blank" className="text-zinc-800 hover:text-blue-500">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
      </div>
    </div>
  );
}
