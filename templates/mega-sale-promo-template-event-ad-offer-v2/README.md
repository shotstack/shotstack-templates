# Modern Mega Sale Event Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5.8s · **Format:** mp4 · **Category:** E-Commerce

![Modern Mega Sale Event Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Mega_Sale_Event_Promotion_Template_3c39671401.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/mega-sale-promo-template-event-ad-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/mega-sale-promo-template-event-ad-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,sub_title_1,sub_tittle_2,cta,product_1,product_2,product_3,web,discount,font_color_1,font_color_2,background_color,audio_src,stand_1,stand_2,stand_3
```

| Field | Default value |
| --- | --- |
| `Title` | MEGA |
| `Sub_title_1` | SALES DAY |
| `Sub_tittle_2` | NOW OR NEVER |
| `CTA` | ORDER NOW |
| `Product_1` | https://templates.shotstack.io/mega-sale-promo-template-event-ad-offer/ad189949-f898-4971-89b7-31dee1faa841/source.png |
| `Product_2` | https://templates.shotstack.io/mega-sale-promo-template-event-ad-offer/9f13d92f-31fd-44ca-b374-7c7c671d361f/source.png |
| `Product_3` | https://templates.shotstack.io/mega-sale-promo-template-event-ad-offer/ccf7da58-c77e-45d1-9d0e-9a96c3465bdf/source.png |
| `Web` | www.fittinngbags.com |
| `Discount` | 50% OFF |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #ff0000 |
| `BACKGROUND_COLOR` | #4d4c4c |
| `AUDIO_SRC` | https://templates.shotstack.io/mega-sale-promo-template-event-ad-offer/1d113200-af53-4576-b74f-cb8770b12f36/source.mp3 |
| `Stand_1` | https://templates.shotstack.io/mega-sale-promo-template-event-ad-offer/6a661db9-b600-4916-848f-26ab57e3f661/source.png |
| `Stand_2` | https://templates.shotstack.io/mega-sale-promo-template-event-ad-offer/5039b6dd-bc9f-4887-84af-083020ab1a7b/source.png |
| `Stand_3` | https://templates.shotstack.io/mega-sale-promo-template-event-ad-offer/5bed6128-9a35-46da-9c97-b05018c1181a/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
