// All site copy lives here. Edit prose freely. Inline emphasis uses
// Markdown: **bold**, *italic*, [link text](https://example.com).

export const site = {
  name: "Lakeview Nature Stewards",
  shortName: "LNS",
  description:
    "Neighborhood volunteers working with SF Rec & Parks to restore the native coastal-bluff ecosystem of the Lakeview Ashton Mini Park.",
  ogTagline:
    "Restoring the native coastal-bluff ecosystem of the Lakeview Ashton Mini Park in San Francisco.",
  email: "Lakeviewnaturestewards@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/zTKvzbacGd2Gm9wz8",
  partnerLine:
    "In partnership with SF Recreation & Parks, Natural Resources Division.",
  copyrightSuffix: "Lakeview Nature Stewards · San Francisco",
};

export const ctas = {
  getInvolved: "Get involved",
  joinStewardshipDay: "Join a stewardship day",
  learnAboutThePark: "Learn about the park",
  moreAboutWhoWeAre: "More about who we are",
  moreAboutThePark: "More about the park",
  openInGoogleMaps: "Open in Google Maps",
  readPost: "Read post",
  readMore: "Read more",
  allPosts: "All posts",
};

// Reused between Home and About.
const missionAspiration = {
  eyebrow: "Our aspiration",
  heading: "To bring back the ecosystem that lived here 250 years ago.",
  paragraphs: [
    "We envision a rocky hilltop full of native plants and animals — lots of birds and pollinators. A place where you can watch the seasons turn from our wet winters, to springs bursting with wildflowers and green native grasses.",
    "Then a foggy summer arrives, the spring flowers dry into seed heads that feed and shelter birds (maybe even quail, one day). It's a long road, but it begins with the small patch of hill in front of us.",
  ],
};

export const home = {
  hero: {
    eyebrow: "San Francisco · Lakeview Ashton Mini Park",
    heading: "Tending a remnant of wild San Francisco.",
    lede:
      "We're a group of neighborhood volunteers working alongside SF Rec & Parks to restore the native coastal-bluff ecosystem of the rocky outcrop in our backyard — one weed-pull, one wildflower, one season at a time.",
  },
  mission: missionAspiration,
  teasers: [
    {
      href: "/the-park",
      eyebrow: "The Park",
      title: "A Natural Area in the middle of the city.",
      body:
        "Why the coastal-bluff ecosystem still survives on this rocky hilltop — and what makes its native plants so tough.",
    },
    {
      href: "/blog",
      eyebrow: "Blog",
      title: "Notes from the hill.",
      body:
        "Workday recaps, plant-of-the-month, and observations through the seasons.",
    },
    {
      href: "/photos",
      eyebrow: "Photos",
      title: "From the hill, through the seasons.",
      body: "Wildflowers, foggy summer mornings, and stewardship days.",
    },
    {
      href: "/press",
      eyebrow: "Press",
      title: "What people are writing.",
      body: "Articles in the Ingleside Light and SF Gate.",
    },
  ],
};

export const about = {
  header: {
    eyebrow: "About",
    title: "Neighbors, by way of the hill.",
    lede:
      "The Lakeview Nature Stewards is a group of neighborhood volunteers working together with San Francisco Recreation & Parks to foster the ecological health of the area officially called the Lakeview Ashton Mini Park.",
  },
  paragraphs: [
    "You might also know it as the *Rocky Outcrop*, the *Orizaba Outcrop*, or one of a handful of other names depending on who you ask. Whatever you call it, it's already a wonderful place to sit and take in the view. We're trying to make it even better, for the people who live near it and for the wildlife that depends on it.",
  ],
  mission: missionAspiration,
};

export const thePark = {
  header: {
    eyebrow: "The Park",
    title: "A designated Natural Area in the middle of the city.",
    lede:
      "The hill is a rare remnant of San Francisco's coastal-bluff ecosystem — and the city has flagged it as a place worth protecting.",
  },
  paragraphs: [
    "The hill has been specially designated a **Natural Area** by the SF Rec & Park *Natural Resources Division* — meaning the city has flagged it as a place whose natural resources are a priority to protect.",
    "What makes it valuable is what survives here: remnant patches of coastal-bluff ecosystem that have hung on for millennia even as the city grew up around them.",
    "Why have these native plants held on? The answer is the thin, rocky soil that faces directly into the wind off the Pacific. Natives have been here for hundreds of thousands of years and have evolved to survive these gnarly conditions — deep roots that pull moisture and nutrients from far below long after the topsoil has dried.",
    "Where the soil has a little more give, invasive annual grasses move in and crowd out the originals. Native plants are tough, but not invincible. That's where we come in.",
  ],
  nativePlants: {
    eyebrow: "Why native plants",
    heading: "A web of life, built over thousands of years.",
    paragraphs: [
      "Wildlife has evolved alongside specific plants — a complex web that provides pollen, insects, seeds, cover, and places to nest and raise young.",
      "Many invasive plants simply don't offer those things to the insects, birds, and other animals that would otherwise live here. Lose the plants and, eventually, you lose everything that depended on them.",
      "*(We'll add specific examples soon — like the hairstreak butterflies that rely on particular host plants found right here on the outcrop.)*",
    ],
  },
};

export const photos = {
  header: {
    eyebrow: "Photos",
    title: "From the hill, through the seasons.",
    lede:
      "A growing collection from stewardship days, spring wildflower blooms, and foggy summer mornings.",
  },
  empty:
    "No photos yet. Upload some in the Notion Photos database and they'll show up here.",
};

export const blog = {
  header: {
    eyebrow: "Blog",
    title: "Notes from the hill.",
    lede:
      "Workday recaps, plant spotlights, and seasonal observations from the outcrop.",
  },
  empty:
    "No posts yet. As soon as the first one is published in Notion, it'll show up here.",
  missingBody: "*This post has no body content yet.*",
};

export const press = {
  header: {
    eyebrow: "Press",
    title: "What people are writing.",
  },
  articles: [
    {
      title: "Ingleside Light — Lakeview Nature Stewards",
      blurb:
        "A profile of the hill and the volunteer effort to keep it healthy.",
      href: "https://www.inglesidelight.com/san-francisco-lakeview-ashton-mini-park-lakeview-nature-stewards/",
      source: "Ingleside Light",
    },
    {
      title: "SF Gate — A secluded SF park with some of the best views",
      blurb:
        "A look at the hilltop, with a bit of neighborhood history thrown in.",
      href: "https://www.sfgate.com/local/article/secluded-sf-park-best-views-18383341.php",
      source: "SF Gate",
    },
    {
      title: "Ingleside Light — Ingleside / OMI mini parks",
      blurb:
        "An overview of the mini parks across Ingleside, Oceanview, and Merced Heights.",
      href: "https://www.inglesidelight.com/san-francisco-ingleside-mini-parks/",
      source: "Ingleside Light",
    },
  ],
};

export const contact = {
  eyebrow: "Get involved",
  title: "Come say hi on the hill.",
  body:
    "Whether you'd like to volunteer at a workday, ask a question about a plant, or just learn more — we'd love to hear from you.",
};
