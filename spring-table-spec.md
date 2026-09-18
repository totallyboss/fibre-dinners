# Spring Table — App Specification

A fibre-first meal planning app for lunches, dinners, and a 9-year-old's school
lunchbox, built around New Zealand seasonal produce.

This spec documents the working prototype (a single self-contained HTML file)
so it can be rebuilt as a standalone static app.

---

## 1. Purpose

Help a household plan dinners, lunches, and one child's school lunchbox using:

- Whole-food, high-fibre eating principles (see Section 3)
- What's actually in season in New Zealand right now
- A recipe bank the person can filter, browse, and drop straight into a
  weekly plan
- A lunchbox builder for a 9 year old, aware that most NZ primary schools
  run nut-free policies

No login, no backend, no shared data. Everything is single-user and stored
on-device.

---

## 2. Recommended stack

The prototype is one static HTML file with inline CSS and vanilla JS — no
build step required, and that's a legitimate way to ship this as-is.

For a proper standalone app, given an existing **Astro + Cloudflare (Pages,
Workers, D1, Wrangler)** side-project stack:

- **Astro** for the static shell and routing (five routes, or five sections
  on one page — either works; this spec assumes one page with client-side
  tabs, matching the prototype).
- **Vanilla JS or a light framework island** (Preact/Alpine) for the
  interactive bits — filters, expand/collapse, the planner grid, the
  lunchbox builder. Nothing here needs a heavy framework.
- **No backend required for v1.** All state is per-device (`localStorage`).
  Cloudflare Pages can host it as a static build with zero server logic.
- **Optional v2:** Cloudflare D1 + a Worker if the household wants the plan
  or lunchbox shared across devices instead of per-browser. Not needed for
  the spec as written.

---

## 3. Eating principles (source content)

These are fixed reference content, shown as a static list — not
user-editable. Twelve principles, each with a short title and one-line
explanation:

1. **Eat real fibre, not powder** — isolated fibre supplements can't
   replicate the hundreds of fibre types whole food provides.
2. **Build every plate around whole plants** — vegetables, whole grains,
   fruit, nuts, seeds, fermented foods at the centre of the plate.
3. **Beans and lentils, most days** — four or five times a week, for the
   gut bacteria that produce butyrate.
4. **Whole grains over refined** — sourdough/seeded bread and
   quinoa/bulgur over white bread and white rice.
5. **A vegetable starter, every meal** — raw veg and hummus, or sautéed
   greens, before the main dish.
6. **Diverse seeds and nuts** — a mixed jar to sprinkle over meals.
7. **Snack on whole foods** — nuts and seeds instead of packets.
8. **Chew properly** — foods that take effort to eat slow you down.
9. **Aim for 30+ plants a week** — herbs, spices, beans, grains, nuts,
   seeds, fruit, veg all count.
10. **Cook with intent** — treat each meal as an active choice, not just
    refuelling.
11. **Real food at real mealtimes** — eat when hungry, not constant
    grazing.
12. **Stay out of the packaged aisle** — ultra-processed food displaces
    fibre and empties fast.

Four headline stats shown in the hero section: **30g+** fibre minimum
daily, **55g** protective target, **4–5×** beans/lentils per week, **30+**
different plants per week.

---

## 4. Information architecture

Five sections, presented as tabs on one page (matches the prototype):

1. **Principles** — the 12 rules above, static.
2. **Seasonal NZ produce** — reference list, browsable by season.
3. **Lunch & dinner ideas** — the recipe bank, filterable, expandable.
4. **School lunchbox** — component-based builder for a 9 year old.
5. **Weekly planner** — a 7-day grid for dinner + kid's lunch.

Tabs scroll horizontally on narrow viewports; active tab has an underline
in the fern-green accent colour.

---

## 5. Section detail

### 5.1 Principles tab

- Numbered list (01–12), each item: number, bold title, one-line
  description.
- Closing callout box: *"The shortcut: stay out of the packaged aisle and
  most of this looks after itself."*
- No interactivity beyond scrolling.

### 5.2 Seasonal NZ produce tab

- Season toggle: **Spring / Summer / Autumn / Winter**, pill buttons.
- Whichever season matches the current calendar month is pre-selected and
  labelled "· now" (Spring = Sep–Nov, Summer = Dec–Feb, Autumn = Mar–May,
  Winter = Jun–Aug).
- Each season shows three groups — **Vegetables**, **Fruit**, **Herbs** —
  each rendered as a wrapped row of tag pills.
- Data is static reference content (see Appendix A for the full list used
  in the prototype).

### 5.3 Lunch & dinner ideas tab (the recipe bank)

**Data model** — each recipe has:

```
{
  cat: string,          // one of 9 categories, see below
  season: string,       // "Spring" | "Summer" | "Autumn" | "Winter" | "Any"
  title: string,
  desc: string,          // one-line summary shown on the collapsed card
  ingredients: string[], // shown when expanded
  steps: string[]        // shown when expanded, numbered
}
```

**Categories** (52 recipes total in the prototype):

