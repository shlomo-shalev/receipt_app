import React from "react";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';
import Title from 'app/View/Components/Bases/Components/Title/__DOM_DRIVER__';
import Svg from 'app/View/Components/Bases/Components/Svg/__DOM_DRIVER__';
import SvgPath from 'app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__';

function TopApp () {
    return (
        <Container classes='p-2.5'>
            <Container 
                classes='bg-blue-600 flex flex-row items-center justify-between w-full rounded-3xl relative'
            >
                <Container
                    classes='w-5 text-white ml-2 p-2.5'
                >
                    <Svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960" 
                        classes="fill-white w-6 h-6"
                    >
                        <SvgPath 
                            d="M105 841v-91h750v91H105Zm0-219v-91h750v91H105Zm0-220v-92h750v92H105Z"
                        />
                    </Svg>
                </Container>
                <Container>
                    <Title
                        classes='text-white'
                        type="h1"
                    >
                        Title Large
                    </Title>
                </Container>
                <Container
                    classes='w-5 text-white mr-3 p-2.5 right-5'
                >
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        classes="fill-white w-6 h-6"
                        viewBox="0 96 960 960"
                    >
                        <SvgPath d="M228 790q60-38 121.045-57 61.046-19 131-19Q550 714 612.5 734 675 754 734 790q41-54 58.5-104.457Q810 635.086 810 576q0-140.247-94.826-235.123Q620.349 246 480.174 246 340 246 245 340.877 150 435.753 150 576q0 60 17.527 109.717T228 790Zm251.854-180q-59.011 0-99.433-40.646-40.421-40.645-40.421-99Q340 412 380.567 371t99.579-41q59.011 0 99.433 41.146Q620 412.291 620 470.646 620 529 579.433 569.5T479.854 610Zm-.42 387q-85.985 0-162.894-32.756-76.909-32.757-134.821-91.053-57.911-58.297-90.315-133.975Q59 663.538 59 575.61q0-86.929 33.21-163.395 33.211-76.467 90.965-134.078 57.754-57.611 133.536-90.874Q392.493 154 480.5 154q87.007 0 163.26 33.74 76.253 33.74 133.538 91.08 57.286 57.34 90.994 133.745Q902 488.971 902 575.734q0 87.922-33.263 163.629-33.263 75.708-90.943 133.462-57.68 57.754-134.353 90.964Q566.768 997 479.434 997Z" />
                    </Svg>
                </Container>
            </Container>
        </Container>
    );
}

export default TopApp;