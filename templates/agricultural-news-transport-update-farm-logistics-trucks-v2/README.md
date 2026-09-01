# Agricultural News & Transport Update

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** News

![Agricultural News & Transport Update preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Agricultural_News_and_Transport_Update_0caf5e415e.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/agricultural-news-transport-update-farm-logistics-trucks-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/agricultural-news-transport-update-farm-logistics-trucks-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_slug_1,s1_slug_2,web,s2_slug_1,s2_slug_2,s3_news_sector,s3_headline,s3_story,s3_video,cta,font_color_1,font_color_2,background_color
```

| Field | Default value |
| --- | --- |
| `S1_SLUG_1` | FLASH |
| `S1_SLUG_2` | NEWS |
| `WEB` | www.newssurvey.com |
| `S2_SLUG_1` | TOP |
| `S2_SLUG_2` | STORY |
| `S3_NEWS_SECTOR` | TRANSPORTATION |
| `S3_HEADLINE` | Government Supplies Trucks for Agriculture |
| `S3_STORY` | The government has supplied trucks to support the transportation of agricultural produce across rural areas. Officials say the initiative aims to reduce post-harvest losses and ensure farmers can move their goods to markets more easily. |
| `S3_VIDEO` | https://templates.shotstack.io/agricultural-news-transport-update-farm-logistics-trucks/21c30e8f-0d0d-4c63-8dff-d82458c653d9/source.mp4 |
| `CTA` | FOLLOW FOR MORE |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `BACKGROUND_COLOR` | #f4c60b |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
