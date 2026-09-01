# Modern Minimalist Home for Sale

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Modern Minimalist Home for Sale preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Minimalist_Home_for_Sale_f313bd5672.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-minimalist-home-sale-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/modern-minimalist-home-sale-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description_2,cta,s1_title,amount,s1_cta,phone,text_font_color,image_src,image_src_2,background_color
```

| Field | Default value |
| --- | --- |
| `TITLE` | MINIMALIST HOME |
| `DESCRIPTION_2` | for sale |
| `CTA` | ORDER NOW |
| `S1_TITLE` | STARTING PRICE: |
| `AMOUNT` | $2,000,000 |
| `S1_CTA` | CALL US |
| `PHONE` | +123-456-7890 |
| `TEXT_FONT_COLOR` | #563939 |
| `IMAGE_SRC` | https://templates.shotstack.io/modern-minimalist-home-sale/779d3bbe-11b3-4c4b-8899-3fdfbc519b43/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/modern-minimalist-home-sale/8c52bc20-2b5d-4469-ba16-57f996cedbd2/source.jpg |
| `BACKGROUND_COLOR` | #d2b99d |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
