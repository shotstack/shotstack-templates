# Vibrant Spring Holiday Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Memories

![Vibrant Spring Holiday Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Vibrant_Spring_Holiday_Promotion_Template_c3a6b5bebc.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/vibrant-spring-holiday-promotion-template-sale-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/vibrant-spring-holiday-promotion-template-sale-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,s1_body,s1_video,s2_text,s2_video,s3_text,s3_video,s4_text,s4_video,social_handle,year,tag,element_1,element_2,font_color,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title_1` | SPRING |
| `S1_title_2` | Holiday |
| `S1_Body` | Soaking up joy and colorful days with me, feeling fresh breezes, bright skies, happy hearts, and endless cheerful moments together |
| `S1_VIDEO` | https://templates.shotstack.io/vibrant-spring-holiday-promotion-template-sale-offer/bb0a20ef-2c5d-45ef-bd3d-d8b451ba1310/source.mp4 |
| `S2_Text` | Planting, pruning, feeling spring bliss |
| `S2_VIDEO` | https://templates.shotstack.io/vibrant-spring-holiday-promotion-template-sale-offer/0c5faf11-74ec-41e9-9780-4e512fe01f3c/source.mp4 |
| `S3_Text` | Listening to waterfalls, hearts relax |
| `S3_VIDEO` | https://templates.shotstack.io/vibrant-spring-holiday-promotion-template-sale-offer/df29a1bd-9826-406d-8117-b29bec963d97/source.mp4 |
| `S4_Text` | Listening to waterfalls, hearts relax |
| `S4_VIDEO` | https://templates.shotstack.io/vibrant-spring-holiday-promotion-template-sale-offer/9c26d0fb-e39b-4062-b5e6-a07b32d86d40/source.mp4 |
| `Social_Handle` | @VACATIONSURVEY |
| `Year` | 2025 |
| `Tag` | VACATION |
| `Element_1` | https://templates.shotstack.io/vibrant-spring-holiday-promotion-template-sale-offer/718ff9ed-4a39-4ae7-8e4b-44233d4ac257/source.png |
| `Element_2` | https://templates.shotstack.io/vibrant-spring-holiday-promotion-template-sale-offer/3c28cfec-6e16-4f7a-ab99-59e0c2bf6c9f/source.png |
| `FONT_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/vibrant-spring-holiday-promotion-template-sale-offer/fa5d5cd2-4bd3-41d8-9b1a-c842630d5557/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
