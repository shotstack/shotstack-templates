# Photographic Vacation Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** Memories

![Photographic Vacation Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Photographic_Vacation_Promotion_Template_b640657000.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/photographic-vacation-promo-template-sale-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/photographic-vacation-promo-template-sale-offer-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,s1_video,s2_subtitle,s2_video_1,s2_video_2,s3_subtitle,s3_video_1,s3_video_2,s4_text,s4_video,font_color,shape_color,shape_color_2
```

| Field | Default value |
| --- | --- |
| `S1_Title` | Photographic Vacation |
| `S1_Subtitle` | RECAP |
| `S1_VIDEO` | https://templates.shotstack.io/photographic-vacation-promo-template-sale-offer/e067c265-a8d1-49e1-8d86-317d616b1f04/source.mp4 |
| `S2_Subtitle` | Not just sights, but feelings |
| `S2_VIDEO_1` | https://templates.shotstack.io/photographic-vacation-promo-template-sale-offer/4ef7eea8-5a33-45fc-b31b-b377161bc1e9/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/photographic-vacation-promo-template-sale-offer/b797a5e3-0e11-4d77-b700-7fafb6b29df0/source.mp4 |
| `S3_Subtitle` | The beauty was in the details |
| `S3_VIDEO_1` | https://templates.shotstack.io/photographic-vacation-promo-template-sale-offer/9282ee97-363b-46d5-a016-7c27b3bc4f04/source.mp4 |
| `S3_VIDEO_2` | https://templates.shotstack.io/photographic-vacation-promo-template-sale-offer/885fc38e-86a5-4981-a214-9169efc1bb33/source.mp4 |
| `S4_Text` | More journeys, more photos, more stories ahead |
| `S4_VIDEO` | https://templates.shotstack.io/photographic-vacation-promo-template-sale-offer/9c0b680e-c12b-4683-8e74-1e2065f5a921/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #c6210f |
| `SHAPE_COLOR_2` | #327ca0 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
