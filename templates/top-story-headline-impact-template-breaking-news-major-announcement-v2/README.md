# Top Story: Headline & Impact Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 20s · **Format:** mp4 · **Category:** News

![Top Story: Headline & Impact Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Top_Story_Headline_and_Impact_Template_dbed233254.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/top-story-headline-impact-template-breaking-news-major-announcement-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/top-story-headline-impact-template-breaking-news-major-announcement-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,news_slug,status,video_presenter,video,font_color_1,font_color_2,shape_color
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | ECONOMY ADJUSTS AS NEW DOLLAR RATE SHIFTS, IMPACTING TRADE, PRICES, AND MARKET STABILITY |
| `NEWS_SLUG` | TOP STORY |
| `STATUS` | LIVE |
| `VIDEO_PRESENTER` | https://templates.shotstack.io/top-story-headline-impact-template-breaking-news-major-announcement-critical-update/246a7e79-4bed-48d3-a63e-2138b30f2da4/source.mp4 |
| `VIDEO` | https://templates.shotstack.io/top-story-headline-impact-template-breaking-news-major-announcement-critical-update/45924650-4fda-4f83-a05c-6ece1f53b88e/source.mp4 |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #ffffff |
| `SHAPE_COLOR` | #c40202 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
