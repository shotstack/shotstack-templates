# Exclusive Offers - Unlock Amazing Discounts Today!

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** E-Commerce

![Exclusive Offers - Unlock Amazing Discounts Today! preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Exclusive_Offers_Unlock_Amazing_Discounts_Today_f4114dfe5a.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/exclusive-offers-promotion/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/exclusive-offers-promotion
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_description,s2_title,s2_description,s3_title,s3_description,s4_title,brand_name,audio_src,video_src,video_src_2,video_src_3,image_src,video_src_4,image_src_2,image_src_3,text_font_color,background_color
```

| Field | Default value |
| --- | --- |
| `S1_TITLE` | EVOLVE |
| `S1_DESCRIPTION` | "Discover your personal style today!" |
| `S2_TITLE` | Be Bold |
| `S2_DESCRIPTION` | Find the style that fits you |
| `S3_TITLE` | TREND |
| `S3_DESCRIPTION` | "Dress with Confidence" |
| `S4_TITLE` | Find Your Perfect Look |
| `BRAND_NAME` | www.brandname.com |
| `AUDIO_SRC` | https://templates.shotstack.io/exclusive-offers-promotion/65a183d0-2110-4237-8984-fcc89999f049/source.wav |
| `VIDEO_SRC` | https://templates.shotstack.io/exclusive-offers-promotion/a984d9a5-741f-43e6-9729-3a8cea11c987/shotstack-proxy.mp4 |
| `VIDEO_SRC_2` | https://templates.shotstack.io/exclusive-offers-promotion/6b5711ae-0b2d-4a69-81d9-6e5972a8f059/shotstack-proxy.mp4 |
| `VIDEO_SRC_3` | https://templates.shotstack.io/exclusive-offers-promotion/a1366314-b62a-4060-b0a0-cb3302cd64b8/shotstack-proxy.mp4 |
| `IMAGE_SRC` | https://templates.shotstack.io/exclusive-offers-promotion/efdbcd75-a137-49bc-b00f-1a9b682268c2/shotstack-proxy.webp |
| `VIDEO_SRC_4` | https://templates.shotstack.io/exclusive-offers-promotion/62f5935a-3131-4410-a20a-5ac2dace8b20/shotstack-proxy.mp4 |
| `IMAGE_SRC_2` | https://templates.shotstack.io/exclusive-offers-promotion/a9fb9b31-7b86-47ae-8a25-d4c2ef6d54a4/shotstack-proxy.webp |
| `IMAGE_SRC_3` | https://templates.shotstack.io/exclusive-offers-promotion/fc8646fc-9f36-48e7-8ced-305ad6794380/shotstack-proxy.webp |
| `TEXT_FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #000000 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
