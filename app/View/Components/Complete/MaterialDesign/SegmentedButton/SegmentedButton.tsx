import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import SegmentedButtonInterface from 'app/View/Components/Complete/MaterialDesign/SegmentedButton/SegmentedButtonInterface';

// Complete components
import CommonButton from 'app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton';

function SegmentedButton ({ buttons, classes = {root: ''} }: SegmentedButtonInterface) {

    return (
        <Container classes={`inline-flex flex-row rounded-3xl ${classes.root}`}>
          {buttons.map(({ title, icon, key, classes: {root: rootClass, ...classes} = {root: ''}, ...props }, i) => (
            <CommonButton 
              key={key}
              title={title}
              classes={{
                root: `
                  !m-0 !rounded-none 
                  ${i === 0 ? '!rounded-l-full' : ''} 
                  ${buttons.length === i + 1 ? 'border-r-1 !rounded-r-full' : 'border-r-0'}
                  ${rootClass || ''}
                `,
                ...(classes || {}),
              }}
              type="outlined"
              icon={icon}
              {...props}
            />
          ))}
        </Container>
    );
}

export default SegmentedButton;