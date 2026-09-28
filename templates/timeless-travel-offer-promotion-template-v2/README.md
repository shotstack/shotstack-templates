# Timeless Escape Special Offer

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10.7s · **Format:** mp4 · **Category:** Travel

![Timeless Escape Special Offer preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Timeless_Escape_Special_Offer_1f900d6bab.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/timeless-travel-offer-promotion-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/timeless-travel-offer-promotion-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,body,web,cta,font_color_1,font_color_2,video,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | Portugal Tour With |
| `Title_2` | Travel Survey Int. |
| `Body` | Craving a taste of tradition and discovery?....... Journey through Portugal’s timeless charm |
| `Web` | www.travelsurvey.com |
| `CTA` | Reserve Your Spot |
| `FONT_COLOR_1` | #050505 |
| `FONT_COLOR_2` | #ffffff |
| `VIDEO` | https://templates.shotstack.io/timeless-travel-offer-promotion-template/59f3058e-afc1-4bf9-9051-ca0f94862af1/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/timeless-travel-offer-promotion-template/59383ee9-3d30-4d05-b3af-c706b592369b/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
