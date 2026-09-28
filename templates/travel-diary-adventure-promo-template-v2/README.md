# Travel Diary Adventure Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Travel Diary Adventure Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Travel_Diary_Adventure_Promotion_Template_242b2ab725.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-diary-adventure-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/travel-diary-adventure-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,place_1,place_2,place_3,place_4,cta,font_color_1,background_color,shape_color_1,font_color_2,shape_color_2,video_1,video_2,video_3,video_4,flag,audio
```

| Field | Default value |
| --- | --- |
| `Title` | TRAVEL DIARY |
| `Subtitle` | SHOW ONE: A TOUR IN NEW ZEALAND |
| `Place_1` | Auckland |
| `Place_2` | Queenstown |
| `Place_3` | Rotorua |
| `Place_4` | Christchurch |
| `CTA` | VIEW TODAY |
| `FONT_COLOR_1` | #ffffff |
| `BACKGROUND_COLOR` | #006fe6 |
| `SHAPE_COLOR_1` | #dedede |
| `FONT_COLOR_2` | #000000 |
| `SHAPE_COLOR_2` | #ffea00 |
| `VIDEO_1` | https://templates.shotstack.io/travel-diary-adventure-promo-template/dafc188a-fdcc-414e-8a1f-ab89489086d6/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/travel-diary-adventure-promo-template/2979b869-898e-4a1c-a1f7-2f7e89e76738/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/travel-diary-adventure-promo-template/62f9acf9-b056-45e7-b78b-644c6a4c99a1/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/travel-diary-adventure-promo-template/34735019-0650-4124-8a2d-6c6028c994df/source.mp4 |
| `Flag` | https://templates.shotstack.io/travel-diary-adventure-promo-template/077eae67-1433-4f8f-96ff-5d7ab35353fc/source.png |
| `AUDIO` | https://templates.shotstack.io/travel-diary-adventure-promo-template/6bd8a808-151c-4e43-8262-64215cb9391c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
