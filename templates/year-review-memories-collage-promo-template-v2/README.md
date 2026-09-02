# Year in Review Memories Collage

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Celebrations

![Year in Review Memories Collage preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Year_in_Review_Memories_Collage_6f485423ef.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/year-review-memories-collage-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/year-review-memories-collage-promo-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_image_1,s1_image_2,s1_image_3,s1_image_4,s1_image_5,s1_image_6,s1_image_7,s1_image_8,s1_image_9,s1_image_10,s1_image_11,s1_image_12,s2_title,s2_subtitle,s2_body,font_color,shape_color,background_color_2,audio,media_1
```

| Field | Default value |
| --- | --- |
| `S1_Title` | Family Memories for the year |
| `S1_IMAGE_1` | https://templates.shotstack.io/year-review-memories-collage-promo-template/cf3e0fe5-77c5-468f-adc0-13ffe469473f/source.png |
| `S1_IMAGE_2` | https://templates.shotstack.io/year-review-memories-collage-promo-template/b0fcbfb1-2b8c-4c65-b949-bea21446a071/source.png |
| `S1_IMAGE_3` | https://templates.shotstack.io/year-review-memories-collage-promo-template/6e4cfd8c-c281-450f-8009-2e512957273f/source.png |
| `S1_IMAGE_4` | https://templates.shotstack.io/year-review-memories-collage-promo-template/8130244e-8c21-45f1-8fd5-ba5582793a40/source.png |
| `S1_IMAGE_5` | https://templates.shotstack.io/year-review-memories-collage-promo-template/2655fbe8-fefb-49f0-9296-e4fbacd12d64/source.png |
| `S1_IMAGE_6` | https://templates.shotstack.io/year-review-memories-collage-promo-template/6dd42532-3f6e-4f67-a99e-f8746a3b4859/source.png |
| `S1_IMAGE_7` | https://templates.shotstack.io/year-review-memories-collage-promo-template/495bc610-9877-4c59-b454-f6855003b684/source.png |
| `S1_IMAGE_8` | https://templates.shotstack.io/year-review-memories-collage-promo-template/5c0656a1-299a-40f0-8951-69cc7e709fd2/source.png |
| `S1_IMAGE_9` | https://templates.shotstack.io/year-review-memories-collage-promo-template/5ffd810d-ccb3-4411-921e-cd408b8fd14d/source.png |
| `S1_IMAGE_10` | https://templates.shotstack.io/year-review-memories-collage-promo-template/596b52dd-7c75-4454-b7fe-4347e495b878/source.png |
| `S1_IMAGE_11` | https://templates.shotstack.io/year-review-memories-collage-promo-template/17f3c7a4-8cf3-4339-877f-776e63a673e8/source.png |
| `S1_IMAGE_12` | https://templates.shotstack.io/year-review-memories-collage-promo-template/cf3fa457-4a50-4e79-8584-115717228771/source.png |
| `S2_Title` | HAPPY NEW |
| `S2_Subtitle` | YEAR |
| `S2_Body` | Celebrate life, embrace change, welcome new beginnings |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #dbdbdb |
| `BACKGROUND_COLOR_2` | #000000 |
| `AUDIO` | https://templates.shotstack.io/year-review-memories-collage-promo-template/c4e173f7-3f11-469b-98e3-d086375f4a55/source.mp3 |
| `MEDIA_1` | https://templates.shotstack.io/year-review-memories-collage-promo-template/5ffd810d-ccb3-4411-921e-cd408b8fd14d/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
