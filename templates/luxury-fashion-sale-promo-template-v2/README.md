# Elegant Fashion Sale & New Arrival Promotional Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Elegant Fashion Sale & New Arrival Promotional Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elegant_Fashion_Sale_and_New_Arrival_Promotional_Template_6033c458fe.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/luxury-fashion-sale-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/luxury-fashion-sale-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,s1_title,s1_description,image_src,image_src_2,image_src_3,cta,black_font_color,pink_background_color,red_background_color_2,main_background_color_3,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | New Arrival |
| `S1_TITLE` | LUXURY FASHION |
| `S1_DESCRIPTION` | Experience the elegance of our latest collection where timeless fashion meets modern sophistication. |
| `IMAGE_SRC` | https://templates.shotstack.io/luxury-fashion-sale-promo-template/727b4f3c-6cf0-4c1f-9405-c80f0ee18011/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/luxury-fashion-sale-promo-template/8dde437d-7d5b-42d0-89b3-1841b144821a/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/luxury-fashion-sale-promo-template/e9f4fb28-3c30-4260-8b3e-6e4d6752cd87/source.jpg |
| `CTA` | Shop Now |
| `BLACK_FONT_COLOR` | #000000 |
| `PINK_BACKGROUND_COLOR` | #d86464 |
| `RED_BACKGROUND_COLOR_2` | #bc2929 |
| `MAIN_BACKGROUND_COLOR_3` | #ffb3b3 |
| `AUDIO_SRC` | https://templates.shotstack.io/luxury-fashion-sale-promo-template/71e7ff1a-80e2-45fb-9311-1addce68c504/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
