# Modern Product Sale Announcement Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** E-Commerce

![Modern Product Sale Announcement Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Product_Sale_Announcement_Template_e375c77b6b.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-sale-promotion-template-discount-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/modern-sale-promotion-template-discount-offer
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,description,image_src,cta,website,text_font_color,text_font_color_2,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | Lasis Kitchens |
| `TITLE` | Elevate Your Kitchen |
| `DESCRIPTION` | Enjoy our quality kitchen appliances |
| `IMAGE_SRC` | https://templates.shotstack.io/modern-sale-promotion-template-discount-offer/75238762-5e14-482a-ad4c-e2e145cc6c9c/source.png |
| `CTA` | SHOP NOW |
| `WEBSITE` | www.websiteshop.com |
| `TEXT_FONT_COLOR` | #000000 |
| `TEXT_FONT_COLOR_2` | #ffffff |
| `BACKGROUND_COLOR` | #48525b |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-sale-promotion-template-discount-offer/43ab891a-8988-4b37-8dc5-1c4f971cf8f9/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
