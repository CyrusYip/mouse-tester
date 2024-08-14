# mouse-tester

**[Live demo](https://mouse-tester.cyrusyip.org/)**

Test buttons and the wheel online.

## Motivation

One day, some buttons of my mouse weren't working. I didn't want to install any software just to test it, and the websites I tried looked too complicated. Therefore, I decided to create a minimal mouse tester.

## Development

```shell
# Install dependencies
pnpm install
# Develop
pnpm run dev
# Build
pnpm run build
# Preview built website
pnpm run preview
```

## Known issues

[Firefox can't detect back button and forward button](https://stackoverflow.com/questions/78858617/how-to-detect-back-button-and-forward-button-in-firefox), because [mousedown event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) is not fired when these two buttons are clicked.

## License

[MIT](LICENSE)
