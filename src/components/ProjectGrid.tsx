'use client';
import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight uppercase border-l-4 border-white pl-6">
          Unsere Arbeiten
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="aspect-video relative overflow-hidden bg-gray-900 rounded-sm">
                <img
                  src={project.thumbnail}
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-md rounded-full p-6 border border-white/20">
                    <Play fill="white" className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{project.type}</p>
                  <h3 className="text-xl font-bold group-hover:text-gray-300 transition-colors uppercase tracking-tight">
                    {project.client}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2 max-w-[80%]">{project.title}</p>
                </div>
              </div>

              {/* Comparison Actions */}
              <div className="mt-4 flex gap-4 text-xs font-bold uppercase tracking-widest">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all"
                >
                  Lightbox (Pop-up)
                </button>
                <Link 
                  href={`/projects/${project.id}`}
                  className="px-4 py-2 bg-white text-black hover:bg-gray-300 transition-all"
                >
                  Detailseite
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal (Lightbox) */}
      {selectedProject && (
        <VideoModal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
          project={selectedProject} 
        />
      )}
    </section>
  );
}
