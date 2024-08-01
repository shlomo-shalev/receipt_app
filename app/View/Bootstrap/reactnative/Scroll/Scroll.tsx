// Tools
import React, { forwardRef } from "react";
import { ScrollView } from "react-native";

function Scroll({ children, classes }, ref) {
    return (
        <ScrollView
          horizontal={(
            classes.includes('overflow-x-scroll')
            || classes.includes('overflow-x-auto')
          )}
          style={{ flexGrow: 0 }}
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