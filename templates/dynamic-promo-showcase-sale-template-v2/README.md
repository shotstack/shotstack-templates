# Dynamic Circle Showcase & Sale Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** E-Commerce

![Dynamic Circle Showcase & Sale Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_Circle_Showcase_and_Sale_Promotion_Template_09f29b0799.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/dynamic-promo-showcase-sale-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/dynamic-promo-showcase-sale-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
website,cta,s1_description,s1_title,black_font_color,white_background_color,yellow_background_color_2,image_src,image_src_2,image_src_3,audio_src
```

| Field | Default value |
| --- | --- |
| `WEBSITE` | www.websitehere.com |
| `CTA` | SHOP NOW |
| `S1_DESCRIPTION` | COLLECTION |
| `S1_TITLE` | New |
| `Black_FONT_COLOR` | #000000 |
| `White_BACKGROUND_COLOR` | #ffffff |
| `Yellow_BACKGROUND_COLOR_2` | #d58d5d |
| `IMAGE_SRC` | https://templates.shotstack.io/dynamic-promo-showcase-sale-template/721909ba-c161-47e7-b70d-333e68873683/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/dynamic-promo-showcase-sale-template/624772a7-9284-4a63-b5f3-e56e084d7d1b/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/dynamic-promo-showcase-sale-template/a92ad0cf-0a9b-462e-8ece-5576edd0c554/shotstack-proxy.webp |
| `AUDIO_SRC` | https://templates.shotstack.io/dynamic-promo-showcase-sale-template/c96692ae-b2b9-45ef-bd0b-93d012fdc0f3/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
