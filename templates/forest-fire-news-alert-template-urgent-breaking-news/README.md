# Forest Fire News Alert

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 16s · **Format:** mp4 · **Category:** News

![Forest Fire News Alert preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Forest_Fire_News_Alert_d0be490cc9.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/forest-fire-news-alert-template-urgent-breaking-news/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/forest-fire-news-alert-template-urgent-breaking-news
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
heading,video_1,video_2,video_3,video_4,subheading_1,video_5,font_color,shape_color,background_color_2,subheading_2
```

| Field | Default value |
| --- | --- |
| `Heading` | MASSIVE FOREST FIRE ERUPTS |
| `VIDEO_1` | https://templates.shotstack.io/forest-fire-news-alert-template-urgent-breaking-news/69997a1f-c6d0-4ba9-ba94-94a24b6068e7/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/forest-fire-news-alert-template-urgent-breaking-news/d5e390f6-7bf6-4bdb-8218-43aceb84f5a2/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/forest-fire-news-alert-template-urgent-breaking-news/f7a56798-c68b-4dff-9037-0af3083058b2/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/forest-fire-news-alert-template-urgent-breaking-news/0b9f0aa2-e6af-4aad-a983-746383c938ce/source.mp4 |
| `Subheading_1` | Homes destroyed |
| `VIDEO_5` | https://templates.shotstack.io/forest-fire-news-alert-template-urgent-breaking-news/6799872c-e5ea-4722-b1b1-d32b5a7f7476/source.mp4 |
| `FONT_COLOR` | #000091 |
| `SHAPE_COLOR` | #ffffff |
| `BACKGROUND_COLOR_2` | #000091 |
| `Subheading_2` | in disaster |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
