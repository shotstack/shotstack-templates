# Dynamic News & Promotions Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 20s · **Format:** mp4 · **Category:** News

![Dynamic News & Promotions Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_News_and_Promotions_Template_366b3303a0.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/dynamic-news-promotions-template-sales-offers-events/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/dynamic-news-promotions-template-sales-offers-events
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
reporter_1,reporter_2,reporter_3,news_slug_1,news_slug_2,video_1,video_2,video_background,text_font_color,text_font_color_2,video_3
```

| Field | Default value |
| --- | --- |
| `Reporter_1` | MADISON GABRIEL |
| `Reporter_2` | EMILY JACKSON |
| `Reporter_3` | MANUEL WYATT |
| `News_Slug_1` | NEWS UPDATE |
| `News_Slug_2` | LIVE FROM REPORTERS |
| `VIDEO_1` | https://templates.shotstack.io/dynamic-news-promotions-template-sales-offers-events/db92b045-45f6-44da-9943-d714015e1137/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/dynamic-news-promotions-template-sales-offers-events/1eb5ae71-fe41-4609-b401-c25640fcfab5/source.mp4 |
| `VIDEO_BACKGROUND` | https://templates.shotstack.io/dynamic-news-promotions-template-sales-offers-events/f0c2b0ed-a619-4b3a-8c34-a6e5c5d7dd10/source.mp4 |
| `TEXT_FONT_COLOR` | #0000a8 |
| `TEXT_FONT_COLOR_2` | #ffffff |
| `VIDEO_3` | https://templates.shotstack.io/dynamic-news-promotions-template-sales-offers-events/d495b7c1-6e30-40ee-8cc0-1e8df73f7633/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
