# Epic Journey Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Travel

![Epic Journey Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Epic_Journey_Travel_Promotion_Template_7a3733cf0a.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/epic-journey-travel-offer-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/epic-journey-travel-offer-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,body,cta,phone,font_color,shape_color,background_color_2,audio_src
```

| Field | Default value |
| --- | --- |
| `Title_1` | EPIC |
| `Title_2` | JOURNEY |
| `Body` | Set off on an unforgettable escape and discover stunning scenery in one of the world's most enchanting locations. |
| `CTA` | BOOK TODAY |
| `Phone` | 001-234-5678 |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR` | #ffffff |
| `BACKGROUND_COLOR_2` | #ead56c |
| `AUDIO_SRC` | https://templates.shotstack.io/epic-journey-travel-offer-promo-template/5df0fddb-8e57-43ce-a9d9-178c6efdd03e/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
