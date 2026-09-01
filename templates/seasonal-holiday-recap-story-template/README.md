# Fresh Memories: Seasonal Holiday Recap & Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Memories

![Fresh Memories: Seasonal Holiday Recap & Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Fresh_Memories_Seasonal_Holiday_Recap_and_Story_Template_4dd560eb74.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/seasonal-holiday-recap-story-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/seasonal-holiday-recap-story-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,cta,hook,social_handle,image_1,image_2,image_3,image_4,image_5,image_6,image_7,font_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Spring Flavors |
| `Subtitle` | Fresh Memories |
| `CTA` | Stay Tuned |
| `Hook` | More flavors ahead. |
| `Social_Handle` | @flavorsurvey |
| `IMAGE_1` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/9283d74d-86ac-43da-805f-7b652d6db171/source.jpg |
| `IMAGE_2` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/48f0d529-4226-4fdd-a387-40331f195474/source.jpg |
| `IMAGE_3` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/6068192d-6be7-42c3-8a82-f532416eecb3/source.jpg |
| `IMAGE_4` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/672ace93-6c4d-40f5-9910-166350fe31c1/source.jpg |
| `IMAGE_5` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/31688841-dd76-456a-bedc-dd4d8bdd0941/source.jpg |
| `IMAGE_6` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/29f2de9c-04c1-4a40-a7a8-9e9c5e6e8740/source.jpg |
| `IMAGE_7` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/48ded994-377c-4c60-a9c6-e2be065776e1/source.jpg |
| `FONT_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/seasonal-holiday-recap-story-template/61658507-ca62-47de-879d-fe0e47283186/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
