# Sky High Sales & Adventure Promo Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Travel

![Sky High Sales & Adventure Promo Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Sky_High_Sales_and_Adventure_Promo_Template_a9835d08b8.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/sky-high-sales-promo-event-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/sky-high-sales-promo-event-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,font_color_1,subtitle_1,subtitle_2,font_color_2,s1_video,s2_video_1,s2_video_2,s3_video,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Sky Diving |
| `FONT_COLOR_1` | #faffff |
| `Subtitle_1` | AIR FEEL |
| `Subtitle_2` | ELECTRIFY RUSH OF FREEDOM |
| `FONT_COLOR_2` | #ffd500 |
| `S1_VIDEO` | https://templates.shotstack.io/sky-high-sales-promo-event-template/2433cd25-11a2-4be8-bb40-58519299579c/source.mp4 |
| `S2_VIDEO_1` | https://templates.shotstack.io/sky-high-sales-promo-event-template/4ce942eb-7a38-411c-993f-01bd5b319458/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/sky-high-sales-promo-event-template/f3d3483c-5b0f-4d94-bd89-9b64757d6674/source.mp4 |
| `S3_VIDEO` | https://templates.shotstack.io/sky-high-sales-promo-event-template/94ce873b-c850-430a-bf07-b9230fb9dd05/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/sky-high-sales-promo-event-template/0d9979a1-f453-49fd-b9a9-640bfd83f489/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
