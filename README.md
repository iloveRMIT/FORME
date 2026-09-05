# FORME Frontend MVP

FORME is a multi-page Vanilla JavaScript prototype for occasion-based fashion rental. The product starts with a garment the customer already owns, then recommends only the missing rental pieces.

## Run locally

Open the `FOE` folder in VS Code and use **Open with Live Server** on `index.html`.

Or run:

```bash
python -m http.server 8000
```

Then open the local address printed by the server in your browser.

## Pages

- `index.html` — landing page
- `rent.html` — searchable, filterable capsule
- `product.html?id=M-BL-001` — product details from inventory ID
- `style.html` — visual Style Me flow and recommendations
- `wardrobe.html` — persistent customer-owned items and rental history
- `saved.html`, `bag.html`, `booking.html`, `checkout.html`, `confirmation.html`
- `about.html`, `how-it-works.html`, `faq.html`

## Main files

```text
css/
  styles.css        shared visual system
  pages.css         ecommerce and page layouts
  responsive.css    tablet and mobile layouts
  style-page.css    Style Me layout
  refinements.css   image frames, wardrobe, visual QA refinements
js/
  data.js                   24-item mock inventory
  recommendation-engine.js  rule-based FORME Edit logic
  common.js                 shared storage, header/footer, search, image compression
  style.js                  Style Me and wardrobe integration
  wardrobe.js               wardrobe add/edit/remove and rental history rendering
  pages.js                  rent, saved, bag, booking, checkout and confirmation behavior
  product.js, home.js       product and homepage behavior
```

## Customer journeys

Standard rental: Home → Rent → Product → Bag → Booking → Checkout → Confirmation.

Style journey: Style Me → select occasion and direction → upload/select owned item → visual FORME Edit → Bag → Booking.

Wardrobe journey: Wardrobe → Add Item → Style This Item → visual FORME Edit.

Use **Demo mode** in the footer for the Job Interview / Classic / Menswear / Black Trousers scenario.

## Editing inventory and recommendations

- Edit products, IDs, prices, sizes and image names in `js/data.js`.
- Edit preset recommendation rules in `js/recommendation-engine.js`.
- Do not change existing product IDs without updating the recommendation rules.

## Images

Inventory placeholders are in `assets/images/placeholders/`. Replace these files with real images or update the corresponding `image` field in `js/data.js`.

Wardrobe uploads are compressed in the browser (maximum 800px on the longest edge, JPEG quality 0.78) and stored as Base64 image data. This keeps small prototype uploads available after refresh. Very large or many uploads can exceed browser localStorage capacity; remove wardrobe items or clear site storage if this occurs.

## Storage keys

- `formeBag` — rental bag
- `formeSaved` — saved inventory IDs
- `formeOccasion`, `formeStyle` — styling preferences
- `formeBooking` — booking plan
- `formeWardrobe` — customer-owned garments including compressed image data
- `formeRentalHistory` — confirmed prototype rentals

Confirmation writes rental history only once per booking number, so refreshes do not duplicate it.

## Prototype limitations

- Recommendations are predefined rules, not AI or image recognition.
- Uploaded images are locally previewed/stored only.
- Availability, dates, delivery, deposits and booking are simulated.
- No payment, authentication, backend, database or fulfilment integration exists.

## Deploy to GitHub Pages

1. Create a GitHub repository named `FOE`.
2. Push the contents of this project folder to the repository root.
3. In the GitHub repository, open **Settings** → **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and the `/(root)` folder, then save.
6. GitHub Pages will publish the static site at a URL similar to `https://USERNAME.github.io/FOE/` after a short deployment delay.

All application paths are relative, so the project is safe to host from the `/FOE/` repository subdirectory. `.nojekyll` is included to serve the static files directly.

Optional first deployment from the project root:

```bash
git init
git add .
git commit -m "Prepare FORME MVP for GitHub Pages"
git branch -M main
git remote add origin https://github.com/USERNAME/FOE.git
git push -u origin main
```
