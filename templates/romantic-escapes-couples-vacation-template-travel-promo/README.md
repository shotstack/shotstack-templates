#  Romantic Escapes Couples Vacation Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 9s · **Format:** mp4 · **Category:** Memories

![Romantic Escapes Couples Vacation Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Romantic_Escapes_Couples_Vacation_Template_c26bfb35e0.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/romantic-escapes-couples-vacation-template-travel-promo/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/romantic-escapes-couples-vacation-template-travel-promo
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,video_1,video_2,video_3,video_4,video_5,video_6,font_color,shape_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Couples Vacation |
| `Subtitle` | Every moment becomes magic when shared together |
| `VIDEO_1` | https://templates.shotstack.io/romantic-escapes-couples-vacation-template-travel-promo/21233c96-6fc4-45f3-8d44-6ff2193ed751/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/romantic-escapes-couples-vacation-template-travel-promo/7b6a1610-665f-47f4-b70e-35897fc28da9/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/romantic-escapes-couples-vacation-template-travel-promo/9d6aa46c-94cd-41f5-bf90-19d10d019233/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/romantic-escapes-couples-vacation-template-travel-promo/f194a6df-5219-434d-bc51-54dc984675fe/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/romantic-escapes-couples-vacation-template-travel-promo/1b4bf3ae-4c15-47f8-9b38-67a6c9872b8d/source.mp4 |
| `VIDEO_6` | https://templates.shotstack.io/romantic-escapes-couples-vacation-template-travel-promo/b2b05cdb-dd71-4a45-a263-f8f1c972909b/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #00cc6b |
| `BACKGROUND_COLOR` | #00f983 |
| `AUDIO` | https://templates.shotstack.io/romantic-escapes-couples-vacation-template-travel-promo/151153a2-4581-486a-8f93-492d55752c8f/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
