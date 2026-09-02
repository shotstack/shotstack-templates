# Cozy Camping Holiday Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Memories

![Cozy Camping Holiday Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Cozy_Camping_Holiday_Promotion_Template_f68dee542e.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/cozy-camping-holiday-sale-template-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/cozy-camping-holiday-sale-template-offer
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,image_1,image_2,image_3,image_4,image_5,image_6,font_color,shape_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | CAMPING HOLIDAY |
| `Subtitle` | From building our little home under the trees… to cooking meals together by the fire |
| `IMAGE_1` | https://templates.shotstack.io/cozy-camping-holiday-sale-template-offer/614ad080-6a9d-4ca8-a868-857868626bca/source.png |
| `IMAGE_2` | https://templates.shotstack.io/cozy-camping-holiday-sale-template-offer/a9e05d7b-6907-4908-adce-1515da8a29ea/source.jpg |
| `IMAGE_3` | https://templates.shotstack.io/cozy-camping-holiday-sale-template-offer/52f6d4f9-f276-498c-a363-bbfe152520f4/source.jpg |
| `IMAGE_4` | https://templates.shotstack.io/cozy-camping-holiday-sale-template-offer/99b7ea49-96a2-4c8e-8d61-3b01c16512a0/source.png |
| `IMAGE_5` | https://templates.shotstack.io/cozy-camping-holiday-sale-template-offer/11328e1c-5d2d-4f70-afff-87de11ac5716/source.jpg |
| `IMAGE_6` | https://templates.shotstack.io/cozy-camping-holiday-sale-template-offer/7edb2154-5862-442c-9939-81c878c166fb/source.png |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #dbdbdb |
| `AUDIO` | https://templates.shotstack.io/cozy-camping-holiday-sale-template-offer/0b0756cb-3583-48c1-9fe7-5c08d7d4f66e/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
