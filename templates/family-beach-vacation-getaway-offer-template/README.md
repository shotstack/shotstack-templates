# Family Beach Vacation Getaway Offer

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 30s · **Format:** mp4 · **Category:** Memories

![Family Beach Vacation Getaway Offer preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Family_Beach_Vacation_Getaway_Offer_938f27d258.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/family-beach-vacation-getaway-offer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/family-beach-vacation-getaway-offer-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,web,background_video_1,background_video_2,background_video_3,video_1,video_2,font_color_1,font_color_2,shape_color,background_color_2,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | Family Beach |
| `Title_2` | Vacation |
| `Web` | www.holidaysurvey.com |
| `BACKGROUND_VIDEO_1` | https://templates.shotstack.io/family-beach-vacation-getaway-offer-template/b111b77d-9fb7-4840-8e75-76740356771c/source.mp4 |
| `BACKGROUND_VIDEO_2` | https://templates.shotstack.io/family-beach-vacation-getaway-offer-template/ac9cafa6-1a35-41cb-aa5c-32167fd2a081/source.mp4 |
| `BACKGROUND_VIDEO_3` | https://templates.shotstack.io/family-beach-vacation-getaway-offer-template/852620c8-5fd3-4912-8ef5-89b68e04b7fa/source.mp4 |
| `VIDEO_1` | https://templates.shotstack.io/family-beach-vacation-getaway-offer-template/b4bbb778-ea9c-4f73-b4db-8a587ef738c5/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/family-beach-vacation-getaway-offer-template/b775c8ff-08dc-486c-ac25-dc814d99afe4/source.mp4 |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #36b3e2 |
| `SHAPE_COLOR` | #e3e0d7 |
| `BACKGROUND_COLOR_2` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/family-beach-vacation-getaway-offer-template/5265b744-9fe9-4ed2-9c40-515186b2040a/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
