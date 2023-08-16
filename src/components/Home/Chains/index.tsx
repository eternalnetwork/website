import ChainBoxComponent from "./ChainBoxComponent";
import { NativeChainDescription, VoltageChainDescription, BlazeRoadmapDescription } from '~/lib/chains'
export default function ChainsSection() {
    return <section id="chains" className='h-screen text-white bg-black px-32 py-32'>
        <div style={{ textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Our Blockchains</div>
        <div style={{ width: 1059, height: 249, position: 'relative' }}>
            <ChainBoxComponent
                chain="voltage"
                chainDescription={VoltageChainDescription}
                boxPos="left"
                color="#5B21B6"
            />
            <ChainBoxComponent
                chain="native"
                chainDescription={NativeChainDescription}
                boxPos="center"
                color="#5B21B6"
                gradient={true}
            />
            <ChainBoxComponent
                chain="blaze"
                chainDescription={BlazeRoadmapDescription}
                boxPos="right"
                color="#9D174D"
            />
        </div>
    </section>
}