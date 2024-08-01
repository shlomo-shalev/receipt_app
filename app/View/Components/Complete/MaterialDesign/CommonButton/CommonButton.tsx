import React from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import CommonButtonInterface from 'app/View/Components/Complete/MaterialDesign/CommonButton/CommonButtonInterface';

const styleForAnotherButtonsTypes: {title: object, icon: object, root: object} = {
    root: {
        elevated: 'shadow-sm shadow-gray-500 bg-white',
        filled: 'bg-blue-600',
        tonal: 'bg-blue-200',
        outlined: 'bg-white border border-1 border-gray-600',
        text: '',
    } as object,
    title: {
        elevated: '!text-black',
        filled: 'text-white',
        tonal: '!text-black',
        outlined: '!text-black',
        text: '!text-black',
    } as object,
    icon: {
        elevated: '!fill-black',
        filled: 'fill-white',
        tonal: '!fill-black',
        outlined: '!fill-black',
        text: '!fill-black',
    } as object,
};

function CommonButton ({ 
    title, type = 'elevated', Component = null, onClick = null, classes = {}, 
    titleOnlyInCheck = null, checked = false, icon = null, disabled = false
}: CommonButtonInterface) {

    const finalClasses = {
        root: classes.root || '', 
        title: classes.title || '', 
        icon: classes.icon || '',
    };

    const HTML = (
        <Container 
        blabla={true}
            classes={`
                cursor-pointer py-2 px-4 inline-flex flex-row !box-border items-center 
                justify-center rounded-3xl m-auto 
                ${styleForAnotherButtonsTypes.root[type]} ${finalClasses.root}
                ${disabled ? 'opacity-50' : ''}
            `}
            onClick={!disabled ? onClick : null}
        >
            {!!icon && (
                <Container
                    classes={`w-5 h-5 flex items-center justify-center ${finalClasses.icon}`}
                >
                    {icon({classes: styleForAnotherButtonsTypes.icon[type], checked})}
                </Container>
            )}
            {(titleOnlyInCheck === null || checked) && (
                <Title 
                    classes={`
                        select-none !text-sm text-white font-semibold px-2 
                        ${styleForAnotherButtonsTypes.title[type]} ${finalClasses.title}
                    `}
                >
                    {title}
                </Title>
            )}
        </Container>
    );

    if (Component) {
        return (
            <Component.View 
                {...(Component.props || {})}
            >
                {HTML}
            </Component.View>
        );
    }

    return HTML;
}

export default CommonButton;