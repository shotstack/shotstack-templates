# New Year's Celebration Sale & Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 18s · **Format:** mp4 · **Category:** Celebrations

![New Year's Celebration Sale & Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/New_Year_s_Celebration_Sale_and_Offer_Template_40b34bd916.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/new-year-celebration-sale-offer-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/new-year-celebration-sale-offer-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,title_3,video_1,video_2,image_1,image_2,text_var_089,image_3,font_color,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | HAPPY |
| `Title_2` | N E W |
| `Title_3` | Y E A R |
| `VIDEO_1` | https://templates.shotstack.io/new-year-celebration-sale-offer-template/d3baed76-6a6d-43b4-a3f8-6b6212a9f983/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/new-year-celebration-sale-offer-template/0ed3e85a-a834-47b5-80ed-398c1564dc5f/source.mp4 |
| `IMAGE_1` | https://templates.shotstack.io/new-year-celebration-sale-offer-template/0c58c486-1dfc-4a93-b1e6-9f7fb3fb59aa/source.png |
| `IMAGE_2` | https://templates.shotstack.io/new-year-celebration-sale-offer-template/e0e7f38d-c9a2-41b6-af90-79a18f754741/source.png |
| `TEXT_VAR_089` | BRIGHT HORIZONS, EXCITING PATHS, AND TREASURED BONDS TO CARRY THROUGH. WISHING A YEAR FILLED WITH SMILES AND TIMELESS MOMENTS. |
| `IMAGE_3` | https://templates.shotstack.io/new-year-celebration-sale-offer-template/28f7ff22-7fb4-464c-94d6-d37e5bd831a3/source.png |
| `FONT_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/new-year-celebration-sale-offer-template/b844d0de-d1b8-4b7a-bb6e-9ba07a584297/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
