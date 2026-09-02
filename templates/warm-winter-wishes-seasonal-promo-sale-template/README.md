# Warm Winter Wishes Seasonal Promotion & Sale Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 20s · **Format:** mp4 · **Category:** Celebrations

![Warm Winter Wishes Seasonal Promotion & Sale Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Warm_Winter_Wishes_Seasonal_Promotion_and_Sale_Template_bce2e0c10d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/warm-winter-wishes-seasonal-promo-sale-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/warm-winter-wishes-seasonal-promo-sale-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,video_1,video_2,video_3,background_image,font_color,shape_color_1,shape_color_2,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Warm Winter Wishes |
| `Subtitle` | Dance lightly beneath winter skies. |
| `VIDEO_1` | https://templates.shotstack.io/warm-winter-wishes-seasonal-promo-sale-template/17f45597-8b40-40a8-881c-d5abea5490a6/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/warm-winter-wishes-seasonal-promo-sale-template/e55a3111-9adf-4f31-9d82-e1ee8b67842d/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/warm-winter-wishes-seasonal-promo-sale-template/eaeb7bc4-5a7a-4a1a-937f-de0df89762f6/source.mp4 |
| `BACKGROUND_IMAGE` | https://templates.shotstack.io/warm-winter-wishes-seasonal-promo-sale-template/171c3985-3a17-4374-8cb6-471640c69c3d/source.jpg |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR_1` | #367a94 |
| `SHAPE_COLOR_2` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/warm-winter-wishes-seasonal-promo-sale-template/7330d94a-33e1-4462-b67e-197b75bf2a01/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
