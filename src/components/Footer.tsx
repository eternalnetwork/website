import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer className="bg-black rounded-lg shadow m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0">
                            <Image
                                src="/logo.png" alt="Eternal logo"
                                width={32}
                                height={33}
                                priority
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Eternal</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Full Roadmap</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Whitepaper</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://github.com/eternalnetwork" className="hover:underline">Eternal Network™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}