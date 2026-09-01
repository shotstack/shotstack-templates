# Summer Break Vacation Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Memories

![Summer Break Vacation Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Summer_Break_Vacation_Story_Template_8fa63fbf79.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/summer-break-vacation-promo-story-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/summer-break-vacation-promo-story-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
titlie_1,title_2,body,video_1,video_2,video_3,video_4,video_background,font_color_1,font_color_2,font_color_3,shape_color,audio
```

| Field | Default value |
| --- | --- |
| `Titlie_1` | SUMMER BREAK |
| `Title_2` | Vacation |
| `Body` | Here’s to sunshine, laughter, and days we’ll never forget |
| `VIDEO_1` | https://templates.shotstack.io/summer-break-vacation-promo-story-template/c2e48d12-8d25-4486-9a20-ead9572959f8/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/summer-break-vacation-promo-story-template/f6ce22d9-fab5-441b-bb5d-0d725c2ba1bd/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/summer-break-vacation-promo-story-template/9fd99526-b15f-4356-a0c4-a8c4c2768aeb/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/summer-break-vacation-promo-story-template/49c9da95-95fe-4780-845c-e33ca5d4fc81/source.mp4 |
| `VIDEO_BACKGROUND` | https://templates.shotstack.io/summer-break-vacation-promo-story-template/a2aeb6dd-7c6d-406c-a003-1d149c1349a1/source.mp4 |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #d9ef3a |
| `FONT_COLOR_3` | #000000 |
| `SHAPE_COLOR` | #ebebeb |
| `AUDIO` | https://templates.shotstack.io/summer-break-vacation-promo-story-template/e2ef0114-a120-48f4-8ea5-a34345f6b281/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
