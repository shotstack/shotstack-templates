# Modern Flash Sale Story Template for Retail Promotions

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12.8s · **Format:** mp4 · **Category:** E-Commerce

![Modern Flash Sale Story Template for Retail Promotions preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Flash_Sale_Story_Template_for_Retail_Promotions_cdf3b667c8.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/retail-sale-story-template-shopping-promo/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/retail-sale-story-template-shopping-promo
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_video,s2_video_2,s5_video_3,s1_title,s2_title_2,s3_product_names,s3_price,s4_product_name,s4_price,s5_brand_name,s5_cta,s5_location,font_color,s2_font_color_2,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_VIDEO` | https://templates.shotstack.io/retail-sale-story-template-shopping-promo/003a851d-99a6-45b2-91a5-27014c922266/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/retail-sale-story-template-shopping-promo/7d07f85f-1631-4ea4-99cc-2eb8f77e37a9/source.mp4 |
| `S5_VIDEO_3` | https://templates.shotstack.io/retail-sale-story-template-shopping-promo/16dc6f81-c05e-429c-a8b1-f8d1583f0e23/source.mp4 |
| `S1_Title` | STYLE IN EVERY STEP! |
| `S2_Title_2` | THIS NEW DROP IS HEAT FOR YOUR FEET! |
| `S3_Product_Names` | BLACK HEELS AND PINK HEELS |
| `S3_price` | FOR $50 ONLY |
| `S4_Product_Name` | PINK HEELS AND YELLOW HEELS |
| `S4_price` | FOR $60 ONLY |
| `S5_Brand_Name` | LUXE HEELS |
| `S5_CTA` | SHOP WITH US TODAY |
| `S5_location` | YOUR NEXT FAVORITE PAIR IS WAITING AT 45 OUR SHOP St. |
| `FONT_COLOR` | #ffffff |
| `S2_FONT_COLOR_2` | #343c4b |
| `AUDIO_SRC` | https://templates.shotstack.io/retail-sale-story-template-shopping-promo/d25369a1-be58-45a3-ab70-0fc99cf4e8fb/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
