# Breaking News & Updates Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 15s · **Format:** mp4 · **Category:** News

![Breaking News & Updates Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Breaking_News_and_Updates_Template_80b9e9efbd.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/breaking-news-updates-template-marketing-campaign-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/breaking-news-updates-template-marketing-campaign-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
news_slug,web,video,font_color_1,font_color_2,status,shape_color,shape_color_2
```

| Field | Default value |
| --- | --- |
| `NEWS_SLUG` | NEWS UPDATE |
| `WEB` | NEWSSURVEY.COM |
| `VIDEO` | https://templates.shotstack.io/breaking-news-updates-template-marketing-campaign/38ec4431-b93d-4b98-86c8-131407f39197/source.mp4 |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #ffffff |
| `STATUS` | LIVE |
| `SHAPE_COLOR` | #c10000 |
| `SHAPE_COLOR_2` | #e4e4e4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
