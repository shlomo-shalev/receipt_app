interface CommonButtonInterface {
    icon?: Function,
    title: String | JSX.Element,
    type?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text',
    key?: string | number,
    onClick?: Function,
    checked?: boolean,
    disabled?: boolean,
    titleOnlyInCheck?: null|undefined|true,
    classes?: {
        root?: string,
        title?: string,
        icon?: string,
    },
    Component?: {View: Function, props?: Object}|null,
}

export default CommonButtonInterface;