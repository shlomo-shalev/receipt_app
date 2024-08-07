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

export function scrollTo(element, mainElement, animated) 
{
  const containerRect = mainElement.getBoundingClientRect();
  const targetRect = element.getBoundingClientRect();

  const offsetTop = targetRect.top - containerRect.top + mainElement.scrollTop;

  mainElement.scrollTo({
    top: offsetTop,
    behavior: animated ? 'smooth' : 'auto',
  });
}

export default {
  scrollToBottom,
  scrollToTop,
  scrollTo,
};
