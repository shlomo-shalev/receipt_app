// Tools
import { View } from 'react-native';
import React, { forwardRef } from 'react';
import { State, TapGestureHandler } from 'react-native-gesture-handler';

// Base Components
import Title from 'app/View/Components/Bases/Components/Title/__DOM_DRIVER__';

// Bootstrap components
import Scroll from 'app/View/Bootstrap/reactnative/Scroll/Scroll';

const Container = (
    {children = undefined, classes = '', style = {}, onClick = null, ...props}, 
    ref
  ) => {
    const isString = typeof children === 'string';

    const classesToScroll = [
      'overflow-x-scroll', 'overflow-y-scroll',
      'overflow-x-auto', 'overflow-y-auto',
      'overflow-scroll', 'overflow-auto',

    ];
    const isNeedScroll = classesToScroll
      .filter(oneClass => classes.includes(oneClass)).length > 0;

    function getChildren() {
      if (!isString) return children;
      return (
        <Title 
          // key={id}
        >
            {children}
        </Title>
      );
    }    

    const handleSingleTap = ({ nativeEvent }) => {      
      if (nativeEvent.state === State.ACTIVE) {
        onClick();
      }
    };

    let jsx = (
        <View 
          {...props}
          style={{...style}} 
          // key={id}
          ref={!isNeedScroll ? ref : null}
          pointerEvents={classes.includes('pointer-events-none') ? 'box-none' : 'auto'}
          className={`box-content ${classes}`}
        >
          {getChildren()} 
        </View>
    );

    if (onClick) {      
      jsx = (
        <TapGestureHandler
          onHandlerStateChange={(event) => handleSingleTap(event)}
        >
          {jsx}
        </TapGestureHandler>
      );
    }
    
    if (isNeedScroll) {
      jsx = (
        <Scroll
          classes={classes}
          ref={ref}
        >
          {jsx}
        </Scroll>
      );
    }
    return jsx;
};

export default forwardRef(Container);