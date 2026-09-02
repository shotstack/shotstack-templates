# Bold Poster Ad Animation

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Bold Poster Ad Animation preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Bold_Poster_Ad_Animation_85e27aa1bf.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/bold-poster-ad-animation/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/bold-poster-ad-animation
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,cta,text_font_color,dot_color,element_color,background_color_3,image_src,image_src_2,image_src_3,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | TRAVEL AGENCY |
| `DESCRIPTION` | Take You on a Journey (f a Lifetime, Unforgettable Destinations, Personalized Service, and Memories Forever! |
| `CTA` | BOOK NOW |
| `TEXT_FONT_COLOR` | #ffffff |
| `DOT_COLOR` | #ffffff |
| `ELEMENT_COLOR` | #209efe |
| `BACKGROUND_COLOR_3` | #183ac3 |
| `IMAGE_SRC` | https://templates.shotstack.io/Bold-Poster-Ad-Animation/ab078103-f3f5-4b34-80a1-47079803a346/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/Bold-Poster-Ad-Animation/4fa1957b-e623-4aa1-b7e4-0a3d2a02092d/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/Bold-Poster-Ad-Animation/e69699b3-8ec9-489c-be05-d5e7391db233/shotstack-proxy.webp |
| `AUDIO_SRC` | https://templates.shotstack.io/Bold-Poster-Ad-Animation/65eff9c8-bcb6-46c9-a71e-0de793b9b826/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
