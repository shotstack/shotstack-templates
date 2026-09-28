# Quick Deal Promotional Flyer Template for Sales & Events

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Quick Deal Promotional Flyer Template for Sales & Events preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Quick_Deal_Promotional_Flyer_Template_for_Sales_and_Events_3889804113.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/quick-deal-sale-flyer-promo-template-discount-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/quick-deal-sale-flyer-promo-template-discount-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,image_src,discount,cta,web,phone,email,font_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Title_1` | SMART TECH |
| `Title_2` | QUICK DEAL |
| `IMAGE_SRC` | https://templates.shotstack.io/quick-deal-sale-flyer-promo-template-discount-offer/24e6393e-35cc-4dbf-8e3b-fa9a894d5cb5/source.png |
| `Discount` | 40% OFF |
| `CTA` | BUY TODAY |
| `Web` | www.techplaced.com |
| `Phone` | 123-455-3210 |
| `Email` | messagehere@email.com |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #45b599 |
| `AUDIO_SRC` | https://templates.shotstack.io/quick-deal-sale-flyer-promo-template-discount-offer/9ad93171-321a-4d29-8d42-ff2e32084f9a/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
