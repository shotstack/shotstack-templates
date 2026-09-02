# Carnival Deal Promotional Flyer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Carnival Deal Promotional Flyer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Carnival_Deal_Promotional_Flyer_Template_a8ac5cc745.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/carnival-sale-promo-flyer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/carnival-sale-promo-flyer-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,subtitle,discount,cta,image,font_color,text_background_color,background_color_2,audio_src
```

| Field | Default value |
| --- | --- |
| `Title_1` | CARNIVAL |
| `Title_2` | DEAL |
| `Subtitle` | Elevate Your Home |
| `Discount` | SAVE UP TO 30% |
| `CTA` | BUY TODAY |
| `IMAGE` | https://templates.shotstack.io/carnival-sale-promo-flyer-template/716b475b-229f-49ad-a4c6-a445472334cd/source.png |
| `FONT_COLOR` | #ffffff |
| `TEXT_BACKGROUND_COLOR` | #872403 |
| `BACKGROUND_COLOR_2` | #ff5900 |
| `AUDIO_SRC` | https://templates.shotstack.io/carnival-sale-promo-flyer-template/6d7f74f2-3606-421c-bdfb-4c82a95cf81c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
