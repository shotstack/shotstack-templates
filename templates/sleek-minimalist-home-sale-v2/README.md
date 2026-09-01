# Sleek Minimalist Home for Sale

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 3s · **Format:** mp4 · **Category:** Listings & Classifieds

![Sleek Minimalist Home for Sale preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Sleek_Minimalist_Home_for_Sale_056229e210.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/sleek-minimalist-home-sale-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/sleek-minimalist-home-sale-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,header,amount,description_1,description_2,description_3,description_4,description_5,description_6,address,phone,black_font_color,brown_font_color,white_background_color,audio_src,brand,logo
```

| Field | Default value |
| --- | --- |
| `TITLE` | MINIMALIST — CONCEPT |
| `HEADER` | START FROM |
| `AMOUNT` | $200.000 |
| `DESCRIPTION_1` | 3 bedroom |
| `DESCRIPTION_2` | 3 Bathroom |
| `DESCRIPTION_3` | Sitting Room |
| `DESCRIPTION_4` | Kitchen Space |
| `DESCRIPTION_5` | Balcony Terrance |
| `DESCRIPTION_6` | Car Garage |
| `ADDRESS` | 123 Anywhere St. Any City |
| `PHONE` | +123-456-7890 |
| `BLACK_FONT_COLOR` | #000000 |
| `BROWN_FONT_COLOR` | #af8364 |
| `WHITE_BACKGROUND_COLOR` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/sleek-minimalist-home-sale/174d0c36-d8fe-47df-a88b-65c50fb91032/source.mp3 |
| `BRAND` | REAL ESTATE |
| `LOGO` | https://templates.shotstack.io/sleek-minimalist-home-sale/84038dd2-b2f3-4fda-9577-7712e0cf63c2/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
