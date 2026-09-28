# Breaking News Channel Template for Urgent Announcements

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 18.5s · **Format:** mp4 · **Category:** News

![Breaking News Channel Template for Urgent Announcements preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Breaking_News_Channel_Template_for_Urgent_Announcements_895afe7eb3.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/breaking-news-channel-template-urgent-announcements-sales-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/breaking-news-channel-template-urgent-announcements-sales-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,news_slug,date,font_color,shape_color_1,shape_color_2,video_1,video_2
```

| Field | Default value |
| --- | --- |
| `Headline` | Thousands of protesters gather in the city center, demanding change as demonstrations grow nationwide. |
| `News_Slug` | BREAKING NEWS |
| `Date` | 29, AUGUST 2025 |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR_1` | #ff0000 |
| `SHAPE_COLOR_2` | #000000 |
| `VIDEO_1` | https://templates.shotstack.io/breaking-news-channel-template-urgent-announcements-sales/f67a2f37-425b-4e2e-b0a4-2f73ddbbed79/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/breaking-news-channel-template-urgent-announcements-sales/fe80460c-1883-41ee-864f-87270fdb36ce/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
