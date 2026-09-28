# High-Impact Sale & Special Offer Announcement Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![High-Impact Sale & Special Offer Announcement Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/High_Impact_Sale_and_Special_Offer_Announcement_Template_600a30c3f1.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/bold-sale-promotion-announcement-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/bold-sale-promotion-announcement-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,title_2,description,price,promo,address,website,orange_font_color,green_color,white_color,image_src,audio_src
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | Jack and Anne |
| `TITLE` | COMING |
| `TITLE_2` | SOON |
| `DESCRIPTION` | Get Limited Edition |
| `PRICE` | Price $400 |
| `PROMO` | Discount 25% Off |
| `ADDRESS` | 123 Anywhere St., Any City |
| `WEBSITE` | www.websiteshop.com |
| `ORANGE_FONT_COLOR` | #ff7300 |
| `GREEN_COLOR` | #105e7f |
| `WHITE_COLOR` | #ffffff |
| `IMAGE_SRC` | https://templates.shotstack.io/bold-sale-promotion-announcement-template/6fa039d6-201f-4204-9b80-eb21630a5aff/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/bold-sale-promotion-announcement-template/42ea3c8b-20e0-49f7-baa2-34af55166cf4/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
