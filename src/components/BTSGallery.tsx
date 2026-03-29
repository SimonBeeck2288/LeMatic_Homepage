'use client';
import { btsImages } from '@/data/projects';
import { motion } from 'framer-motion';

export default function BTSGallery() {
  return (
    <section id="bts" className="py-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight uppercase border-l-4 border-white pl-6">
          Behind the Scenes
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {btsImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden group rounded-sm"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-sm uppercase tracking-widest font-bold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
