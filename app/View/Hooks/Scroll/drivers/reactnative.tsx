export function scrollToBottom(ref, {waitTime, animated}) 
{
  setTimeout(() => {
    ref.current.scrollToEnd({
      animated,
    });
  }, waitTime);
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
