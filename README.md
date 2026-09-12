# HotSwap — website

Statische website voor HotSwap: homepage met features/screenshots, plus de Support-, Privacy- en Privacykeuzes-pagina's die Apple verplicht stelt bij het indienen van een app.

## Hosten op GitHub Pages

1. Maak een nieuwe repository op GitHub, bv. `hotswap-site`.
2. Upload alle bestanden uit deze map (`index.html`, `support.html`, `privacy.html`, `privacy-choices.html`, `styles.css`, de map `img/`) naar de root van die repository.
3. Ga naar **Settings → Pages** in de repository.
4. Kies bij **Source**: `Deploy from a branch`, branch `main`, map `/ (root)`. Sla op.
5. Na 1–2 minuten is de site live op `https://<jouw-gebruikersnaam>.github.io/hotswap-site/`.

## Voor de App Store

Gebruik in App Store Connect:

- **Marketing URL**: de homepage (`index.html`)
- **Support URL**: `support.html`
- **Privacy Policy URL**: `privacy.html`

De pagina `privacy-choices.html` staat gelinkt vanaf de privacypagina en beschrijft hoe gebruikers toestemmingen beheren en verwijdering van gegevens aanvragen — handig als je in de App Privacy-vragenlijst "data deletion" moet onderbouwen.

## Aan te passen voor je situatie

- `support.hotswap@gmail.com` → vervang overal door je eigen supportadres, of laat staan als dat al je adres is.
- De "Download in de App Store"-knoppen (`href="#"`) → vul in zodra je App Store-link er is.
- Teksten in `privacy.html` beschrijven wat de app nu doet (Shared Sessions via CloudKit, camera enkel voor QR-scan, meldingen, Apple Watch-sync). Pas aan zodra de functionaliteit wijzigt.
- Logo: `img/logo-mark.png` en `img/favicon.png` zijn gegenereerd; vervang gerust door je eigen app-icoon.

## Screenshots

Alle schermafbeeldingen in `img/` komen uit de simulator-screenshots van de app zelf (History, Live view, Setup builder, Materiaal, Shared Session QR, Dynamic Island, lockscreen widgets).
