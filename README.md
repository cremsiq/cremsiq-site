# CREMS iQ — Static Site

This is the split version of the original single-file HTML export, organized for a
standard static host like GoDaddy (cPanel / File Manager or FTP).

## Structure

```
index.html         Page markup only — no inline <style> or <script>
css/styles.css      All page styles (was the <style> block)
js/main.js          All page interactions (was the <script> block), wrapped in
                    'use strict' + DOMContentLoaded, loaded with <script defer>
assets/logo.png     The CREMS iQ logo, extracted from the base64 data URI that
                    was previously embedded directly in the HTML
```

## Why this split

- **Caching**: browsers cache `styles.css`, `main.js`, and `logo.png` separately from
  the HTML, so repeat visits only re-download `index.html` (a few KB) instead of the
  whole ~63 KB single file.
- **Smaller HTML**: the base64 logo alone was ~29 KB of inline text; as a real PNG file
  it's 22 KB and loads in parallel with everything else instead of bloating the page's
  first byte.
- **Maintainability**: styling and behavior changes no longer require touching the
  markup file at all.

## Deploying to GoDaddy

1. Log in to GoDaddy → **My Products** → find your hosting plan → **cPanel Admin**
   (or **Manage**, depending on your plan).
2. Open **File Manager** and navigate to `public_html` (this is the web root for
   your domain; if you're deploying to a subdomain or subfolder, go there instead).
3. Upload all four items (`index.html`, `css/`, `js/`, `assets/`) preserving the
   folder structure — either drag-and-drop them in, or upload a zip and use
   File Manager's "Extract" option.
4. Confirm `index.html` sits directly in `public_html` (not inside an extra
   subfolder) — GoDaddy serves whatever `index.html` it finds at the domain root.
5. Visit your domain to confirm it loads. If you used FTP instead of File Manager
   (FileZilla, Cyberduck, etc.), just upload the same four items to the same
   `public_html` path.

No build step, server, or dependencies are required — this is plain HTML/CSS/JS.

## Notes on functionality

All buttons, modals (document preview + "Log In"), and the two demo forms
(login form, data-access form) work exactly as in the original file — they still
just `alert()` instead of hitting a real backend, since none was wired up in the
source file. Search `js/main.js` for `alert(` to find the three spots to replace
with real API calls once you have an auth/consult backend.
