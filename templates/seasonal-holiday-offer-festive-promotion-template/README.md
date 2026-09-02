# Seasonal Compliments Festive Holiday Promotions Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** Celebrations

![Seasonal Compliments Festive Holiday Promotions Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Seasonal_Compliments_Festive_Holiday_Promotions_Template_d165af3bdf.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/seasonal-holiday-offer-festive-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/seasonal-holiday-offer-festive-promotion-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,body,bell,social_handle,video_1,video_2,video_3,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | Season’s |
| `Title_2` | Greetings |
| `Body` | Here’s to a season full of happiness and sparkle. Christmas blessings to you! |
| `Bell` | https://templates.shotstack.io/warm-seasons-greetings-holiday-message-template/760cb92b-1f53-45e8-be06-127fa74a1486/source.png |
| `Social_Handle` | @holidays_wishes |
| `VIDEO_1` | https://templates.shotstack.io/warm-seasons-greetings-holiday-message-template/7b39dbe5-4c8b-466c-98aa-a33e15c1c090/source.m4v |
| `VIDEO_2` | https://templates.shotstack.io/warm-seasons-greetings-holiday-message-template/70727ddb-0fe7-43d8-88bd-97ffb370d73c/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/warm-seasons-greetings-holiday-message-template/5bbe86c8-162f-45ee-826b-4cda5dfdf7b7/source.m4v |
| `AUDIO` | https://templates.shotstack.io/warm-seasons-greetings-holiday-message-template/9d2a2c7c-152f-4854-b988-c4b4c7fa5dcb/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
