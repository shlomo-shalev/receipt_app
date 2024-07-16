import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import FABInterface from 'app/View/Components/Complete/MaterialDesign/FAB/FABInterface';

// Complete components
import IconButton from 'app/View/Components/Complete/MaterialDesign/IconButton/IconButton';

function FAB ({ icon, type }: FABInterface) {

    return (
        <Container>
            <IconButton 
              type={type}
              icon={({classes}) => (
                <Svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    classes={`w-4 h-4 ${classes}`}
                >
                    <SvgPath
                        d="
                          M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 
                          32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z
                        "
                    />
                </Svg>
              )}
            />
        </Container>
    );
}

export default FAB;