| Category            | Count |
|----------------------|-------|
| Beans & lentils       | 8     |
| Grain bowls           | 6     |
| Soups                 | 6     |
| Fish & eggs           | 6     |
| Vegetable starters    | 5     |
| Snacks                 | 5     |
| Pasta & one-pot        | 6     |
| Roasts & traybakes    | 5     |
| Salads                | 5     |

**Filters** — two independent filter rows, combined with AND logic:

- **Category**: All, plus one button per category above.
- **Season**: All, Spring, Summer, Autumn, Winter. A recipe tagged
  `"Any"` matches every season filter, not just "All" — it's a pantry
  staple that isn't season-limited. The current season's button is
  labelled "· now".

A running count ("38 ideas") sits under the filter rows and updates live.

**Card behaviour**:

- Collapsed: title, one-line description, category tag, season tag
  (mustard-coloured, e.g. "Spring" or "Any season"), and a chevron.
- Tap/click anywhere on the card header to expand.
- Expanded: two columns — **Ingredients** (bulleted) and **Method**
  (numbered steps) — with an **"+ Add to planner"** button under the
  method.
- "Add to planner" must not trigger the expand/collapse (stop event
  propagation).

**Add to planner logic**:

- Finds the first empty **dinner** slot across Mon–Sun (in order) and
  writes the recipe title into it.
- If the week's dinner slots are all full, show a message instead of
  overwriting anything.
- Confirms with a short, auto-dismissing toast/status line (~2 seconds).

### 5.4 School lunchbox tab

Two-column layout (stacks to one column under ~640px).

**Left column — "Today's box"**:

- Live list of everything added, each row removable with an ✕.
- Empty state: italic placeholder text.
- Two actions: **Clear box** (empties it) and **Surprise me** (picks one
  random item from each component group below and fills the box).
- A fixed advisory note: most NZ primary schools ask for nut-free
  lunchboxes, so the default component list favours seeds over nuts —
  swap in nut butters only if the school allows them.

**Right column — component picker**, grouped:

| Group                     | Example items |
|----------------------------|----------------|
| Whole grain base            | Seeded sourdough sandwich, wholegrain wrap, leftover quinoa, bulgur salad, oat crackers |
| Protein & fibre             | Hummus, boiled egg, roasted chickpeas, leftover lentil dahl, cheese cubes |
| Vegetables                   | Carrot sticks, cucumber rounds, cherry tomatoes, snap peas, capsicum strips |
| Fruit                         | Apple slices, mandarin, grapes, rhubarb & yoghurt pot, kiwifruit |
| Seeds (nut-free friendly)   | Pumpkin seed mix, sunflower seed mix, roasted chickpeas (salted), homemade seed & oat bar |

Tapping any pill appends that item to the box (duplicates allowed — a kid
might want two fruit items).

Design constraint carried through from the source principles: every
component should work cold/at room temperature, since NZ school lunches
are not reheated.

### 5.5 Weekly planner tab

- A 7-column (Mon–Sun) × 2-row (Dinner, Kid's lunch) grid.
- Each cell is a free-text `<textarea>` — the person can type directly,
  or a cell gets filled automatically via "Add to planner" from the idea
  bank.
- Saves on every keystroke (debouncing optional, not required for a
  planner this size).
- **"Fill empty dinners from idea bank"** button: shuffles the full
  recipe list and drops titles into any still-empty dinner cells only —
  never overwrites something already typed in.
- **"Clear week"** button: empties every cell (no per-cell undo needed,
  but a confirm step is reasonable if rebuilding this from scratch).
- Status line under the grid confirms saves and clears, auto-dismissing.

---

## 6. Persistence

No backend. Two `localStorage` keys, matching the prototype:

| Key                    | Shape                          | Holds |
|--------------------------|----------------------------------|-------|
| `springtable_plan`      | `{ "dinner_Mon": "...", "kidlunch_Tue": "...", ... }` | Weekly planner cell values, keyed `"<row>_<Day>"` |
| `springtable_box`       | `string[]`                      | Current lunchbox contents, in add order |

Rules:

- Wrap every read/write in try/catch; treat a missing or corrupt key as
  empty state, never crash.
- Nothing here is shared between devices or people — it's explicitly a
  single-device convenience, not synced data. If the household later
  wants a shared plan (e.g. both parents editing from separate phones),
  that requires the v2 backend noted in Section 2, not a change to this
  local-storage model.

---

## 7. Visual design

**Typography**: Fraunces (serif, variable, used for headings and the
italic hero title) + Public Sans (sans, body and UI text). Loaded from
Google Fonts.

**Colour tokens** (light mode shown; dark mode via
`prefers-color-scheme` and an optional `data-theme` override):

| Token          | Light      | Use |
|-----------------|------------|-----|
| `--paper`       | `#F5F1E4`  | Page background |
| `--paper-2`     | `#EDE7D6`  | Table headers, subtle fills |
| `--ink`         | `#262117`  | Primary text |
| `--ink-soft`    | `#5A5344`  | Secondary text |
| `--fern`        | `#3E5B3E`  | Primary accent (active states, CTAs) |
| `--fern-deep`   | `#2C4230`  | Category tags, active tab text |
| `--mustard`     | `#C6871F`  | Stat highlights, season tags |
| `--plum`        | `#6E2F4C`  | Remove/destructive actions |
| `--plum-soft`   | `#F0DDE6`  | Callout backgrounds |
| `--line`        | `rgba(38,33,23,.15)` | Borders, dividers |
| `--card`        | `#FBF9F1`  | Card/pill backgrounds |

Dark mode swaps each token to a corresponding value (see prototype for
exact hex codes) — background goes near-black (`#1B1A15`), text goes
warm off-white, accents brighten for contrast.

**Layout**: single column, max-width ~920px, generous line-height (1.55).
No drop shadows; structure comes from borders and colour blocks, not
elevation. Pills for filters and tags, underlined tabs (not boxed), plain
bordered rows for the recipe list rather than shadowed cards.

**Responsiveness**: lunchbox columns and idea-body (ingredients/method)
columns stack to one column under 640px. Planner grid scrolls
horizontally on narrow viewports rather than compressing.

---

## 8. Non-functional requirements

- **No external calls at runtime** beyond the two Google Fonts requests —
  all recipe/produce/principle data ships with the app.
- **Fast**: this is static content plus small interactions; there's no
  reason for a loading spinner anywhere.
- **Accessible**: chevron buttons need `aria-label`; textareas need
  placeholder text but shouldn't rely on placeholder alone (add a
  `<label>` or `aria-label` per cell — e.g. "Wednesday dinner").
