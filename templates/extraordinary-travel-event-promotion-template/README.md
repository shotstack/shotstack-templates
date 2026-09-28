# Extraordinary Travel & Event Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 25.5s · **Format:** mp4 · **Category:** Travel

![Extraordinary Travel & Event Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Extraordinary_Travel_and_Event_Promotion_Template_5e5f8f65dd.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/extraordinary-travel-event-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/extraordinary-travel-event-promotion-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle_1,s1_subtitle_2,web,s1_video,s2_subtitle_1,s2_subtitle_2,s2_video_1,s2_video_2,s3_subtitle_1,s3_subtitle_2,s3_video,s4_subtitle_1,s4_subtitle_2,s4_video_1,s4_video_2,s4_video_3,s5_subtitle_1,s5_subtitle_2,s5_subtitle_3,font_color,background_color,shape_color_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | TRIP REVIEW |
| `S1_Subtitle_1` | COME EXPERIENCE THE EXTRAORDINARY |
| `S1_Subtitle_2` | BELGIUM |
| `Web` | www.travelsurvey.com |
| `S1_VIDEO` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/2fb417ec-abdc-401d-bb11-3295a875b9a3/source.mp4 |
| `S2_Subtitle_1` | HISTORICAL |
| `S2_Subtitle_2` | CASTLES & FORTRESSESs |
| `S2_VIDEO_1` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/a9ce9830-cb98-4802-8053-20de3317aee2/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/c8811ada-4094-42a8-858a-78b8848296af/source.mp4 |
| `S3_Subtitle_1` | STREET ART |
| `S3_Subtitle_2` | ON CORNERS |
| `S3_VIDEO` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/67a96f1d-5afa-4319-8401-3ce90ae20048/source.mp4 |
| `S4_Subtitle_1` | STREET ART |
| `S4_Subtitle_2` | LAYERED, CHARMING |
| `S4_VIDEO_1` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/b86ea3c4-94a3-4074-a337-18016d28cc55/source.mp4 |
| `S4_VIDEO_2` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/381a2b7a-9380-4444-8c6d-2488f63ed8e3/source.mp4 |
| `S4_VIDEO_3` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/82e7e47a-e032-47e9-b5ee-0a6e363eeaac/source.mp4 |
| `S5_Subtitle_1` | DISCOVER BEAUTY HIDDEN IN ALL OF |
| `S5_Subtitle_2` | BELGIUM |
| `S5_Subtitle_3` | ON YOUR NEXT HOLIDAY |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #a502fd |
| `SHAPE_COLOR_2` | #000000 |
| `AUDIO` | https://templates.shotstack.io/extraordinary-travel-event-promotion-template/f284e4ec-45bf-479e-9827-fd1c949e6c68/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
