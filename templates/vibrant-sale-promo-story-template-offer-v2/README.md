# Vibrant Shopper Sale & Offer Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Vibrant Shopper Sale & Offer Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Vibrant_Shopper_Sale_and_Offer_Story_Template_6c9c32ed3d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/vibrant-sale-promo-story-template-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/vibrant-sale-promo-story-template-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
back_text_fill,back_text_stroke,font_color,background_color,web,image_src,image_src_2,image_src_3,image_src_4,image_src_5,audio_src
```

| Field | Default value |
| --- | --- |
| `Back_text_fill` | SHOP |
| `Back_text_stroke` | SHOP |
| `FONT_COLOR` | #f9f6f6 |
| `BACKGROUND_COLOR` | #eb7d00 |
| `Web` | WWW.FAZLUXURY.COM |
| `IMAGE_SRC` | https://templates.shotstack.io/vibrant-sale-promo-story-template-offer/e695fdd9-d1e6-4053-ab23-6d0b9e3ba06a/source.png |
| `IMAGE_SRC_2` | https://templates.shotstack.io/vibrant-sale-promo-story-template-offer/4167d035-70b7-4a52-95ec-cfd7d7f8ec39/source.png |
| `IMAGE_SRC_3` | https://templates.shotstack.io/vibrant-sale-promo-story-template-offer/a584d7d1-fc76-4d4a-b84b-09e65f89bede/source.png |
| `IMAGE_SRC_4` | https://templates.shotstack.io/vibrant-sale-promo-story-template-offer/43071018-7c23-477d-9b28-921afed2d5bf/source.png |
| `IMAGE_SRC_5` | https://templates.shotstack.io/vibrant-sale-promo-story-template-offer/fccfda57-1821-4a5c-9a2f-41352d6b2123/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/vibrant-sale-promo-story-template-offer/56911e03-7cbd-41ac-ba83-5a10f0c3bc24/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
