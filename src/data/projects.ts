// --- HINWEIS FÜR MARTIN ---
// In dieser Datei kannst du deine Kunden, Videos und Bilder anpassen.
// Achte darauf, dass die Anführungszeichen " " und Kommas , stehen bleiben!
// Wenn du fertig bist, einfach speichern (Strg + S).

export interface Project {
  id: string;
  client: string;
  title: string;
  description: string;
  thumbnail: string;
  videos: string[]; // Hier kommen YouTube/Vimeo Links rein
  type: 'festival' | 'event';
}

export interface BTSImage {
  id: string;
  url: string;
  caption: string;
}

export const projects: Project[] = [
  {
    id: "festival-1", // Ein interner Name (keine Leerzeichen)
    client: "Summer Beats Festival", // Name deines Kunden
    title: "Aftermovie 2023", // Titel des Projekts
    description: "Hauptbühne und BTS Einblicke vom größten Elektro-Festival der Region.", // Beschreibungstext
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop", // Vorschaubild Link
    videos: [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Link zum ersten Video
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"  // Link zum zweiten Video (optional)
    ],
    type: 'festival' // Entweder 'festival' oder 'event'
  },
  {
    id: "event-1",
    client: "Unternehmens-Konferenz",
    title: "Keynote Highlights",
    description: "Zusammenfassung der wichtigsten Momente der Konferenz.",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop",
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    type: 'event'
  },
  {
    id: "festival-2",
    client: "Rock am Ring",
    title: "Crowd & Energy",
    description: "Einfangen der rohen Energie des Publikums.",
    thumbnail: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1000&auto=format&fit=crop",
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    type: 'festival'
  }
];

export const btsImages: BTSImage[] = [
  // HIER KANNST DU DEINE "BEHIND THE SCENES" BILDER EINTRAGEN
  { 
    id: "bts-1", 
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop", 
    caption: "Aufbau der Mainstage" 
  },
  { 
    id: "bts-2", 
    url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop", 
    caption: "Gimbal-Aufnahme in der Menge" 
  },
  { 
    id: "bts-3", 
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop", 
    caption: "Backstage Interview" 
  },
];
