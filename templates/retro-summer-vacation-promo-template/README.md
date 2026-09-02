# Retro Summer Vacation Promo

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 8s · **Format:** mp4 · **Category:** Memories

![Retro Summer Vacation Promo preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Retro_Summer_Vacation_Promo_6973e13e4e.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/retro-summer-vacation-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/retro-summer-vacation-promo-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,video_1,video_2,video_3,video_4,video_5,image_disc,video_backgroung,font_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Summer Vacation |
| `VIDEO_1` | https://templates.shotstack.io/retro-summer-vacation-promo-template/bd41a12f-4ab8-4955-8657-69c9ba20731d/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/retro-summer-vacation-promo-template/5038b758-8612-46e9-b7dc-53b1f8e60e33/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/retro-summer-vacation-promo-template/45acf803-5082-42ba-9fad-04898dec6658/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/retro-summer-vacation-promo-template/aa998789-68af-4f67-a57d-fc531823c3bd/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/retro-summer-vacation-promo-template/ee11494c-009b-4b80-a51b-9a7ac03487c6/source.mp4 |
| `IMAGE_Disc` | https://templates.shotstack.io/retro-summer-vacation-promo-template/9774b520-475c-4cda-b0cb-1cb6b47ef682/source.png |
| `VIDEO_BACKGROUNG` | https://templates.shotstack.io/retro-summer-vacation-promo-template/36fe0c19-4bde-42cd-b676-e41d3fb77486/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/retro-summer-vacation-promo-template/fec0462f-3518-43c3-bee8-deb5f0bce6f4/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
