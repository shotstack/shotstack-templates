#  Family Moments Collage Seasonal & Event Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Memories

![Family Moments Collage Seasonal & Event Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Family_Moments_Collage_Seasonal_and_Event_Promotion_Template_d1ea02946a.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/family-moments-promo-collage-template-seasonal-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/family-moments-promo-collage-template-seasonal-offer
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,video_1,video_2,video_3,video_4,video_5,video_6,font_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | A Happy Family Vacation Recap |
| `VIDEO_1` | https://templates.shotstack.io/family-moments-promo-collage-template-seasonal-offer/3fd19d1f-efeb-4a7d-8510-2e1b54c76771/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/family-moments-promo-collage-template-seasonal-offer/0058a6c5-755d-42fb-b2da-31f30cc63b56/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/family-moments-promo-collage-template-seasonal-offer/4611111b-fe17-4aa1-8208-5df3a77e3c69/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/family-moments-promo-collage-template-seasonal-offer/e6c36597-6f1f-494e-b70a-74630f162ecc/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/family-moments-promo-collage-template-seasonal-offer/3f651826-1c52-42bc-9e75-4b08f3d9d1df/source.mp4 |
| `VIDEO_6` | https://templates.shotstack.io/family-moments-promo-collage-template-seasonal-offer/6fe97982-cac7-4fcc-805a-d4402a2f9585/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/family-moments-promo-collage-template-seasonal-offer/9701ea98-fd73-4c60-b1c8-a08865ea457c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
