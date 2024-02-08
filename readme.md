# vue-timestamp-loader

vue-timestamp-loader is a easier way to seek the date in your vue app. It requires less lines than actual Date() and is Vue 3 friendly.

## Install

```bash
npm install vue-timestamp-loader
```

Add the following onto the `main.js` file:

```javascript
// imports...
import TimestampLoader from "vue-timestamp-loader";

// ...
// add the line below
app.use(TimestampLoader);

app.mount("#app");
```

## Use

It prints the milliseconds from Date().now on the console from the start. You can get access to 5 directives to add into your Vue app (`v-current-year`, `v-current-month`, `v-current-day`, `v-current-hour`, `v-current-minute`).

So for example, if you want the current day, you'd write:

```html
It is the <span v-current-day></span> of this month.
```

## License

This project uses the apache 2.0 license.
