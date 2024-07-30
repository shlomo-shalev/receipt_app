export function scrollToBottom(ref, animated) 
{
  ref.current.scrollTo({
    top: ref.current.scrollHeight,
    behavior: animated ? 'smooth' : 'auto',
  });
}

export function scrollToTop(ref, animated) 
{
  ref.current.scrollTo({
    top: 0,
    behavior: animated ? 'smooth' : 'auto',
  });
}

export default {
  scrollToBottom,
  scrollToTop,
};
