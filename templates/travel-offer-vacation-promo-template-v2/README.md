# Vacation & Travel Deal Promotional Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Vacation & Travel Deal Promotional Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Vacation_and_Travel_Deal_Promotional_Template_819a8139b1.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-offer-vacation-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/travel-offer-vacation-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,subtitle,cta,font_color_1,font_color_2,background_color,image_1,image_2,image_3,background_image,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | Take a |
| `Title_2` | TOUR IN PARIS |
| `Subtitle` | Enjoy Seamless Paris Travel with Packages from Just $499 Per Person |
| `CTA` | PLAN TRIP |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #de5912 |
| `BACKGROUND_COLOR` | #ffffff |
| `IMAGE_1` | https://templates.shotstack.io/travel-offer-vacation-promo-template/449ddc72-ea5a-440a-a579-b403d9b3d5ce/source.png |
| `IMAGE_2` | https://templates.shotstack.io/travel-offer-vacation-promo-template/43bd0363-5119-4820-8551-bfb831b3b7b7/source.png |
| `IMAGE_3` | https://templates.shotstack.io/travel-offer-vacation-promo-template/d7360561-13da-4585-89fc-1f92ef8893d5/source.png |
| `BACKGROUND_IMAGE` | https://templates.shotstack.io/travel-offer-vacation-promo-template/f2d242f0-fe6e-403a-a090-65fea2d487b9/source.jpg |
| `AUDIO` | https://templates.shotstack.io/travel-offer-vacation-promo-template/25f540b1-7e81-4b91-b692-e43961828788/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
