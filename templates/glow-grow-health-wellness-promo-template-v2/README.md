# Glow & Grow: Health and Wellness Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 16.8s · **Format:** mp4 · **Category:** E-Commerce

![Glow & Grow: Health and Wellness Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Glow_and_Grow_Health_and_Wellness_Promotion_Template_acf6d5e651.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/glow-grow-health-wellness-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/glow-grow-health-wellness-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,news_slug,status,day,date,alert,font_color_1,font_color_2,shape_color_1,shape_color_2,video_1,video_2,video_background
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | President Biden and President Macron Sign Agreement to Strengthen Global Cooperation |
| `NEWS_SLUG` | NEWS UPDATE |
| `STATUS` | LIVE |
| `DAY` | SATURDAY, |
| `DATE` | AUGUST 30, 2025 |
| `ALERT` | NEWS CHANNEL NEWS CHANNEL NEWS CHANNEL NEWS CHANNEL NEWS CHANNEL NEWS CHANNEL NEWS CHANNEL NEWS CHANNEL NEWS CHANNEL |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `SHAPE_COLOR_1` | #0000ce |
| `SHAPE_COLOR_2` | #ce0000 |
| `VIDEO_1` | https://templates.shotstack.io/global-cooperation-news-update-template-sales-promo/3ae0695c-0079-44dc-bb3b-9c02804e8a4c/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/global-cooperation-news-update-template-sales-promo/bd132848-2371-478f-98bc-3dad2ee2f1a3/source.mp4 |
| `VIDEO_BACKGROUND` | https://templates.shotstack.io/global-cooperation-news-update-template-sales-promo/2f8f3ecb-48e7-4e42-89f2-066bd259511d/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
