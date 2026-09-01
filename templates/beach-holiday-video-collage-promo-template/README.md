# Beach Holiday Video Collage template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Memories

![Beach Holiday Video Collage template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Beach_Holiday_Video_Collage_template_f41b128eb1.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/beach-holiday-video-collage-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/beach-holiday-video-collage-promo-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,body,video_1,video_2,video_3,video_4,image_background,font_color,shape_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Baech Holiday |
| `Body` | Stepping into a place where the ocean meets my escape, and every wave feels like a fresh beginning. |
| `VIDEO_1` | https://templates.shotstack.io/beach-holiday-video-collage-promo-template/95ac8c55-3927-4f49-ac3b-dc07ea29e5e6/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/beach-holiday-video-collage-promo-template/02dfef9b-e523-4642-adff-c376bb729aae/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/beach-holiday-video-collage-promo-template/0f8a5e58-3bef-49b8-9388-94b53300f597/source.m4v |
| `VIDEO_4` | https://templates.shotstack.io/beach-holiday-video-collage-promo-template/d98f8f24-8403-4a86-9859-cbb9e7761d6c/source.m4v |
| `IMAGE_BACKGROUND` | https://templates.shotstack.io/beach-holiday-video-collage-promo-template/a463c781-c156-44ca-bb59-8950e4760116/source.jpg |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #edede9 |
| `AUDIO` | https://templates.shotstack.io/beach-holiday-video-collage-promo-template/20e43960-acd5-4130-8afe-8525fabfadff/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
