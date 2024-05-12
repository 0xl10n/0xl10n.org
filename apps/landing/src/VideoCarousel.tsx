import { useState } from 'react';

export interface VideoData {
  id: string;
  title: string;
  stats: {
    wordsTranslated: number;
    votes: number;
    translators: number;
    languages: number;
  }
}

export interface VideoCarouselProps {
  videos: VideoData[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [current, setCurrent] = useState(1);

  const nextSlide = () => {
    setCurrent(current === videos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? videos.length - 1 : current - 1);
  };

  return (
    <>
      <div className="carousel carousel-center w-full h-80 p-2 space-x-2 rounded-box">
        {videos.map((video: VideoData, i: number) => (
          <div key={video.id} id={`slide${i + 1}`} className="carousel-item p-2 relative">
            <a href={ `https://www.youtube.com/watch?v=${i}` }><img className="w-full h-full rounded-box" src={ `https://img.youtube.com/vi/${video.id}/sddefault.jpg` } alt={ video.title } />
            </a>
            <div className="absolute top-5 left-5 w-full text-white text-left drop-shadow">
              <p>{ video.title }</p>
            </div>
            <div className="absolute bottom-5 w-full text-white text-center drop-shadow">
              <p>{ video.stats.wordsTranslated }</p>
              <p>Words translated</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
