'use client';
import { Project } from '@/data/projects';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function VideoModal({ isOpen, onClose, project }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 text-white hover:text-gray-400 transition-colors"
          >
            <X size={40} />
          </button>

          <div className="w-full max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">
              {project.client} <span className="text-gray-500">— {project.title}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.videos.map((video, idx) => (
                <div key={idx} className="aspect-video bg-gray-900 overflow-hidden rounded-sm relative group shadow-2xl">
                  {/* YouTube Embed Placeholder */}
                  <iframe
                    src={video.replace('watch?v=', 'embed/')}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={`${project.client} Video ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-xl text-gray-400 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
