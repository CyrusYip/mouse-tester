# mouse-tester

**[Live demo](https://mouse-tester.cyrusyip.org/)**

Test buttons and the wheel online.

## Development

```shell
# Install dependencies
pnpm install
# Develop
pnpm run dev
# Build
pnpm run build
# Preview
pnpm run preview
```

## Known issues

Detection of back button and forward button doesn't work on Firefox, because [mousedown event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) is not fired when these two buttons are clicked.

## License

[MIT](LICENSE)