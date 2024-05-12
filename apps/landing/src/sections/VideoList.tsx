import VideoCarousel from "../VideoCarousel";
import videos from "../video.json";

export const VideoSection = () => {

    return (
        <section className="flex flex-col p-5 justify-center mx-auto text-center bg-neutral">

            <h2 className="text-2xl">Translated Content</h2>
            <div className="text-base">Download Chrome Extension and browser translated videos</div>
            <div className="flex justify-center text-center p-10">

                <div>
                    <VideoCarousel videos={videos} />
                </div>
            </div>
        </section>
    )
}