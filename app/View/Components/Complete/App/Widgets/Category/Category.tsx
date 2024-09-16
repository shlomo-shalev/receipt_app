// Tools
import React, { useState } from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// -- Material design
// --- app
import Card from "app/View/Components/Complete/MaterialDesign/Card/Card";
import Divider from "app/View/Components/Complete/MaterialDesign/Divider/Divider";
import CardHeader from "app/View/Components/Complete/MaterialDesign/Card/CardHeader/CardHeader";
// --- Icons
import ActionIcon from "app/View/Components/Complete/MaterialDesign/Icons/Action";
import DownArrowIcon from "app/View/Components/Complete/MaterialDesign/Icons/DownArrow";
import UpArrowIcon from "app/View/Components/Complete/MaterialDesign/Icons/UpArrow";

// Apis
import Date from "app/View/Hooks/Date/Date";

// Hooks
import useRoute from "app/View/Hooks/Navigation/useRoute";

function Category({ title, items }) {
    const route = useRoute();
    const [open, setOpen] = useState(true);
    
    const itemsJSX = items.map((item, i) => {
        const date = new Date(item.created_at);

        return (
            <Container key={i}>
                <Divider />
                <Container 
                    classes="
                        bg-gray-200 p-4 py-0 flex items-center 
                        justify-between flex-row pl-2 pr-0
                    "
                >
                    <Container classes="pr-1">
                        <Title classes="text-xs">
                            {date.toSimpleFormat({ time: false })}
                        </Title>
                        <Title classes="text-xs text-center">
                            {date.toTime({})}
                        </Title>
                    </Container>
                    <Container 
                        classes="
                            pl-3 flex flex-col font-left flex-1
                            overflow-hidden 
                        " 
                    >
                        <Title
                            classes="!text-sm !font-bold"
                        >
                            ${item.price}
                        </Title>
                        <Title 
                            classes="!text-xs max-h-8"
                        >
                            {item.company_name}
                        </Title>
                    </Container>
                    <Container 
                        classes="!p-3 !py-4"
                        onClick={() => {
                            route.move(`/transaction/${item.id}`);
                        }}
                    >
                        <ActionIcon classes="h-4" />
                    </Container>
                </Container>
            </Container>
        );
    });

    return (
        <Container 
            classes="!m-0 px-5 flex-1 relative"
        >
            <Card classes={{root: '!p-0 border border-black'}}>
                <CardHeader
                    classes={{
                        root: '!py-0',
                    }}
                    main={(
                        <Container classes="m-auto ml-4">
                            <Title 
                                type="h2" 
                                classes="!text-lg !font-bold"
                            >
                                {title}
                            </Title>
                        </Container>
                    )}
                    actions={(
                        <Container classes="m-auto">
                            <Container classes="!p-3 !py-5">
                                <ActionIcon classes="!h-4" />
                            </Container>
                        </Container>
                    )}
                />
                <Divider classes="my-0" />
                <CardHeader
                    classes={{root: '!p-0'}}
                    onClick={() => {
                        setOpen(!open);
                    }}
                    main={(
                        <Container classes="w-full m-auto ml-4 select-none">
                            <Title 
                                type="h3" 
                                classes="!text-sm"
                            >
                                Details by month
                            </Title>
                        </Container>
                    )}
                    actions={(
                        <Container classes="m-auto">
                            <Container 
                                classes="!p-3 !py-4"
                            >
                                {open 
                                    ? <DownArrowIcon classes="!h-3" /> 
                                    : <DownArrowIcon classes="!h-3" /> // TODO - replace icon
                                }
                            </Container>
                        </Container>
                    )}
                />
                {open && ( // TODO - Create empty data alert
                    <>
                        <Divider classes="border-t-4" />
                        {itemsJSX}
                        {items.length <= 0 && (
                            <Container classes="bg-gray-300 py-3">
                                <Title classes="text-center text-sm">
                                    There is no items here...
                                </Title>
                            </Container>
                        )}
                    </>
                )}
                {/* <CardHeader
                    classes={{root: '!px-4 !py-3 !pb-4'}}
                    main={(
                        <Container classes="w-full flex flex-row">
                            <Container classes="w-20" />
                            <Title 
                                type="h3" 
                                classes="!text-sm text-left w-20 !font-bold"
                            >
                                Payed
                            </Title>
                            <Title 
                                type="h3" 
                                classes="!text-sm text-center !font-bold"
                            >
                                Will Payed
                            </Title>
                        </Container>
                    )}
                    actions={null}
                /> */}
                {/* {[...(new Array(4))].map((v, i) => (
                    <Container key={i}>
                        <Divider />
                        <CardHeader
                            classes={{root: '!px-4 !py-3 !pb-4'}}
                            main={(
                                <Container classes="w-full flex flex-row">
                                    <Title 
                                        type="h3" 
                                        classes="!text-sm text-left w-20"
                                    >
                                        Week {i + 1}
                                    </Title>
                                    <Title 
                                        type="h3" 
                                        classes="!text-sm text-left w-20"
                                    >
                                        ₪50.14
                                    </Title>
                                    <Title 
                                        type="h3" 
                                        classes="!text-sm text-center"
                                    >
                                        ₪300.00
                                    </Title>
                                </Container>
                            )}
                            actions={(
                                <Container classes="m-auto">
                                    <Container>
                                        <DownArrowIcon classes="!h-3" />
                                    </Container>
                                </Container>
                            )}
                        />
                        {i == 0 && dd}
                    </Container>
                ))} */}
            </Card>
        </Container>
    );
}

export default Category;