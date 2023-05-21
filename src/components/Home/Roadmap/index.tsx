import RoadmapStage from "./RoadmapStage";

export default function Roadmap() {
    return (
        <section id="roadmap" className='w-screen h-screen text-white bg-black px-32 py-32'>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <RoadmapStage
                    title={"The begining of something Eternal"}
                    description={"Development of the eternal website started"}
                    when={"May 4th, 2023"}
                />
                <RoadmapStage
                    when={""}
                    title={""}
                    description={""}
                />
            </ol>

        </section>
    )
}