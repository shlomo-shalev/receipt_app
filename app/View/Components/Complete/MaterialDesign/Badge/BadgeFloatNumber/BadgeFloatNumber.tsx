import React from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import BadgeFloatNumberInterface from 'app/View/Components/Complete/MaterialDesign/Badge/BadgeFloatNumber/BadgeFloatNumberInterface';

const styleNumberForAllSituation: object = {
    small: 'p-1 h-0 left-6 bottom-6',
    menium: 'py-0.5 px-2 left-3 bottom-3',
    biggest: 'py-0.5 px-1.5 left-3 bottom-3',
};

function BadgeFloatNumber ({ number }: BadgeFloatNumberInterface) {
    const isTooBig: boolean = number > 999;
    const isTooSmall: boolean = `${number}` === '0';
    
    const type: string = isTooSmall ? 'small' : (isTooBig ? 'biggest' : 'menium');

    let finalNumber: string = number > 999 ? '999' : `${number}`;
    finalNumber = isTooSmall ? '' : `${finalNumber}`;

    const numberCharacter: string = isTooBig ? '+' : '';    

    if (number === null || number < 0) return null;

    return (
        <Container 
            classes={`bg-red-600 text-white !rounded-full absolute ${styleNumberForAllSituation[type]}`}
        >
            <Title 
                classes="!text-xs text-white font-menium"
            >
                {finalNumber}{numberCharacter}
            </Title>
        </Container>
    );
}

export default BadgeFloatNumber;