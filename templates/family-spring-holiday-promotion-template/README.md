# Family Spring Holiday Promotion

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10.5s · **Format:** mp4 · **Category:** Memories

![Family Spring Holiday Promotion preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Family_Spring_Holiday_Promotion_5449421c97.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/family-spring-holiday-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/family-spring-holiday-promotion-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_image_1,s1_image_2,s1_video,s2_subtitle,s2_image_1,s2_image_2,s2_video,s3_subtitle,s3_image_1,s3_image_2,s3_video,font_color,shape_color,background_color_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_title` | Spring Holiday With Family |
| `S1_IMAGE_1` | https://templates.shotstack.io/family-spring-holiday-promotion-template/8a86c71d-a369-4929-a887-0db594b0850c/source.jpg |
| `S1_IMAGE_2` | https://templates.shotstack.io/family-spring-holiday-promotion-template/187cb650-35a8-4e2d-9efe-e6e70e587869/source.jpg |
| `S1_VIDEO` | https://templates.shotstack.io/family-spring-holiday-promotion-template/19bf62a8-92d9-47b8-bc0f-1556426402e2/source.mp4 |
| `S2_Subtitle` | Quality time with Dad & Kids |
| `S2_IMAGE_1` | https://templates.shotstack.io/family-spring-holiday-promotion-template/b853c495-2d52-4aba-84c7-a89493f61ecb/source.jpg |
| `S2_IMAGE_2` | https://templates.shotstack.io/family-spring-holiday-promotion-template/6d5f143a-bb5f-4a08-8ada-c55fe71e1dd6/source.jpg |
| `S2_VIDEO` | https://templates.shotstack.io/family-spring-holiday-promotion-template/d8524e00-af82-4204-a440-0472369b229d/source.mp4 |
| `S3_Subtitle` | Bonding with loved ones |
| `S3_IMAGE_1` | https://templates.shotstack.io/family-spring-holiday-promotion-template/b7ace763-0315-4485-a32d-4ed2c05afe59/source.jpg |
| `S3_IMAGE_2` | https://templates.shotstack.io/family-spring-holiday-promotion-template/76e7bdb0-7394-4da3-81fa-391819bab4c3/source.jpg |
| `S3_VIDEO` | https://templates.shotstack.io/family-spring-holiday-promotion-template/48b688e0-1308-4eba-bedc-b5657ff991fc/source.mp4 |
| `FONT_COLOR` | #000000 |
| `SHAPE_COLOR` | #ecece6 |
| `BACKGROUND_COLOR_2` | #50f1fa |
| `AUDIO` | https://templates.shotstack.io/family-spring-holiday-promotion-template/222b5b73-38d1-4464-95b1-249b04577dad/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
