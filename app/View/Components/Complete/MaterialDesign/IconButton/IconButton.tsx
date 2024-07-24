import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import IconButtonInterface from 'app/View/Components/Complete/MaterialDesign/IconButton/IconButtonInterface';

const styleForAnotherButtonsTypes: {simple: object, full: object, fullSimple: object, border: object, borderFull: object} = {
    simple: {
        root: '',
        icon: '!fill-blue-600',
    } as object,
    full: {
        root: 'bg-blue-600',
        icon: '!fill-white',
    } as object,
    border: {
        root: 'border border-1 border-blue-600',
        icon: '!fill-blue-600',
    } as object,

    fullSimple: {
        root: 'bg-blue-600',
        icon: '!fill-white',
    } as object,
    borderFull: {
        root: 'bg-blue-600 border border-1 border-blue-600',
        icon: '!fill-white',
    } as object,
};

function IconButton ({ 
    type = 'simple', checked = false, icon, classes = {root: ''}, onClick = () => {},
    disabled = false
}: IconButtonInterface) {
    const moreType = type === 'full' && checked 
        ? 'Simple' 
        : (type === 'border' && checked ? 'Full' : '');

    return (
        <Container 
            classes={`
                cursor-pointer py-3 px-3 inline-flex flex-row items-center 
                justify-center rounded-3xl m-auto 
                ${styleForAnotherButtonsTypes[`${type}${moreType}`]['root']} ${classes.root}
                ${disabled ? 'opacity-50' : ''}
            `}
            onClick={!disabled ? onClick : null}
        >
            {!!icon && (
                <Container
                    classes="min-w-5 min-h-5 flex items-center justify-center"
                >
                    {icon({
                        classes: styleForAnotherButtonsTypes[`${type}${moreType}`]['icon'], 
                        checked
                    })}
                </Container>
            )}
        </Container>
    );
}

export default IconButton;