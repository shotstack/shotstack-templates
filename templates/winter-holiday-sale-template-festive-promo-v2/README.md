# Winter Break Festive Holiday Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Winter Break Festive Holiday Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Winter_Break_Festive_Holiday_Promotion_Template_e9f4bf6ace.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/winter-holiday-sale-template-festive-promo-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/winter-holiday-sale-template-festive-promo-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle_1,subtitle_2,social_handle,font_color,shape_color,video,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Festive Holiday |
| `Subtitle_1` | WINTER |
| `Subtitle_2` | BREAK |
| `Social_handle` | @holidaysurvey |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #fcfcfc |
| `VIDEO` | https://templates.shotstack.io/winter-holiday-sale-template-festive-promo/f00ba50c-bcd7-4cef-bc0e-8807ba2ecd77/source.m4v |
| `AUDIO` | https://templates.shotstack.io/winter-holiday-sale-template-festive-promo/f3ebdced-f3db-43e2-8322-05a7ad1d50e7/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
