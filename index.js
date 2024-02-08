const date = new Date();

export default {
  install: (app, options) => {
    console.log(`time: ${Date.now()}`);

    app.directive("current-year", {
      beforeMount: (el, binding) => {
        el.innerText = date.getFullYear();
      },
      updated: (el, binding) => {
        el.innerText = date.getFullYear();
      },
    });
    app.directive("current-month", {
      beforeMount: (el, binding) => {
        el.innerText = date.getMonth();
      },
      updated: (el, binding) => {
        el.innerText = date.getMonth();
      },
    });
    app.directive("current-day", {
      beforeMount: (el, binding) => {
        el.innerText = date.getDate();
      },
      updated: (el, binding) => {
        el.innerText = date.getDate();
      },
    });
    app.directive("current-hour", {
      beforeMount: (el, binding) => {
        el.innerText = date.getHours();
      },
      updated: (el, binding) => {
        el.innerText = date.getHours();
      },
    });
    app.directive("current-minute", {
      beforeMount: (el, binding) => {
        el.innerText = date.getMinutes();
      },
      updated: (el, binding) => {
        el.innerText = date.getMinutes();
      },
    });
  },
};
