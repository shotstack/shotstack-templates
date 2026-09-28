# Tropical Getaway Dream Holiday Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Travel

![Tropical Getaway Dream Holiday Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Tropical_Getaway_Dream_Holiday_Offer_Template_818314153f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/holiday-offer-template-travel-promotion-getaway-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/holiday-offer-template-travel-promotion-getaway-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,s1_year,web,s1_video,s2_image,s3_image,s4_image,s5_image,s6_image,s7_image,s8_video,s8_text,s8_cta,font_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | VACATION PLAN |
| `S1_Subtitle` | Prime Location |
| `S1_Year` | 2025 |
| `Web` | www.travelsurvey.com |
| `S1_VIDEO` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/3e7b7e90-9d24-426a-ab90-64061b83a05b/source.m4v |
| `S2_IMAGE` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/c9d7df43-5c4f-4022-933b-28089485c594/source.jpg |
| `S3_IMAGE` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/39a8eb88-ac00-416b-8f75-2450679fee04/source.jpg |
| `S4_IMAGE` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/d4bb793a-8b21-4bb9-9666-22d44f060bba/source.jpg |
| `S5_IMAGE` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/d9a0abab-cbef-46f3-b4ff-c19bf770fea5/source.jpg |
| `S6_IMAGE` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/cf4f2fe6-a661-42d8-99ba-a9b57459f139/source.jpg |
| `S7_IMAGE` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/499500af-f183-4f9f-bdbc-16f5cfbfe5bf/source.jpg |
| `S8_VIDEO` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/2b6bc3a2-b71f-492f-86a3-da7be4265850/source.m4v |
| `S8_Text` | your dream holiday awaits. |
| `S8_CTA` | Visit our site for the latest offer |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #2fb2e4 |
| `AUDIO` | https://templates.shotstack.io/holiday-offer-template-travel-promotion-getaway/4de5e3ac-b50c-40f2-8d4d-1ee0600cbac5/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
