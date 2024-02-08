const date = new Date();

export default {
  install: (app, options) => {
    console.log(`time:${date.getMilliseconds()}`);
  },
};
