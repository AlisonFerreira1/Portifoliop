const div = document.querySelector("div");
const elementos = Array.from(div.childNodes).filter(
  (node) => node.nodeType === Node.ELEMENT_NODE
);
