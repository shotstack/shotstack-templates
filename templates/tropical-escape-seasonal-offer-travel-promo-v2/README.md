# Tropical Escape Seasonal Offer & Travel Promo Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 17s · **Format:** mp4 · **Category:** Memories

![Tropical Escape Seasonal Offer & Travel Promo Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Tropical_Escape_Seasonal_Offer_and_Travel_Promo_Template_be66e664d1.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/tropical-escape-seasonal-offer-travel-promo-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/tropical-escape-seasonal-offer-travel-promo-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,s1_video,s2_text,s2_video_1,s2_video_2,s2_video_3,s3_text_2,s3_text_1,s3_video,s4_text,s4_video,font_color_1,font_color_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title_1` | ESCAPE |
| `S1_Title_2` | Beach |
| `S1_VIDEO` | https://templates.shotstack.io/tropical-escape-seasonal-offer-travel-promo/1457e2f0-1259-461f-b93e-3d78da5b5854/source.mp4 |
| `S2_Text` | Enjoying the peaceful harmony of nature all around. |
| `S2_VIDEO_1` | https://templates.shotstack.io/tropical-escape-seasonal-offer-travel-promo/72958fdb-d34f-4d47-9709-714ea3b2c220/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/tropical-escape-seasonal-offer-travel-promo/26e3b1c6-c50a-42f4-ba0e-577d572d3f2b/source.mp4 |
| `S2_VIDEO_3` | https://templates.shotstack.io/tropical-escape-seasonal-offer-travel-promo/49cc3363-7315-43e7-90f1-79fd82bb0755/source.mp4 |
| `S3_Text_2` | stretching beyond sight |
| `S3_Text_1` | Horizon |
| `S3_VIDEO` | https://templates.shotstack.io/tropical-escape-seasonal-offer-travel-promo/654e63bb-35ef-4008-9dd5-bb3ed33148fe/source.mp4 |
| `S4_Text` | Let the ocean call |
| `S4_VIDEO` | https://templates.shotstack.io/tropical-escape-seasonal-offer-travel-promo/45d86119-0a26-4e1e-a20d-0887d46889aa/source.mp4 |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #29871f |
| `AUDIO` | https://templates.shotstack.io/tropical-escape-seasonal-offer-travel-promo/7c4e28b0-a19b-45ae-8229-f75d01311241/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
