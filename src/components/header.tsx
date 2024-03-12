import { FC, type ReactNode } from "react";

type headerImage = {
    image: {
        src: string;
        alt: string; 
    };
    children: ReactNode
}

const Header: FC<headerImage> = ({image, children}) => {
    return <header>
        <img {...image} />
        {children}
    </header>
}

export default Header;