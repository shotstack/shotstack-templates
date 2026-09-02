# Airfly Travel: Promotional Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 14s · **Format:** mp4 · **Category:** Travel

![Airfly Travel: Promotional Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Airfly_Travel_Promotional_Offer_Template_809509a039.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-offer-template-airfly-flight-deals-promo-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/travel-offer-template-airfly-flight-deals-promo-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,body,subtitle,video_1,video_2,font_color,background_color,social_handle,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Artistry Holiday |
| `Body` | A holiday filled with culture & inspiration |
| `Subtitle` | Walking Inside Creativity |
| `VIDEO_1` | https://templates.shotstack.io/art-holiday-cultural-event-story-template/0f7b70d4-e2c9-4cf1-a58c-042835667b45/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/art-holiday-cultural-event-story-template/6c0ee0f9-5fec-4079-864e-757c7e688b33/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #d3b91f |
| `Social_Handle` | @vacationsurvey |
| `AUDIO` | https://templates.shotstack.io/art-holiday-cultural-event-story-template/7e8221bd-ba34-4fc1-a29c-2a88ff266f32/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
