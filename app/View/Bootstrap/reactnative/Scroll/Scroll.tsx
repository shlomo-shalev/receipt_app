// Tools
import React, { forwardRef } from "react";
import { ScrollView } from "react-native";

function Scroll({ children, classes }, ref) {
  const isX = classes.includes('overflow-x-scroll') || classes.includes('overflow-x-auto');

  return (
    <ScrollView
      horizontal={isX}
      style={{ 
        flexGrow: 0,
        height: isX ? 'auto' : '100%',
      }}
      showsHorizontalScrollIndicator={!classes.includes('scrollbar-none')}
      showsVerticalScrollIndicator={!classes.includes('scrollbar-none')}
      scrollEnabled={true}
      ref={ref}
      persistentScrollbar={true}
    >
      {children}
    </ScrollView>
  );
}

export default forwardRef(Scroll);