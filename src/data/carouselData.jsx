// src/data/carousel.js
import img1 from '../assets/agurchu_img.webp'
import img2 from '../assets/agurchu_img3.jpg'
import img3 from '../assets/agurchu_img4.jpg'
export default [
  {
    id: 1,
    type: 'reel',
    title: 'Latest Music Reel',
    description: 'Check out our newest music production reel on YouTube.',
    mediaUrl: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EC9LpULdC3Q?si=8FMs5jpQQ4mPpXW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
  },
  {
    id: 2,
    type: 'special',
    title: 'Summer Recording Deal',
    description: 'Get 20% off your next studio session!',
    mediaUrl: img1,
  },
  {
    id: 3,
    type: 'event',
    title: 'Live Studio Event',
    description: 'Join us for an exclusive live recording session.',
    mediaUrl: img2,
  },
  {
    id: 4,
    type: 'image',
    title: 'Studio Vibes',
    description: 'Behind-the-scenes in our state-of-the-art studio.',
    mediaUrl: img3,
  },
];