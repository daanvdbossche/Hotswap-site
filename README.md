# HotSwap App Store Website

This is a static website for HotSwap. It is intended to provide the public pages used in App Store Connect.

## Included pages

- `index.html` — Marketing/home page
- `support.html` — Support URL
- `privacy.html` — Privacy Policy URL
- `privacy-choices.html` — optional User Privacy Choices URL / data deletion instructions
- `404.html`

## Support email

Already configured as:

`support.hotswap@gmail.com`

## Before publishing

Edit `config.js` later when these links are available:

- `appStoreUrl`
- [`instagramUrl`](https://github.com/daanvdbossche/Hotswap-site.git)

## Recommended App Store Connect URLs

If GitHub Pages publishes your repository at:

`https://YOURUSERNAME.github.io/YOURREPO/`

then use:

- Marketing URL: `https://YOURUSERNAME.github.io/YOURREPO/`
- Support URL: `https://YOURUSERNAME.github.io/YOURREPO/support.html`
- Privacy Policy URL: `https://YOURUSERNAME.github.io/YOURREPO/privacy.html`
- User Privacy Choices URL (optional, recommended): `https://YOURUSERNAME.github.io/YOURREPO/privacy-choices.html`

## Important Apple items that are NOT handled by the website

You still need to complete these directly in App Store Connect:

- App Privacy questionnaire / data types
- App Review contact name, email and phone number
- Age Rating
- screenshots and metadata
- pricing/availability
- export compliance questions
- trader status/contact details where applicable
- select the release build

The app itself must also contain an easily accessible link to the Privacy Policy.
