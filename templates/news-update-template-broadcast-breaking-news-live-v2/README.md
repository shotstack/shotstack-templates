# News Update Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 30s · **Format:** mp4 · **Category:** News

![News Update Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/News_Update_Template_f2adef87fa.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/news-update-template-broadcast-breaking-news-live-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/news-update-template-broadcast-breaking-news-live-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,news_slug,presenter,status,time,video_presenter,video_story,video_background,font_color_1,font_color_2,shape_color
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | Massive Traffic Congestion Brings City Roads to a Standstill, Disrupting Daily Life and Frustrating Commuters Everywhere |
| `NEWS_SLUG` | NEWS UPDATE |
| `PRESENTER` | MARIAM JOHN |
| `STATUS` | LIVE |
| `TIME` | SINCE YESTERDAY |
| `VIDEO_PRESENTER` | https://templates.shotstack.io/news-update-template-broadcast-breaking-news-live/2a735e41-3669-4462-8ccb-7bade42e075c/source.mp4 |
| `VIDEO_STORY` | https://templates.shotstack.io/news-update-template-broadcast-breaking-news-live/dba5dd05-88c5-4039-b8f4-c4c8bfaa0adb/source.mp4 |
| `VIDEO_BACKGROUND` | https://templates.shotstack.io/news-update-template-broadcast-breaking-news-live/0a85481a-c0f6-4ea8-a8d0-e1ed6c7de01d/source.mp4 |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `SHAPE_COLOR` | #d20000 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
