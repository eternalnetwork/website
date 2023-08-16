type Props = {
    color: string,
    gridiant: boolean
    children?: any
}


export default function ChainBox(props: Props) {
    let component = props.gridiant ? <div style={{ width: 309, height: 249, background: 'linear-gradient(91deg, #6B21A8 0%, rgba(151.51, 24.10, 87, 0.50) 88%, rgba(157, 23, 77, 0) 100%)' }} /> : <div style={{ width: 310, height: 250, background: props.color }}>
        {props.children}
    </div>

    return component
}