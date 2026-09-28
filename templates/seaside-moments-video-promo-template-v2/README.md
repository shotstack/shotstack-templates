# Seaside Moments Video Story Promo Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** Memories

![Seaside Moments Video Story Promo Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Seaside_Moments_Video_Story_Promo_Template_1900ddb16d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/seaside-moments-video-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/seaside-moments-video-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,s1_video,s2_subtitle,s2_body,s2_video_1,s2_video_2,s3_subtitle,s3_body,s3_video,s4_subtitle,s4_body,s4_video_1,s4_video_2,s5_subtitle,s5_body,s5_video,font_color_1,font_color_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | Seaside Moments to Remember |
| `S1_Subtitle` | Nothing heals the soul quite like the ocean’s rhythm |
| `S1_VIDEO` | https://templates.shotstack.io/seaside-moments-video-promo-template/d2089ef3-1ef0-403d-8fc4-90bdec373c36/source.mp4 |
| `S2_Subtitle` | Sitting by the waves |
| `S2_Body` | laughing with my friend. |
| `S2_VIDEO_1` | https://templates.shotstack.io/seaside-moments-video-promo-template/5fdd3076-03c0-4d9c-b200-47089d556880/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/seaside-moments-video-promo-template/18003c48-80f5-461d-bccf-535e96994314/source.mp4 |
| `S3_Subtitle` | Running along the shoreline |
| `S3_Body` | Feeling the sand under your feet while waves chase you. |
| `S3_VIDEO` | https://templates.shotstack.io/seaside-moments-video-promo-template/b4b5e19f-6532-4db8-aa99-5c0049a300d8/source.mp4 |
| `S4_Subtitle` | Waves gently lapping the shore |
| `S4_Body` | soft ripples rolling in rhythm |
| `S4_VIDEO_1` | https://templates.shotstack.io/seaside-moments-video-promo-template/120536e8-9fcd-4aa2-be5c-568ad7ad3498/source.mp4 |
| `S4_VIDEO_2` | https://templates.shotstack.io/seaside-moments-video-promo-template/8c415ef8-ff3e-47d2-a224-8cbb4017e3a4/source.mp4 |
| `S5_Subtitle` | A perfect day of waves |
| `S5_Body` | rolling gently, sparkling under the sun, bringing calm to every moment |
| `S5_VIDEO` | https://templates.shotstack.io/seaside-moments-video-promo-template/9e8d5b7d-50e8-440f-baba-ac1132c8efb7/source.mp4 |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/seaside-moments-video-promo-template/0b41bc2f-8d7e-4479-a225-6cf8ca95f7c2/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
