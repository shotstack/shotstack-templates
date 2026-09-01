# Serene Living with Sunset Views

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Serene Living with Sunset Views preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Serene_Living_with_Sunset_Views_66d35e9cb8.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/serene-living-sunset-views-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/serene-living-sunset-views-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,description_2,amount,promo,date,cta,phone,address,s2_title,features_1,features_2,features_3,features_4,features_5,black_color,white_font_color_2,brown_color,video_src,image_src,image_src_2,logo,brand_name
```

| Field | Default value |
| --- | --- |
| `TITLE` | Modern |
| `DESCRIPTION` | HOME LIVING |
| `DESCRIPTION_2` | Open Spaces, Sunset View, Great Neighborhood & Safe For Kids |
| `AMOUNT` | $5,000,000 |
| `PROMO` | DISCOUNT 20% OFF |
| `DATE` | August 15 - 30, 2027 |
| `CTA` | CONTACT US |
| `PHONE` | +123-456-7890 |
| `ADDRESS` | 123 Anywhere St., Any City |
| `S2_TITLE` | HOME FEATURES |
| `FEATURES_1` | Living Room |
| `FEATURES_2` | 2 Bathroom |
| `FEATURES_3` | Car Garage |
| `FEATURES_4` | 4 Bedrooms |
| `FEATURES_5` | Kitchen |
| `BLACK_COLOR` | #312b25 |
| `WHITE_FONT_COLOR_2` | #ffffff |
| `BROWN_COLOR` | #d8ac5f |
| `VIDEO_SRC` | https://templates.shotstack.io/serene-living-sunset-views/8ccd3d3b-85c0-433a-9b88-d5658acb25f9/shotstack-proxy.mp4 |
| `IMAGE_SRC` | https://templates.shotstack.io/serene-living-sunset-views/7333b766-7495-4875-b243-1cef9a245cf2/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/serene-living-sunset-views/3367a103-05a7-4eb3-8676-a9b6425d54bf/source.jpg |
| `LOGO` | https://templates.shotstack.io/serene-living-sunset-views/fdad17a3-ec26-494d-93fb-2e098cdbcd5e/source.png |
| `BRAND_NAME` | Realestate Company |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
