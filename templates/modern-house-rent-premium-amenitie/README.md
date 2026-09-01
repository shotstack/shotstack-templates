# Modern House for Rent with Premium Amenities

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Modern House for Rent with Premium Amenities preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_House_for_Rent_with_Premium_Amenities_bc2c289a7f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-house-rent-premium-amenitie/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/modern-house-rent-premium-amenitie
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,header,description_1,description_2,description_3,description_4,description_5,description_6,description_7,description_8,description_9,cta,phone,text_font_color,icon_color,shape_color_2,background_color_3,image_src,logo
```

| Field | Default value |
| --- | --- |
| `TITLE` | YOUR GATEWAY TO MODERN LIVING |
| `DESCRIPTION` | House for Rent |
| `HEADER` | Our Facilities |
| `DESCRIPTION_1` | Dining |
| `DESCRIPTION_2` | 2 Bedrooms |
| `DESCRIPTION_3` | Study |
| `DESCRIPTION_4` | Store |
| `DESCRIPTION_5` | 1 Bathroom |
| `DESCRIPTION_6` | Pool |
| `DESCRIPTION_7` | Garage |
| `DESCRIPTION_8` | Livingroom |
| `DESCRIPTION_9` | Internet |
| `CTA` | BOOK NOW |
| `PHONE` | +123 456 7890 |
| `TEXT_FONT_COLOR` | #ffffff |
| `ICON_COLOR` | #00c732 |
| `SHAPE_COLOR_2` | #1a2537 |
| `BACKGROUND_COLOR_3` | #293547 |
| `IMAGE_SRC` | https://templates.shotstack.io/modern-house-rent-premium-amenitie/ccf5fd5c-05f4-472f-b3a3-1688f0953779/source.jpg |
| `LOGO` | https://templates.shotstack.io/modern-house-rent-premium-amenitie/049f0a8b-d4c8-4f6f-9ab5-9ff99e165115/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
