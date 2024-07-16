interface IconButtonInterface {
    icon: Function,
    onClick: Function,
    type?: 'simple' | 'full' | 'border',
    checked?: boolean,
    classes?: {
        root: string,
    },
}

export default IconButtonInterface;