import React from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
import BadgeFloatNumber from 'app/View/Components/Complete/MaterialDesign/Badge/BadgeFloatNumber/BadgeFloatNumber';

// Interfaces
import BadgeInterface from 'app/View/Components/Complete/MaterialDesign/Badge/BadgeInterface';

function Badge ({ Icon, title = '', number = null }: BadgeInterface) {

    title = title.slice(0, 8);

    return (
        <Container 
            classes="inline-flex flex-col items-center py-1 px-2 justify-center m-auto relative w-16"
        >
            <Container classes="relative">
                <Container
                    classes="w-7 h-7"
                >
                    {Icon}
                </Container>
                <BadgeFloatNumber 
                    number={number} 
                />
            </Container>
            {title?.length > 0 && (
                <Title 
                    classes="!text-sm text-center"
                >
                    {title}
                </Title>
            )}
        </Container>
    );
}

export default Badge;