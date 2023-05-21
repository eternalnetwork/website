interface Props {
    when: string,
    title: string,
    description: string,
    children?: any
    latest?: boolean,
    full?: boolean
}

export default function RoadmapStage(props: Props) {

    let latest = () => {
        if (props.latest == undefined) {
            return false
        } else {
            return props.latest?.valueOf()
        }
    };
    let LatestCompnent = <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span>

    return (
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg aria-hidden="true" className="w-3 h-3 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{props.title} {latest() ? LatestCompnent : ""}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-200">{props.when}</time>
            <p className="mb-4 text-base font-normal text-gray-200">{props.description}</p>
            {props.children}
        </li>
    )
}