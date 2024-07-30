export function scrollToBottom(ref, animated) 
{
  ref.current.scrollToEnd({
    animated,
  });
}

export function scrollToTop(ref, animated) 
{
  ref.current.scrollTo({
    y: 0,
    animated,
  });
}

export default {
  scrollToBottom,
  scrollToTop,
};
