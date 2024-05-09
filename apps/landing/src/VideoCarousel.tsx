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
  return (
    <>
      <div className="carousel carousel-center w-full h-80 p-2 space-x-2 rounded-box">
        {videos.map((video: VideoData, i: number) => (
          <a key={video.id} id={`slide${i + 1}`} className="carousel-item p-2" href={ `https://www.youtube.com/watch?v=${video.id}` }>
            <div className="relative">
              <img className="pt-6 w-full h-full rounded-box bg-black" src={ `https://img.youtube.com/vi/${video.id}/sddefault.jpg` } alt={ video.title } />
              <div className="absolute top-1 left-5 w-full pr-10 text-white text-left drop-shadow">
                <p className="p-0">{ video.title }</p>
              </div>
              <div className="absolute bottom-1 w-full text-white text-center drop-shadow">
                <p>{ video.stats.wordsTranslated } words translated</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
