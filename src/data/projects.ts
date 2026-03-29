export interface Project {
  id: string;
  client: string;
  title: string;
  description: string;
  thumbnail: string;
  videos: string[]; // YouTube/Vimeo URLs
  type: 'festival' | 'event';
}

export interface BTSImage {
  id: string;
  url: string;
  caption: string;
}

export const projects: Project[] = [
  {
    id: "festival-a",
    client: "Summer Beats Festival",
    title: "Aftermovie 2023",
    description: "Hauptbühne und BTS Einblicke vom größten Elektro-Festival der Region.",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop",
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    type: 'festival'
  },
  {
    id: "event-b",
    client: "Tech Conference 2024",
    title: "Keynote Highlights",
    description: "Zusammenfassung der wichtigsten Momente der Tech-Konferenz.",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop",
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    type: 'event'
  },
  {
    id: "festival-c",
    client: "Rock am Ring",
    title: "Crowd & Energy",
    description: "Capturing the raw energy of the audience.",
    thumbnail: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1000&auto=format&fit=crop",
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    type: 'festival'
  }
];

export const btsImages: BTSImage[] = [
  { id: "1", url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop", caption: "Mainstage Setup" },
  { id: "2", url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop", caption: "Gimbal Shot in Crowd" },
  { id: "3", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop", caption: "Backstage Interview" },
];
