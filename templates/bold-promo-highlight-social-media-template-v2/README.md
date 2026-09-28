# Bold Purple Promo Highlight Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 18s · **Format:** mp4 · **Category:** E-Commerce

![Bold Purple Promo Highlight Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Bold_Purple_Promo_Highlight_Template_6b2ae3f67f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/bold-promo-highlight-social-media-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/bold-promo-highlight-social-media-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,logo,social_media,profile_pic,s1_title,s1_description,website,white_font_color,purple_background_color,pink_background_color_2,black_font_color_2,s1_image_src,s2_title,s2_description,s2_image_src,s3_title,s3_description,s3_image_src,darkpurple_background_color,cta,audio_src
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | Luxury Time |
| `TITLE` | Product Highlights |
| `LOGO` | https://templates.shotstack.io/bold-promo-highlight-social-media-template/cef9f3c4-6fbb-4099-92ed-2dc9d1f7efaf/source.png |
| `Social_Media` | @luxurytime |
| `PROFILE_PIC` | https://templates.shotstack.io/bold-promo-highlight-social-media-template/1e9f2ef4-cd77-46be-9767-a002db8074f4/source.png |
| `S1_TITLE` | Water Resistance |
| `S1_DESCRIPTION` | Protects the watch from damage caused by water exposure, making it suitable for daily wear, swimming, or diving depending on its rating. |
| `WEBSITE` | www.luxurytime.com |
| `White_FONT_COLOR` | #ffffff |
| `Purple_BACKGROUND_COLOR` | #702bb6 |
| `Pink_BACKGROUND_COLOR_2` | #f2e5ff |
| `Black_FONT_COLOR_2` | #000000 |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/bold-promo-highlight-social-media-template/27182608-cae1-4710-aad9-f93064d5b524/source.jpg |
| `S2_TITLE` | Durable Build |
| `S2_DESCRIPTION` | Built with high-quality materials to withstand daily wear and tear, shocks, and rough conditions — ensuring long-lasting performance whether you're at work, at the gym, or outdoors. |
| `S2_IMAGE_SRC` | https://templates.shotstack.io/bold-promo-highlight-social-media-template/3dff9faf-9b5a-499b-8c66-fd320ac48413/shotstack-proxy.webp |
| `S3_TITLE` | Luxurious Quality |
| `S3_DESCRIPTION` | Crafted with premium materials and refined detailing, offering a sophisticated look and feel that elevates your style — perfect for formal occasions, business settings, or everyday elegance. |
| `S3_IMAGE_SRC` | https://templates.shotstack.io/bold-promo-highlight-social-media-template/72863350-ecf5-4681-9f72-9016cfde7ab4/shotstack-proxy.webp |
| `DarkPurple_BACKGROUND_COLOR` | #471f70 |
| `CTA` | Visit Our Store |
| `AUDIO_SRC` | https://templates.shotstack.io/bold-promo-highlight-social-media-template/8ea9c824-e6fe-4c28-82b0-b9fc5cb5e847/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
