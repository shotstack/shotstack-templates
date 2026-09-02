# Luxury Home for Sale with Premium Features

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Luxury Home for Sale with Premium Features preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Luxury_Home_for_Sale_with_Premium_Features_140fb1be2c.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/luxury-home-sale-premium-features-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/luxury-home-sale-premium-features-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,brand_name,address,text_font_color,top_background_color,image_src,image_src_2,image_src_3,s2_title,feature_1,feature_2,feature_3,s2_text_font_color,email,website,cta,phone,blue_background_color,logo
```

| Field | Default value |
| --- | --- |
| `TITLE` | HOUSE |
| `DESCRIPTION` | FOR SALE |
| `BRAND_NAME` | REAL ESTATE |
| `ADDRESS` | 123 Anywhere St. Any City |
| `TEXT_FONT_COLOR` | #ffffff |
| `TOP_BACKGROUND_COLOR` | #c93173 |
| `IMAGE_SRC` | https://templates.shotstack.io/luxury-home-sale-premium-features/8d581f0e-67b6-4a20-8bdb-2e9c787294b7/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/luxury-home-sale-premium-features/16f4d591-6997-4f4e-83f4-4be9bb58fa5d/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/luxury-home-sale-premium-features/bfbf9663-c17e-4ce6-87e2-1c269c685df7/source.jpg |
| `S2_TITLE` | KEY FEATURES: |
| `FEATURE_1` | Luxurious rooms |
| `FEATURE_2` | Large amazing pool |
| `FEATURE_3` | COMMERCIAL GYM |
| `S2_TEXT_FONT_COLOR` | #000000 |
| `EMAIL` | Mark@realestatenow.com |
| `WEBSITE` | www.realestatenow.com |
| `CTA` | Contact us |
| `PHONE` | +123-456-7890 |
| `BLUE_BACKGROUND_COLOR` | #172540 |
| `LOGO` | https://templates.shotstack.io/luxury-home-sale-premium-features/8add83f3-cbab-49da-8c8e-846e2da36f68/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
