# Safe Travel Booking Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Safe Travel Booking Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Safe_Travel_Booking_Offer_Template_e64fc2fb79.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/safe-travel-offer-booking-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/safe-travel-offer-booking-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,cta,web,video,font_color,shape_color,background_color_2,audio
```

| Field | Default value |
| --- | --- |
| `Title` | TRAVEL THE WORLD SAFELY WITH US |
| `Subtitle` | Start Your Travels Here, Comfort And Care Come Standard. |
| `CTA` | BOOK TODAY |
| `Web` | www.flighthome.com |
| `VIDEO` | https://templates.shotstack.io/safe-travel-offer-booking-template/b548d075-a143-44f4-b0b7-292b4607b563/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #236886 |
| `BACKGROUND_COLOR_2` | #46a1c8 |
| `AUDIO` | https://templates.shotstack.io/safe-travel-offer-booking-template/e0903da5-d740-400d-92c3-e8b6792473c9/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
