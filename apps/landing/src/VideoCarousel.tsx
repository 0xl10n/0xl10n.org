export interface VideoData {
  id: string;
  title: string;
  stats: {
    wordsTranslated: number;
    votes: number;
    translators: number;
    languages: number;
  };
}

export interface VideoCarouselProps {
  videos: VideoData[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  return (
    <>
      <div className="carousel carousel-center h-80 w-full space-x-2 rounded-box p-2">
        {videos.map((video: VideoData, i: number) => (
          <a
            key={video.id}
            id={`slide${i + 1}`}
            className="carousel-item p-2"
            href={`https://www.youtube.com/watch?v=${video.id}`}
          >
            <div className="relative">
              <img
                className="h-full w-full rounded-box bg-black pt-6"
                src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                alt={video.title}
              />
              <div className="absolute left-5 top-1 w-full pr-10 text-left text-white drop-shadow">
                <p className="p-0">{video.title}</p>
              </div>
              {/* <div className="absolute bottom-1 w-full text-white text-center drop-shadow">
                <p>{video.stats.wordsTranslated} words translated</p>
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
