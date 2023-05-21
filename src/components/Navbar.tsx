import Image from 'next/image'
import { usePathname } from 'next/navigation';


function useHighlighter(): (path: string) => string {
    let pathname = usePathname();
    let curr_path = pathname.replace('/', '').replaceAll('/', "-");

    let getter = (): string => {
        return curr_path
    }

    let set_highlight = (name: string): string => {
        let real_name = name.replace('/', '').replaceAll('/', "-");

        if (real_name === curr_path) {
            return `block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 md:dark:text-purple-500`
        }

        return `block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 hover:bg-gray-200 hover:text-purple-700`

    }



    return set_highlight
}

export default function Navar() {

    let highlight = useHighlighter();

    return (

        <nav className="bg-black border-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <Image
                        src="/logo.png" alt="Eternal logo"
                        width={32}
                        height={33}
                        priority
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Eternal</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black border-gray-700">
                        <li>
                            <a href="/" className={highlight('/')} aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/blog" className={highlight('/blog')}>About</a>
                        </li>
                        <li>
                            <a href="https://names.eternal.network" className={highlight('/names')}>Name Service</a>
                        </li>
                        <li>
                            <a href="/roadmap" className={highlight('/roadmap')}>Full Roadmap</a>
                        </li>
                        <li>
                            <a href="/whitepaper" className={highlight('/whitepaper')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}