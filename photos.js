/* Photos for the opening screen.
 *
 * This list is deliberately EMPTY, and should normally stay that way.
 *
 * Anything named here is copied onto the public website, where anyone who has
 * the address can see it. Her photos are personal, so they do not go there:
 * she adds her own from the phone instead, through the cog on the opening
 * screen. Those are stored on the phone alone and never leave it.
 *
 * With none listed the app is simply plain until she adds some — the opening
 * screen shows the buttons on their own, and the strip under the timer is
 * hidden. Everything else works exactly the same.
 *
 * If you ever do want a photo shipped with the app itself, copy the file into
 * this folder and add its name below, in quotes, comma after all but the last:
 *
 *   window.PHOTOS = [
 *     "sunrise.jpg"
 *   ];
 *
 * Remember that doing so makes it public, and bump CACHE in sw.js afterwards.
 * A name that does not match a real file is skipped silently, so a typo can
 * never leave a blank screen.
 */
window.PHOTOS = [];
