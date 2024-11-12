// Drivers code
import { scrollToTop, scrollToBottom, scrollTo } from "app/View/Hooks/Scroll/drivers/__DOM_DRIVER__";

export function toTop(ref, animated = false)
{   
    scrollToTop(ref, animated);
}

export function toBottom(ref, animated = false)
{
    scrollToBottom(ref, animated);
}

export function to(element, mainElement, animated = false)
{   
    scrollTo(element, mainElement, animated);
}

export default {
    toTop,
    toBottom,
    to,
};