- **No tracking, no accounts.** This is a private household tool.

---

## Appendix A — Seasonal produce reference (NZ, general/Wellington-region timing)

**Spring (Sep–Nov)**
- Vegetables: asparagus, broad beans, peas, spring onions, silverbeet,
  spinach, new potatoes, radishes, lettuce, rocket, broccoli
- Fruit: late navel oranges, tangelos, rhubarb, first strawberries (late Nov)
- Herbs: mint, chives, parsley, dill

**Summer (Dec–Feb)**
- Vegetables: courgette, tomatoes, corn, green beans, cucumber, capsicum,
  beetroot, lettuce
- Fruit: strawberries, cherries, apricots, peaches, nectarines,
  blueberries, watermelon, plums
- Herbs: basil, coriander, mint

**Autumn (Mar–May)**
- Vegetables: pumpkin, kumara, silverbeet, leeks, cauliflower, brussels
  sprouts, mushrooms, celery
- Fruit: apples, pears, feijoas, persimmons, grapes, quince
- Herbs: sage, thyme, rosemary

**Winter (Jun–Aug)**
- Vegetables: broccoli, cabbage, cauliflower, kale, leeks, swede,
  parsnip, carrots, silverbeet
- Fruit: oranges, mandarins, lemons, grapefruit, tamarillos
- Herbs: rosemary, thyme, bay

Shift a few weeks earlier or later for regions north or south of
Wellington.

## Appendix B — Full recipe list (titles only, by category)

**Beans & lentils**: Red lentil & silverbeet dahl · White bean & broad
bean stew · Black bean & sweetcorn tacos · Chickpea & spinach curry ·
Puy lentil & mushroom ragù · Butter bean & tomato bake · Three-bean
chilli · Moroccan chickpea & apricot stew

**Grain bowls**: Quinoa spring bowl · Bulgur tabbouleh with white beans ·
Farro & roast pumpkin bowl · Buckwheat & roasted veg bowl · Brown rice &
edamame bowl · Freekeh & roasted cauliflower bowl

**Soups**: Minestrone with borlotti beans · Spring pea & mint soup · Red
lentil & carrot soup · Kumara & coconut soup · Silverbeet & white bean
soup · Tomato & butter bean soup

**Fish & eggs**: Baked fish, sautéed greens, lentils · Veg-loaded
frittata · Salmon, broccoli & farro tray · Shakshuka with chickpeas ·
Tuna, white bean & rocket salad · Miso-baked fish with brown rice &
greens

**Vegetable starters**: Raw veg + hummus plate · Olive-oil sautéed
greens · Roasted asparagus with lemon · Charred broccoli with tahini ·
Beetroot & walnut small plate

**Snacks**: Seed and nut mix jar · Roasted chickpeas · Apple & seed
butter plate · Hummus & veg sticks · Homemade seed & oat bars

**Pasta & one-pot**: Wholegrain pasta with white beans & greens · Lentil
bolognese · One-pot chickpea & orzo stew · Pearl barley & mushroom
risotto-style · Wholewheat pasta primavera · Soba noodles with edamame &
sesame

**Roasts & traybakes**: Chickpea & roast veg tray bake · Roast kumara,
broccoli & lentil traybake · Whole roast cauliflower with tahini · Roast
veg & haloumi traybake with chickpeas · Baked stuffed capsicums

**Salads**: Lentil & roasted veg salad · Broad bean, pea & feta salad ·
Chickpea, cucumber & herb salad · Kale & white bean caesar-style salad ·
Beetroot, orange & walnut salad

Full ingredients and method for each recipe are in the working
prototype's `ideas` data array and should be carried over verbatim when
rebuilding.
