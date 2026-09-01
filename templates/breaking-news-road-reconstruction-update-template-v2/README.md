# Breaking News - Road Reconstruction Update

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 30s · **Format:** mp4 · **Category:** News

![Breaking News - Road Reconstruction Update preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Breaking_News_Road_Reconstruction_Update_0a54b94c4d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/breaking-news-road-reconstruction-update-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/breaking-news-road-reconstruction-update-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,cta,web,news_slug,text_font_color,text_font_color_2,text_background_color,text_background_color_2
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | Government begins major road reconstruction across key cities. |
| `CTA` | MORE INFO. |
| `WEB` | www.newssurveymat.com |
| `NEWS_SLUG` | BREAKING NEWS |
| `TEXT_FONT_COLOR` | #000000 |
| `TEXT_FONT_COLOR_2` | #ffffff |
| `TEXT_BACKGROUND_COLOR` | #0000a8 |
| `TEXT_BACKGROUND_COLOR_2` | #ce0000 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
