# Modern 3D Apparel New Arrival & Flash Sale Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Modern 3D Apparel New Arrival & Flash Sale Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_3_D_Apparel_New_Arrival_and_Flash_Sale_Template_99dd41d9bf.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-apparel-sale-promo-template-3d-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/modern-apparel-sale-promo-template-3d-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,product_1,product_2,discount,cta,contact_&_web,font_color_1,cta_font_color,prd_1_background_color,prd_2_background_color_2,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Brand_Name` | FAZ OUTFIT |
| `Title` | New Arrival |
| `Product_1` | https://templates.shotstack.io/modern-apparel-sale-promo-template-3d/d64d4bb2-c341-41a5-9e22-c743045f45b6/source.png |
| `Product_2` | https://templates.shotstack.io/modern-apparel-sale-promo-template-3d/02fa3d30-8398-4144-b620-1d3e2b9f72b1/source.png |
| `Discount` | Fast Lane Discount: 45% Off for First 10! |
| `CTA` | BUY TODAY |
| `Contact_&_Web` | 022-123-5678 www.fazoutfit.com |
| `FONT_COLOR_1` | #000000 |
| `CTA_FONT_COLOR` | #ffffff |
| `Prd_1_BACKGROUND_COLOR` | #95c5d6 |
| `Prd_2_BACKGROUND_COLOR_2` | #504f92 |
| `BACKGROUND_COLOR` | #d2d2d0 |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-apparel-sale-promo-template-3d/2a34aab8-82b0-46a7-a3ec-86816a9e35f6/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
