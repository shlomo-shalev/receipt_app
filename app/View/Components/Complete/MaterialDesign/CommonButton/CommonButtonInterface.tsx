interface CommonButtonInterface {
    icon?: Function,
    title: String | JSX.Element,
    type?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text',
    key?: string | number,
    onClick?: Function,
    checked?: boolean,
    titleOnlyInCheck?: null|undefined|true,
    classes?: {
        root?: string,
        title?: string,
        icon?: string,
    },
}

export default CommonButtonInterface;