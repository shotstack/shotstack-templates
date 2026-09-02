# Winter Vacation Promotions Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 25s · **Format:** mp4 · **Category:** Memories

![Winter Vacation Promotions Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Winter_Vacation_Promotions_Template_d7f5542eb9.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/winter-vacation-promotions-template-seasonal-offers-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/winter-vacation-promotions-template-seasonal-offers-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,s1_video_1,s1_video_2,s1_video_3,s1_video_4,s2_text_1,s2_text_2,s2_video_1,s2_video_background,s3_social_handle,s3_text,s3_video,font_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `S1_title` | WINTER VACATION |
| `S1_Subtitle` | Heartfelt moments with family and friends |
| `S1_VIDEO_1` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/a5752f70-eada-4130-a8ed-51d6c61b7505/source.mp4 |
| `S1_VIDEO_2` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/58a20040-9434-48ab-9c5b-3a6599855e24/source.mp4 |
| `S1_VIDEO_3` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/bcdb815d-e054-4c7e-bdad-34125ca1480d/source.mp4 |
| `S1_VIDEO_4` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/f53dc7e9-8d3b-4b66-8ae8-c6d2afd158d0/source.mp4 |
| `S2_Text_1` | sledding with my kids and husband too |
| `S2_Text_2` | sledding or tobogganing with my kids |
| `S2_VIDEO_1` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/86352d93-09a2-47ae-b465-b4f4d5d84003/source.mp4 |
| `S2_VIDEO_BACKGROUND` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/1dae8fe4-bca2-4c7f-b83f-f7e3e94cc25e/source.mp4 |
| `S3_Social_Handle` | @holidaysurvey |
| `S3_Text` | Cherished memories in every moment |
| `S3_VIDEO` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/5f4d6c59-520d-4ee2-b781-89cee188657f/source.mp4 |
| `FONT_COLOR` | #000000 |
| `BACKGROUND_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/winter-vacation-promotions-template-seasonal-offers/f2008532-9d47-4018-b59a-67593112f42a/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
