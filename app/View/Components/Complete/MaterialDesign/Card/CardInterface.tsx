interface CardInterface {
    classes?: {
        root: string,
    },
    type?: 'elevated' | 'filled' | 'outlined',
    children: Array<JSX.Element> | JSX.Element,
}

export default CardInterface;