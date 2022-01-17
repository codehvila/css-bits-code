// index.js

const sectionHandlers = document.querySelectorAll(
  'input[name="sectionposition"]'
);

const parentHandlers = document.querySelectorAll(
  'input[name="parentposition"]'
);
const childHandlers = document.querySelectorAll('input[name="childposition"]');

const setSectionPosition = () => {
  console.log("section clicked ...");
  let selectedPosition = null;
  sectionHandlers.forEach((position) => {
    if (position.checked) {
      selectedPosition = position.value;
    }
  });
  console.log(selectedPosition);
  document.documentElement.style.setProperty("--section", selectedPosition);
};

const setParentPosition = () => {
  console.log("parent clicked ...");
  let selectedPosition = null;
  parentHandlers.forEach((position) => {
    if (position.checked) {
      selectedPosition = position.value;
    }
  });
  console.log(selectedPosition);
  document.documentElement.style.setProperty("--parent", selectedPosition);
};

const setChildPosition = () => {
  console.log("child clicked ...");
  let selectedPosition = null;
  childHandlers.forEach((position) => {
    if (position.checked) {
      selectedPosition = position.value;
    }
  });
  console.log(selectedPosition);
  document.documentElement.style.setProperty("--child", selectedPosition);
};

const addEventListeners = (handlers, e, func) => {
  handlers.forEach((handler) => {
    handler.addEventListener(e, func);
  });
};

// sectionHandlers.forEach((handler) => {
//   handler.addEventListener("click", setSectionPosition);
// });

// parentHandlers.forEach((handler) => {
//   handler.addEventListener("click", setParentPosition);
// });

// childHandlers.forEach((handler) => {
//   handler.addEventListener("click", setChildPosition);
// });

addEventListeners(sectionHandlers, "click", setSectionPosition);

addEventListeners(parentHandlers, "click", setParentPosition);

addEventListeners(childHandlers, "click", setChildPosition);
