# Winter Break Promotional Collage Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Memories

![Winter Break Promotional Collage Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Winter_Break_Promotional_Collage_Template_ac35d82659.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/winter-break-sale-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/winter-break-sale-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,video_1,video_2,video_3,video_4,font_color,shape_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | WINTER BREAK |
| `VIDEO_1` | https://templates.shotstack.io/winter-break-sale-promo-template/fa82dedb-bfd2-42ad-8be9-b31744694928/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/winter-break-sale-promo-template/e3aef4a7-a2e2-47f1-b129-8b62c1a8cee9/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/winter-break-sale-promo-template/c1a4d9e3-9086-4d23-b1b7-29db6e21e40d/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/winter-break-sale-promo-template/67c9207a-c9d8-48fa-ae05-81373994eb8e/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #c6eaf0 |
| `AUDIO` | https://templates.shotstack.io/winter-break-sale-promo-template/06d46ac7-c6ac-4204-817c-890fa1a8123c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
