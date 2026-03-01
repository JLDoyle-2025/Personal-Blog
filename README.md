# Neon Rewind Reviews

Your 1980s-themed book and movie review site.

---

## How to Add a New Review

You don't need to know any code. Just follow these steps.

### Step 1 — Go to your reviews folder

In GitHub, click into the **`src`** folder, then the **`reviews`** folder.

### Step 2 — Create a new file

Click **"Add file" → "Create new file"** in the top right corner.

Name the file after the title, using lowercase letters and hyphens only (no spaces):

- `blade-runner.md`
- `the-breakfast-club.md`
- `enders-game.md`

### Step 3 — Paste in this template and fill it in

```
---
title: "Your Title Here"
year: 1985
type: "Movie"
category: "80s Sci-Fi Flicks"
rating: 4
vibe: "A short punchy description of the vibe — keep it to one line"
---

**One-line take:** One sentence that captures your overall feeling.

**Why it works:**
- First reason
- Second reason
- Third reason

**Retro rating:** ★★★★☆ / 5 neon stars
```

### Step 4 — Fill in the details

**`type:`** must be exactly one of these (capital letter, in quotes):
- `"Movie"`
- `"Book"`

**`category:`** must be exactly one of these (copy and paste, punctuation matters):
- `"80s Sci-Fi Flicks"`
- `"Retro Rom-Coms"`
- `"Cult Classics"`
- `"Paperbacks & Pulp"`

**`rating:`** a number from 1 to 5, no quotes:
- `rating: 5`

**Star ratings to copy-paste for the retro rating line:**

| Stars | Copy this |
|---|---|
| 1 star  | `★☆☆☆☆` |
| 2 stars | `★★☆☆☆` |
| 3 stars | `★★★☆☆` |
| 4 stars | `★★★★☆` |
| 5 stars | `★★★★★` |

### Step 5 — Add a spoiler (optional)

If your review contains a spoiler, wrap it like this so readers must click to reveal it:

```
{% spoiler %}
Write your spoiler here.
{% endspoiler %}
```

### Step 6 — Commit (save) the file

Scroll to the bottom of the GitHub page. You'll see a "Commit new file" box.

Leave the default message or write something like `Add review: Blade Runner`.

Click the green **"Commit new file"** button.

### Step 7 — Wait about 2 minutes

GitHub automatically rebuilds and publishes the site after every commit.

Watch the progress by clicking the **Actions** tab at the top of the repository.
A green checkmark means your review is live.

---

## How to Edit an Existing Review

1. Go to `src/reviews/` and click the file you want to edit.
2. Click the **pencil icon** (Edit this file) in the top right.
3. Make your changes.
4. Scroll down and click **"Commit changes"**.
5. Wait ~2 minutes for the site to rebuild.

---

## How to Update the About Page Bio

1. Go to `src/about.njk`.
2. Click the pencil icon to edit.
3. Find this line: `[ Bio coming soon — watch this space. ]`
4. Replace it with your bio text.
5. Click **"Commit changes"**.

---

## Running the Site Locally (for developers)

```bash
npm install
npm start        # starts a local server at http://localhost:8080
npm run build    # builds the site to the _site/ folder
```

---

## Troubleshooting

**My review isn't showing up.**
- Click the **Actions** tab and look for a red X. Click it to read the error.
- Most common cause: a typo in the frontmatter (the section between the `---` lines).
- Check that `type:` is exactly `"Movie"` or `"Book"` with a capital letter and quotes.
- Check that `rating:` is a plain number with no quotes (e.g. `4`, not `"4"`).

**The filter doesn't show my review in the right category.**
- Check that your `category:` value matches one of the four options exactly, including the `&` in "Paperbacks & Pulp".

**I want to delete a review.**
- Go to the file in GitHub, click the three-dot menu (⋯) in the top right, and choose **"Delete file"**. Then commit the deletion.

---

## Your Site URL

After setting up GitHub Pages, your site will be at:

`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with your repository name.

### One-time GitHub Pages setup

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under "Source", choose **"Deploy from a branch"**.
4. Set the branch to **`gh-pages`** and the folder to **`/ (root)`**.
5. Click **Save**.

The site will be live after the first successful Actions run.
