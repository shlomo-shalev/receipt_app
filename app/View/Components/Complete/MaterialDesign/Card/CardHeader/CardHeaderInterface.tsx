interface CardHeaderInterface {
    classes?: {
        root: string,
    },
    onClick?: Function,
    main: Array<JSX.Element> | JSX.Element,
    actions?: Array<JSX.Element> | JSX.Element, 
}

export default CardHeaderInterface;