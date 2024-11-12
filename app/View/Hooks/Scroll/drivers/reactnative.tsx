export function scrollToBottom(ref, animated) 
{
  setTimeout(() => {
    ref.current.scrollToEnd({
      animated,
    });
  }, 50);
}

export function scrollToTop(ref, animated) 
{
  ref.current.scrollTo({
    y: 0,
    animated,
  });
}

export function scrollTo(element, mainElement, animated) 
{
  element.measureLayout(
    mainElement,
    (x, y) => {
      mainElement.scrollTo({ y, animated });
    },
    (error) => console.error(error)
  );
}

export default {
  scrollToBottom,
  scrollToTop,
  scrollTo,
};
