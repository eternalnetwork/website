import { usePathname } from 'next/navigation';
import { Getter, Setter } from "./utils";
import styles from '../styles';

export default function useHighlighter(): [Getter<string>, Setter<string, string>] {
    let pathname = usePathname();
    let curr_path = pathname.replace('/', '').replaceAll('/', "-");

    let getter = (): string => {
        return curr_path
    }

    let set_highlight = (name: string): string => {
        let real_name = name.replace('/', '').replaceAll('/', "-");

        if (real_name === curr_path) {
            return styles.activeNavItem
        }

        return styles.inactiveNavItem

    }



    return [getter, set_highlight]
}