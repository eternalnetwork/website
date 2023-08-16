import ChainBox from "./ChainBox"

type BoxPos = "left" | "center" | "right"
const Chain = {
    native: 'Native Chain',
    voltage: 'Voltage Chain',
    blaze: 'Blaze Chain',
} as const;

type Props = {
    chain: keyof typeof Chain
    chainDescription: string,
    // ------ //
    color: string,
    boxPos: BoxPos,
    gradient?: boolean
}


export default function ChainBoxComponent(props: Props) {

    let gradient = false;
    if (props.gradient !== undefined) {
        gradient = props.gradient
    }

    let styles = ""

    switch (props.boxPos) {
        case "left":
            styles = "w-80 h-64 left-0 top-0 absolute"
            break;

        case "center":
            styles = "w-80 h-64 left-[376px] top-0 absolute"
            break;

        case "right":
            styles = "w-80 h-64 left-[750px] top-0 absolute"
            break;

        default:
            break;
    }

    return (
        <div className={styles}>
            <div className="left-[59px] top-[15px] absolute text-center text-white text-3xl font-normal">{Chain[props.chain]}</div>
            <div className="w-72 h-28 left-[9px] top-[72px] absolute text-center text-white text-base font-normal">{props.chainDescription}</div>
            <ChainBox gridiant={gradient} color={props.color} />
        </div>
    )

}