# Stylish Real Estate Reel

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Listings & Classifieds

![Stylish Real Estate Reel preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Stylish_Real_Estate_Reel_08cffc7540.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/stylish-real-estate-reel-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/stylish-real-estate-reel-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,brand_name,text_font_color,s1_image_src,s1_image_src_2,s2_title,s2_description,text_var_372,image_src_3,s3_title,s3_description_1,s3_description_2,s3_description_3,s3_description_4,s3_text_font_color,amount,duration,s3_background_color,s3_image_src,s4_title,s4_description,s4_image_src,all_background_color
```

| Field | Default value |
| --- | --- |
| `TITLE` | New Modern Living Space! |
| `DESCRIPTION` | LET'S HAVE A SHORT TOUR WITH US! |
| `BRAND_NAME` | THYNK UNLIMITED |
| `TEXT_FONT_COLOR` | #ffd500 |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/Stylish-Real-Estate-Reel/2b7ee2f8-f204-448e-bc32-5b5633d2130f/source.jpg |
| `S1_IMAGE_SRC_2` | https://templates.shotstack.io/Stylish-Real-Estate-Reel/2cb83980-aad5-4f27-9ffb-516ed76bcc32/source.jpg |
| `S2_TITLE` | Sustainable living space |
| `S2_DESCRIPTION` | We build efficient houses using high-quality materials and sustainable practices, with energy-efficient features for eco-friendly living. . |
| `TEXT_VAR_372` | THYNK UNLIMITED |
| `IMAGE_SRC_3` | https://templates.shotstack.io/Stylish-Real-Estate-Reel/669a77a0-f4a9-4366-91b0-2de6d462c289/source.jpg |
| `S3_TITLE` | FEATURES |
| `S3_DESCRIPTION_1` | 3 BEDROOMS |
| `S3_DESCRIPTION_2` | BATHROOM |
| `S3_DESCRIPTION_3` | CAR GARAGE |
| `S3_DESCRIPTION_4` | 800 SQ. FT. |
| `S3_TEXT_FONT_COLOR` | #000000 |
| `AMOUNT` | $1700 |
| `DURATION` | PER MONTH |
| `S3_BACKGROUND_COLOR` | #f5e9db |
| `S3_IMAGE_SRC` | https://templates.shotstack.io/Stylish-Real-Estate-Reel/9f713542-8007-48da-858f-58530d9989ef/source.jpg |
| `S4_TITLE` | Contact us for more info! |
| `S4_DESCRIPTION` | HELLO@REALLYGREATSITE.COM |
| `S4_IMAGE_SRC` | https://templates.shotstack.io/Stylish-Real-Estate-Reel/572973cb-10be-44b1-998c-0297c7d8134f/shotstack-proxy.webp |
| `ALL_BACKGROUND_COLOR` | #342e28 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
