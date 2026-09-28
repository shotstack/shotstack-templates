# Bold New Collection Story Promo Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 18s · **Format:** mp4 · **Category:** E-Commerce

![Bold New Collection Story Promo Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Bold_New_Collection_Story_Promo_Template_53ed599433.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/new-collection-story-promo-template-fashion/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/new-collection-story-promo-template-fashion
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,main_title,s1_title,s1_description,website,s1_image_src,s2_title,s2_description,s2_image_src,s3_title,s3_description,s3_image_src,s4_title,s4_description,cta,whit_font_color,blue_background_color,dark_blue_color_2,light_blue_color_3,lightest_blue_background_color_4,audio_src
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | ZEUS FASHION |
| `MAIN_TITLE` | CHECK OUT OUR NEW COLLECTION |
| `S1_TITLE` | Jackets |
| `S1_DESCRIPTION` | A sleek, minimalist jacket crafted to complement both urban and outdoor styles, blending seamlessly with modern or rugged wardrobes |
| `WEBSITE` | @WEBSITESTORE |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/new-collection-story-promo-template-fashion/aacbebd1-09e7-4aa6-b90e-b42c114131b3/source.jpg |
| `S2_TITLE` | Pants |
| `S2_DESCRIPTION` | A sleek, minimalist bag designed for everyday use, blending modern aesthetics with practical storage for work, travel, or leisure. |
| `S2_IMAGE_SRC` | https://templates.shotstack.io/new-collection-story-promo-template-fashion/733548c3-728a-4b49-a1d7-4c5adc1023cf/source.jpg |
| `S3_TITLE` | Bags |
| `S3_DESCRIPTION` | A sleek, minimalist jacket crafted to complement both urban and outdoor styles, blending seamlessly with modern or rugged wardrobes |
| `S3_IMAGE_SRC` | https://templates.shotstack.io/new-collection-story-promo-template-fashion/4c9f4c6c-a086-4072-86e1-2292e01c32c6/shotstack-proxy.webp |
| `S4_TITLE` | Shop Here Today |
| `S4_DESCRIPTION` | Offers end soon! Don't miss out on these exclusive deals. |
| `CTA` | SHOP NOW |
| `WHIT_FONT_COLOR` | #ffffff |
| `BLUE_BACKGROUND_COLOR` | #2863c3 |
| `DARK_BLUE_COLOR_2` | #b8d3ff |
| `LIGHT_BLUE_COLOR_3` | #255db6 |
| `LIGHTEST_BLUE_BACKGROUND_COLOR_4` | #6094e6 |
| `AUDIO_SRC` | https://templates.shotstack.io/new-collection-story-promo-template-fashion/44669bbe-8ae9-4533-ba04-6eb33285e576/shotstack-proxy.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
