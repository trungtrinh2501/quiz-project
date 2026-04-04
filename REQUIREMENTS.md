# Coffee Personality Quiz — Requirements

## Personality → Coffee Pairings (3 results)

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| Night Owl | Red Eye (coffee + espresso shot) | "Sleep is optional" |
| Artisan Snob | Pour-Over, Single Origin | "You know what you like" |

## Result Display

**Show all percentages** — e.g., "You're 60% Night Owl, 30% Zen Minimalist, 10% Artisan Snob" with all three coffee recommendations displayed.

## Visual Style

**Vintage Diner Retro**
- Dark navy background (#1A1A2E) with red accents (#E85D4A)
- Gold/warm text (#F0C987 for headings, #E8D5B7 for body)
- Font: Nunito (all weights: 400, 600, 700, 800)
- Chunky box shadows, bold borders
- Cards with rounded corners and red border
- Hover effects: red fill with dark text, slight slide right
- Reference: style-preview-3.html

## Images

- One image per question representing the question's mood
- Images should NOT hint at any specific answer
- Stored in public/images/ as q1.jpg through q5.jpg

## Icons

- Icons next to each answer option (emoji-style)
- Should match the vibe of the answer without being too literal

## Quiz Questions (5 questions, lifestyle & preferences style)

### Q1: What's your ideal weekend morning?
- 🌙 Sleeping in until noon, no alarm allowed → Night Owl
- 🧘 Up early for a quiet ritual with a good book → Zen Minimalist
- 🗺️ Hitting up the best new brunch spot in town → Artisan Snob
- **Image:** Cozy morning scene (sunrise, soft light)

### Q2: How do you pick a restaurant?
- 📱 Whatever's open late and close by → Night Owl
- 🍃 Somewhere simple with fresh, quality ingredients → Zen Minimalist
- ⭐ Only places with great reviews and a unique menu → Artisan Snob
- **Image:** General dining atmosphere

### Q3: What's your travel style?
- 🌃 City nightlife, rooftop bars, no bedtime → Night Owl
- 🏔️ A quiet cabin, no Wi-Fi, just nature → Zen Minimalist
- 🎨 Boutique hotels and hidden local gems → Artisan Snob
- **Image:** General wanderlust/journey scene

### Q4: Your friend asks for a music recommendation. You suggest...
- 🎧 That underground artist you found at 2am → Night Owl
- 🎵 Something acoustic and chill → Zen Minimalist
- 🎶 A curated vinyl you discovered at a record shop → Artisan Snob
- **Image:** Music vibes (headphones, vinyl, instruments)

### Q5: How's your phone home screen organized?
- 🔋 Honestly? It's chaos. I'll find the app when I need it → Night Owl
- ✨ Clean and minimal — only the essentials → Zen Minimalist
- 📐 Custom icons, aesthetic wallpaper, perfectly arranged → Artisan Snob
- **Image:** Abstract tech/lifestyle scene

## Quiz Logic

- Each answer maps to one personality
- After 5 questions, tally which personality was selected most
- Display results as percentages of all three personalities
- Show all three coffee recommendations, ranked by percentage
- Primary result highlighted at top

## Tech Stack

- JavaScript / Next.js
- Responsive design (works on mobile and desktop)
