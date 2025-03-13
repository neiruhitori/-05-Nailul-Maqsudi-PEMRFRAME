import type { Metadata } from 'next';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Proyek Saya',
  description: 'Halaman tentang.',
  openGraph: {
    title: 'Proyek Saya',
    description: 'Halaman Proyek.',
  },
};

export default function Projects() {
    return (
      <div className="mt-16 px-8">
        <header>
          <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
          <p className="text-base text-zinc-600">
            Berikut adalah beberapa proyek yang telah saya kerjakan.
          </p>
        </header>
  
        <div className="mt-16">
          <h2 className="text-xl font-bold">Aplikasi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
              <Image
                src="/images/project1.png"
                alt="Aplikasi 1"
                width={150}
                height={150}
                className="rounded-xl"
              />
              <h3 className="mt-4 text-lg font-semibold">Aplikasi 1</h3>
              <button className="mt-2 bg-gray-200 px-4 py-2 rounded-lg text-sm">
                Lihat Proyek
              </button>
            </div>
  
            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
              <Image
                src="/images/project2.png"
                alt="Aplikasi 2"
                width={150}
                height={150}
                className="rounded-xl"
              />
              <h3 className="mt-4 text-lg font-semibold">Aplikasi 2</h3>
              <button className="mt-2 bg-gray-200 px-4 py-2 rounded-lg text-sm">
                Lihat Proyek
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  