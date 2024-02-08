const date = new Date();

export default {
  install: (app, options) => {
    console.log(`time:${date.getMilliseconds()}`);

    app.directive("current-year", {
      beforeMount: (el, binding) => {
        el.innerText = date.getFullYear();
      },
      updated: (el, binding) => {
        el.innerText = date.getFullYear();
      },
    });
  },
};
