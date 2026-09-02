# Modern Trendsetter Sale & Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 6s · **Format:** mp4 · **Category:** E-Commerce

![Modern Trendsetter Sale & Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Trendsetter_Sale_and_Offer_Template_28d36db2dd.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-fashion-sale-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/modern-fashion-sale-promo-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,discount,cta,image,font_color,ribbon_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Title_1` | MODELLING |
| `Title_2` | TRENDS |
| `Discount` | SAVE UP TO 50% ON EVERY SALE |
| `CTA` | BUY NOW |
| `IMAGE` | https://templates.shotstack.io/modern-fashion-sale-promo-template/684be8a8-7dcb-4644-8852-c9797eb0dc46/source.png |
| `FONT_COLOR` | #000000 |
| `Ribbon_COLOR` | #e8b602 |
| `BACKGROUND_COLOR` | #eae3c3 |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-fashion-sale-promo-template/8dc61a38-4e0c-4c80-be84-46d577f8afef/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
