// Tools
import React from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// -- app
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";

// Hooks
import useRoute from "app/View/Hooks/Navigation/useRoute";

function EmpryDataStep() {
    const route = useRoute();

    return (
        <Container classes="overflow-y-auto pt-5 h-full pb-2 px-5">
            <Space classes="h-28" />
            <Title
                classes="text-center text-4xl pb-3"
            >
                😜😮😆
            </Title>
            <Title
                classes="text-center text-4xl w-64 text-white font-bold m-auto"
            >
                There isn't receipts there.
            </Title>
            <Space classes="h-5" />
            <CommonButton
                title="Add receipt"
                type="filled"
                onClick={() => {
                    route.move('/');
                }}
                classes={{
                    root: `
                        rounded-full border border border-black 
                        h-14 w-30 flex-col !flex-row bg-white
                    `,
                    title: '!text-black text-center text-xl',
                }}
            />
        </Container>
    );
}

export default EmpryDataStep;