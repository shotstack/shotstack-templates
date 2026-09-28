# Bold Confidence Sales Promotion Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Bold Confidence Sales Promotion Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Bold_Confidence_Sales_Promotion_Story_Template_4bc88d3d5e.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/bold-sales-promo-story-template-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/bold-sales-promo-story-template-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,sub_title,product_imag,discount,cta,web,font_color_1,font_color_2,audio_src,background_color
```

| Field | Default value |
| --- | --- |
| `Brand_Name` | Faz Mode |
| `Title` | CROWN YOUR CONFIDENCE |
| `Sub_Title` | Lead with the Look |
| `Product_IMAG` | https://templates.shotstack.io/bold-sales-promo-story-template-offer/e4603244-5bbb-4c11-b261-2d8179781f98/source.png |
| `Discount` | 40% OFF |
| `CTA` | ORDER NOW |
| `Web` | www.fazmodel.com |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/bold-sales-promo-story-template-offer/b272c2e4-d41b-4406-90a9-e0be16949644/source.mp3 |
| `BACKGROUND_COLOR` | #6c0774 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
