# Australian Getaway: Dynamic Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Travel

![Australian Getaway: Dynamic Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Australian_Getaway_Dynamic_Travel_Promotion_Template_1f9e256064.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/australia-travel-promotion-vacation-offer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/australia-travel-promotion-vacation-offer-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,title_3,cta,web,text_font_color,text_font_color_2,audio,video_1,video_2,video_3
```

| Field | Default value |
| --- | --- |
| `Title_1` | TAKE |
| `Title_2` | A VISIT |
| `Title_3` | TO AUSTRALIA |
| `CTA` | TRAVEL TODAY |
| `Web` | www.travellingsurvey.com |
| `TEXT_FONT_COLOR` | #000000 |
| `TEXT_FONT_COLOR_2` | #fafafa |
| `AUDIO` | https://templates.shotstack.io/australia-travel-promotion-vacation-offer-template/fdffe87b-265a-46ef-8897-9469efe372e2/source.mp3 |
| `VIDEO_1` | https://templates.shotstack.io/australia-travel-promotion-vacation-offer-template/7b24e5a8-6237-40ce-86e0-5b67376371cc/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/australia-travel-promotion-vacation-offer-template/56bfdb4c-0940-42e3-bb0d-c87f9dc96ef3/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/australia-travel-promotion-vacation-offer-template/5686b278-9000-49b7-9cf1-5971b727649b/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
