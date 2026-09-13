# HotSwap — website

A static website for HotSwap: a homepage with features/screenshots, plus the Support, Privacy and Privacy Choices pages Apple requires when submitting an app.

## Hosting on GitHub Pages

1. Create a new GitHub repository, e.g. `hotswap-site`.
2. Upload **every** file and folder from this package — `index.html`, `support.html`, `privacy.html`, `privacy-choices.html`, `styles.css`, and the whole `img/` folder — to the root of that repository. The `img/` folder must come along, or the logo and screenshots will show as broken images.
3. Go to **Settings → Pages** in the repository.
4. Under **Source**, choose `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. After 1–2 minutes the site is live at `https://<your-username>.github.io/hotswap-site/`.

## For the App Store

Use in App Store Connect:

- **Marketing URL**: the homepage (`index.html`)
- **Support URL**: `support.html`
- **Privacy Policy URL**: `privacy.html`

`privacy-choices.html` is linked from the privacy page and describes how users manage permissions and request data deletion — useful if the App Privacy questionnaire asks you to back up a "data deletion" answer.

## Things to adjust for your situation

- `support.hotswap@gmail.com` → replace everywhere with your own support address, or leave it if that's already yours.
- The "Download on the App Store" buttons (`href="#"`) → fill in once you have your App Store link.
- The text in `privacy.html` describes what the app does today (Shared Sessions via CloudKit, camera only for QR scanning, notifications, Apple Watch sync). Update it if the functionality changes.
- Logo: `img/logo-mark.png` and `img/favicon.png` use your uploaded transparent logo — swap in a new version if you update the app icon.

## Screenshots

All screenshots in `img/` come from the app's own simulator screenshots (History, Live view, Setup builder, Materials, Shared Session QR, Dynamic Island, lock-screen widgets).
