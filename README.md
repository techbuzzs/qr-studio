# QR Studio

Create downloadable QR codes for links, Wi-Fi networks and contact details.

A working utility that processes data locally in the browser. No accounts, API keys, or server file storage.

## Run

Node.js 22 or newer.

```sh
npm install
npm run build
npm run dev
```

## Features

- QR codes for links, Wi-Fi networks and vCard contacts
- Custom foreground/background colors with contrast checks
- PNG and SVG export with scan-friendly quiet zone

## Embed

Use `?embed=1&theme=light` (or `dark`) for the compact homepage demo. Theme follows the operating system by default, with an optional saved preference.

## Deployment

Vercel serves the generated `dist` directory.

## Credits

Built by [Tech Buzzs](https://github.com/techbuzzs). Uses qrcode, under their respective open source licenses.

## Live website

[Open qr-studio](https://qr-studio-orpin-ten.vercel.app)
