interface IconButtonInterface {
    icon: Function,
    onClick: Function,
    type?: 'simple' | 'full' | 'border',
    checked?: boolean,
    disabled?: boolean,
    classes?: {
        root: string,
    },
}

export default IconButtonInterface;