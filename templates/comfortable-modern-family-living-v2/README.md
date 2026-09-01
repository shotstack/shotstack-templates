# Comfortable Modern Family Living

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Comfortable Modern Family Living preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Comfortable_Modern_Family_Living_1c7b1fd38f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/comfortable-modern-family-living-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/comfortable-modern-family-living-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,brand_name,s2_title,feature_1,feature_2,feature_3,feature_4,s3_title,amount,cta,website,s4_title,contact,address,white_font_color,black_font_color_2,green_font_color_3,brown_background_color,image_src,image_src_2,image_src_3,logo,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | Experience the Comfort of Modern Living |
| `DESCRIPTION` | Perfect home for your family |
| `BRAND_NAME` | Realestate company |
| `S2_TITLE` | Features |
| `FEATURE_1` | 2 Bathrooms |
| `FEATURE_2` | 2 Bedrooms |
| `FEATURE_3` | 1 Car Garage |
| `FEATURE_4` | 1 Living Room |
| `S3_TITLE` | PRICE STARTS AT |
| `AMOUNT` | $1.899.000 |
| `CTA` | BOOK NOW! |
| `WEBSITE` | www.realestatecompany.com |
| `S4_TITLE` | More Information |
| `CONTACT` | +123-456-7890 |
| `ADDRESS` | 123 Anywhere St., Any City |
| `WHITE_FONT_COLOR` | #ffffff |
| `BLACK_FONT_COLOR_2` | #000000 |
| `GREEN_FONT_COLOR_3` | #1a3013 |
| `BROWN_BACKGROUND_COLOR` | #fdf9ed |
| `IMAGE_SRC` | https://templates.shotstack.io/comfortable-modern-family-living/44d73adf-097e-4fe7-a93f-7dcb66b44d9e/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/comfortable-modern-family-living/e4b2451d-fc38-4b22-8534-2b0fb399bb2a/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/comfortable-modern-family-living/9ac7e8dc-95e3-4b07-95dd-0b0731c7f20b/source.jpg |
| `LOGO` | https://templates.shotstack.io/comfortable-modern-family-living/29838698-d644-47c1-85d2-f87ad3379be4/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/comfortable-modern-family-living/ca30248e-65da-4997-b8af-af35b241b4f4/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
