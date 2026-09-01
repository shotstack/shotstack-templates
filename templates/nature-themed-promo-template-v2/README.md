# Nature-Themed Promo Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Memories

![Nature-Themed Promo Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Nature_Themed_Promo_Template_17c83eb129.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/nature-themed-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/nature-themed-promo-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,video_1,video_2,video_3,video_4,video_5,video_6,font_color,shape_color,background_color_2,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Nature-themed visit |
| `Subtitle` | Wild memories, tamed in time. |
| `VIDEO_1` | https://templates.shotstack.io/nature-themed-promo-template/49b48e8b-99ca-4e44-9f62-24ff62fdaca1/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/nature-themed-promo-template/6677376a-48f9-4080-b8d8-a606c3fbe638/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/nature-themed-promo-template/974dad58-1946-454e-b963-f1e2c26dbe3c/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/nature-themed-promo-template/7cbf62c9-76c1-49b4-a55b-3b5e0f9daeca/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/nature-themed-promo-template/c56f5f75-e5f4-4344-9ef2-17cd93a43c77/source.mp4 |
| `VIDEO_6` | https://templates.shotstack.io/nature-themed-promo-template/7eb42462-01e8-42cb-914c-01a7ab36fd7d/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #ffffff |
| `BACKGROUND_COLOR_2` | #936b62 |
| `AUDIO` | https://templates.shotstack.io/nature-themed-promo-template/6e3c7058-a6c0-4f3e-8a8e-2c7c5953029b/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
