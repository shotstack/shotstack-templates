# Exclusive Deal & Discount Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Exclusive Deal & Discount Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Exclusive_Deal_and_Discount_Offer_Template_3597c74171.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/exclusive-deal-sale-promotion-template-flyer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/exclusive-deal-sale-promotion-template-flyer
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,web,cta,discount,image,font_color_1,font_color_2,shape_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Title_1` | EXCLUSIVE |
| `Title_2` | DEAL |
| `Web` | www.fazwinebar.com |
| `CTA` | Buy Today |
| `Discount` | 30% OFF |
| `IMAGE` | https://templates.shotstack.io/exclusive-deal-sale-promotion-template-flyer/13ba5b40-0de3-4669-9166-186184096439/source.png |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `SHAPE_COLOR` | #9a834f |
| `BACKGROUND_COLOR` | #dace90 |
| `AUDIO_SRC` | https://templates.shotstack.io/exclusive-deal-sale-promotion-template-flyer/fb8bcf34-f3bf-4f06-9be2-444e4af2e43d/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
