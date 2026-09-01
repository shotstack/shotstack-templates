# National Holiday Travel & Sales Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 16s · **Format:** mp4 · **Category:** Travel

![National Holiday Travel & Sales Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/National_Holiday_Travel_and_Sales_Promotion_Template_d5daa8407c.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/national-holiday-sale-promo-travel-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/national-holiday-sale-promo-travel-offer-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,s1_producer,s1_video,s2_video,s2_subtitle,s3_video_1,s3_video_2,s3_subtitle_1,s3_subtitle_2,s4_video,body,font_color_1,font_color_2,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_Title_1` | The |
| `S1_Title_2` | INDIA TOUR |
| `S1_Producer` | By Travel Survey |
| `S1_VIDEO` | https://templates.shotstack.io/national-holiday-sale-promo-travel-offer/02a217f0-a114-4f93-a298-65903aa01c33/source.mp4 |
| `S2_VIDEO` | https://templates.shotstack.io/national-holiday-sale-promo-travel-offer/1860e4d5-0589-4b06-b6bd-cd8d7191bae2/source.mp4 |
| `S2_Subtitle` | BUILDINGS |
| `S3_VIDEO_1` | https://templates.shotstack.io/national-holiday-sale-promo-travel-offer/2c9b0db0-24b2-4eb8-b17b-cea53f6333a4/source.mp4 |
| `S3_VIDEO_2` | https://templates.shotstack.io/national-holiday-sale-promo-travel-offer/94b5f042-180e-4ce0-b802-ad9f03064c27/source.mp4 |
| `S3_Subtitle_1` | CULTURE |
| `S3_subtitle_2` | FOOD |
| `S4_VIDEO` | https://templates.shotstack.io/national-holiday-sale-promo-travel-offer/7da81249-b12a-4646-b355-da53e84ec495/source.mp4 |
| `Body` | FROM THE COLORS OF JAIPUR TO THE CALM OF KERALA, INDIA IS PURE MAGIC. |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #f0dc00 |
| `BACKGROUND_COLOR` | #000000 |
| `AUDIO_SRC` | https://templates.shotstack.io/national-holiday-sale-promo-travel-offer/348ca736-3555-46d0-b153-986edfefb61c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
