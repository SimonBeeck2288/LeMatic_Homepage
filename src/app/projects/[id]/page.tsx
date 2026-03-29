import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Zurück zur Übersicht
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
              {project.client}
            </h1>
            <p className="text-xl text-gray-400 mb-8 uppercase tracking-widest border-b border-white/10 pb-4">
              {project.title}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-col gap-4 text-sm uppercase tracking-widest font-bold">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-600">Kategorie</span>
                <span>{project.type === 'festival' ? 'Festival' : 'Event'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-600">Jahr</span>
                <span>2023 / 2024</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {project.videos.map((video, idx) => (
              <div key={idx} className="aspect-video bg-gray-900 overflow-hidden rounded-sm relative shadow-2xl">
                <iframe
                  src={video.replace('watch?v=', 'embed/')}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={`${project.client} Video ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
