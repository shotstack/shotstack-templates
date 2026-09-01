# Holiday Promotional Reel Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 11s · **Format:** mp4 · **Category:** Memories

![Holiday Promotional Reel Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Holiday_Promotional_Reel_Template_9b832b9ad6.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/holiday-promo-reel-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/holiday-promo-reel-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,video_1,video_2,video_3,subtitle,video_4,video_5,video_6,font_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | My Holiday Reel |
| `VIDEO_1` | https://templates.shotstack.io/holiday-promo-reel-template/3ebfcdc0-1edd-4051-aded-a30247a2f69a/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/holiday-promo-reel-template/a61cbad3-7cfd-4ade-88cf-57e9bf2a028a/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/holiday-promo-reel-template/70ecff47-5717-4bbf-aa7b-e7c3655484a5/source.mp4 |
| `Subtitle` | Breathing beyond routine |
| `VIDEO_4` | https://templates.shotstack.io/holiday-promo-reel-template/04bffe7d-7891-4481-9b16-334c74d8acfb/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/holiday-promo-reel-template/6a07f2a0-7e8c-4143-ba1a-044dbdeff143/source.mp4 |
| `VIDEO_6` | https://templates.shotstack.io/holiday-promo-reel-template/84e156e6-906e-45ab-9b5a-d5531e2d91e0/source.mp4 |
| `FONT_COLOR` | #000000 |
| `BACKGROUND_COLOR` | #f7f7f4 |
| `AUDIO` | https://templates.shotstack.io/holiday-promo-reel-template/cfdd1e1c-4329-4c58-99ea-b5490504223f/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
