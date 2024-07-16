import { ReactNode } from "react";

interface TitleInterface {
    children?: ReactNode,
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    style?: Object,
    classes?: String,
}

export default TitleInterface;