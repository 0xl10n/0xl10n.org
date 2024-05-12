import VideoCarousel from "../VideoCarousel";
import videos from "../video.json";

export const VideoSection = () => {
  return (
    <section className="mx-auto flex flex-col justify-center bg-neutral p-5 text-center">
      <h2 className="text-2xl">Translated Content</h2>
      <div className="text-base">
        Download Chrome Extension and browser translated videos
      </div>
      <div className="flex justify-center p-10 text-center">
        <div>
          <VideoCarousel videos={videos} />
        </div>
      </div>
    </section>
  );
};
