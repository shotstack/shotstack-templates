# Weather Alert & Special Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 13s · **Format:** mp4 · **Category:** News

![Weather Alert & Special Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Weather_Alert_and_Special_Offer_Template_25a8fc14a6.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/weather-alert-special-offer-template-news-promo/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/weather-alert-special-offer-template-news-promo
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
news_slug,headline,status,font_color_1,font_color_2,shape_color,shape_color_2,video,image
```

| Field | Default value |
| --- | --- |
| `NEWS_SLUG` | Weather Report |
| `HEADLINE` | Clear Skies, Bright Sun |
| `STATUS` | LIVE WEATHER BROADCAST |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #f4c60b |
| `SHAPE_COLOR` | #0000ff |
| `SHAPE_COLOR_2` | #ff0000 |
| `VIDEO` | https://templates.shotstack.io/weather-alert-special-offer-template-news-promo/051ad092-74fb-40b4-a4dd-0598b976f900/source.mp4 |
| `IMAGE` | https://templates.shotstack.io/weather-alert-special-offer-template-news-promo/f725426d-e5e2-4ee3-8e60-875abdb076ab/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
