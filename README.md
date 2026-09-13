# FORME Frontend MVP

FORME is a multi-page Vanilla JavaScript prototype for occasion-first formalwear rental. It combines a supporting website with a small-scale physical FORME store, where fittings, pickup and return take place.

## Run locally

Open `index.html` with Live Server, or run `python -m http.server 8000` from this folder.

## Customer journeys

- Guided flow: Occasion → optional wardrobe → recommendations → bag → size/event date → fitting booking → confirmation.
- Direct browse flow: Rent → product → bag → size/event date → fitting booking → confirmation.
- At the store: fitting → pickup → return.

An owned garment is optional. Customers can upload or select one from My Wardrobe for complementary recommendations, or skip it to receive a complete outfit recommendation from inventory.

## Main files

```text
js/data.js                   inventory (including remote-image support)
js/recommendation-engine.js  deterministic role-based recommendations
js/style.js                  guided optional-wardrobe flow
js/pages.js                  catalogue, bag, fitting booking and confirmation
js/common.js                 shared storage, shell, search and image helpers
```

## Storage keys

- `formeBag` — selected rental pieces, sizes and event dates
- `formeSaved` — saved inventory IDs
- `formeOccasion`, `formeStyle` — styling preferences
- `formeBooking` — fitting reservation details
- `formeWardrobe` — saved owned garments
- `formeRentalHistory` — confirmed prototype rentals

## Prototype limitations

- Recommendations are rule based, not AI garment recognition.
- Uploaded owned-item photos are visual references with manually confirmed details.
- Availability and fitting appointments are simulated.
- No payment, backend, delivery service or real-time stock integration exists. Flexible delivery is only a possible future development after the store-based model is validated.
