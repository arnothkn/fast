# Fasting

A one-screen intermittent fasting app for one person, on one iPhone. No
accounts, no server, no sync — everything lives on the phone. Plain HTML, CSS
and JavaScript in one file, no libraries and no build step.

## Setting it up on her phone

Do this on a call with her, once. It is the only fiddly part.

1. Open the site in **Safari** (not Chrome — only Safari can install it).
2. Tap Share, then **Add to Home Screen**.
3. Open it from the new icon. It fills the screen with no browser chrome.
4. Send her the photos the ordinary way, so they land in her camera roll.
5. In the app, tap the **cog** at the top right, then **Add photos**, and pick
   them all in one go.

Until step 5 the opening screen is just the two buttons, which is correct and
not a fault.

Deleting the home-screen icon deletes her fast history and her photos with it.

## The photos

**Her photos are not in this repo and are not on the website.** They are added
from the phone and stored on the phone, so they never travel over the internet.
The site has to be publicly reachable for her phone to load it, so anything
deployed is readable by anyone with the address — which is why the personal part
is kept off it entirely.

`photos.js` is the list of photos shipped *with the app*, and is deliberately
empty. Adding a name to it puts that file on the public website.

Master copies of the eight originals are in `~/fasting-app-photos`, outside this
repo on purpose.

## The font

Thai is set in **Mitr**, served from this repo rather than from Google, so the
app still works with no signal and her phone never announces itself to a third
party on every launch. Only the Thai block of the font is loaded — three weights,
23KB all together — so digits and any Latin still come from the phone's own
font, which is what keeps the timer's figures a fixed width as it counts.

The three `.woff2` files are listed in `SHELL` in `sw.js`. **Anything the app
loads has to be in that list**, or it will be missing when she is offline.
`OFL-Mitr.txt` is the font's licence and has to stay with it.

## Changing the quotes

`quotes.js`, one line each. If the file is missing the app just shows no quote.

## Deploying a change

Push to `main`. GitHub Pages rebuilds the site on its own; there is nothing to
run.

**Bump `CACHE` in `sw.js` every time you change any file:**

```js
var CACHE = 'fasting-v41';   // -> 'fasting-v42'
```

The service worker serves the whole app out of a cache named after that string.
If the name does not change, the old files keep being served and her phone stays
on the old version with no way to notice. This has bitten twice already.

GitHub Pages then serves everything with `cache-control: max-age=600`, so for up
to ten minutes after a push her phone may not even look for the new version.
Push, wait, then have her close the app and open it again.

`_headers` would remove that ten-minute delay, but it is a Cloudflare and
Netlify convention and GitHub Pages ignores it. It is kept for the day this
moves hosts. `.nojekyll` is what stops GitHub Pages running everything through
Jekyll, which refuses to publish any file whose name starts with an underscore —
`_headers` among them.

`robots.txt` and a `noindex` meta keep the site out of search results.

## On the address not being secret

The repo is public and the URL follows from its name, so anyone who finds the
profile can open the app. What they get is an empty timer. Her fasts and her
photos live in her phone's own storage and are never uploaded, so there is
nothing personal on the site to find. That is what protects her here — not the
address, which was never going to stay private.
