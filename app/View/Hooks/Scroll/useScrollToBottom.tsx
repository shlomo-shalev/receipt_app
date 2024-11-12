// Tools
import { useEffect, useRef } from "react";

// Drivers code
import { scrollToBottom } from "app/View/Hooks/Scroll/drivers/__DOM_DRIVER__";

function useScrollToBottom(animated = false)
{   
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            scrollToBottom(ref, animated);
        }
    }, []);

    return ref;
}

export default useScrollToBottom;