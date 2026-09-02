# High-Impact Exclusive Deal & Sale Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 16.2s · **Format:** mp4 · **Category:** E-Commerce

![High-Impact Exclusive Deal & Sale Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/High_Impact_Exclusive_Deal_and_Sale_Promotion_Template_dc20c1b28d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/exclusive-deal-sale-template-limited-offer-promo/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/exclusive-deal-sale-template-limited-offer-promo
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,discount,cta_1,cta_2,font_color_1,font_color_2,background_color,image_4,image_3,image_2,image_1,audio_src
```

| Field | Default value |
| --- | --- |
| `Title` | EXCLUSIVE DEAL |
| `Discount` | SAVE 40% IN EVERY JEWELRY PURCHASE |
| `CTA_1` | DON'T MISS OUT, LIMITED TIME OFFER! |
| `CTA_2` | BUY TODAY |
| `FONT_COLOR_1` | #ffc21a |
| `FONT_COLOR_2` | #ffffff |
| `BACKGROUND_COLOR` | #000000 |
| `IMAGE_4` | https://templates.shotstack.io/exclusive-deal-sale-template-limited-offer-promo/83bbcdc9-beac-40dc-8e0d-99d2a58d514b/source.png |
| `IMAGE_3` | https://templates.shotstack.io/exclusive-deal-sale-template-limited-offer-promo/9dac7852-13c3-4ea3-9adc-da65d466b02c/source.png |
| `IMAGE_2` | https://templates.shotstack.io/exclusive-deal-sale-template-limited-offer-promo/6029d56b-6a9b-4f5d-93b2-12d452515d61/source.png |
| `IMAGE_1` | https://templates.shotstack.io/exclusive-deal-sale-template-limited-offer-promo/08b5356e-7154-49d1-b2d3-2b42f6d821aa/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/exclusive-deal-sale-template-limited-offer-promo/2331fe1a-5426-4018-ab6f-cffc0b0c1027/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
