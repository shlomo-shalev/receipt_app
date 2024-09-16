// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

function ReceiptBorder({ children, classes = '', elementRef = null }) {
    return (
        <Container classes="!box-border !mx-7 pt-5 flex-1 h-full">
            <Container classes="relative h-full">
                <Container
                    classes={`
                        border absolute left-0 bottom-0 top-0 right-0 border-black 
                        rounded-t-3xl border-b-0
                    `}
                >
                    <Container
                        classes="
                            border-8 absolute left-0 bottom-0 top-0 right-0 border-white 
                            rounded-t-3xl p-5 border-b-0 flex items-center flex-col
                        "
                    >
                        <Container
                            classes={`
                                border absolute left-0 bottom-0 top-0 right-0 border-black 
                                rounded-t-2xl border-b-0 flex items-center flex-col overflow-hidden
                            `}
                        >
                            <Container 
                                classes={`
                                    m-auto w-full flex flex-col h-full
                                    ${classes}
                                `}
                                ref={elementRef}
                            >
                                {children}
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}

export default ReceiptBorder;