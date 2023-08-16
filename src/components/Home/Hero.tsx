
export default function Hero() {
    return (
        <section id="home" className='h-screen text-white bg-black px-32 py-32'>
            <div className='flex flex-row'>
                <div className='basis-1/2'>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                            Web3 and Crypto <br className="sm:block hidden" />{" "}
                            <span className="text-gradient">For</span>{" "}
                            <span className="bg-gradient-to-r to-pink-500 from-violet-500 text-white">Everybody</span>
                        </h1>
                    </div>

                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                        Eternal is a project that plans to bring Web3, DeFi, DApps, and
                        blockchain gaming to the masses. We want to allow everyone and
                        their grandmother be able to access web3 with ease.
                    </p>
                </div>
                <div className='basis-1/2'>
                    <div className="w-36 h-36 rounded-full bg-gradient-to-r to-purple-800 from-violet-700"> </div>
                </div>
            </div>
        </section>
    )
}