# Quick Deal & Flash Sale Promotional Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 6s · **Format:** mp4 · **Category:** E-Commerce

![Quick Deal & Flash Sale Promotional Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Quick_Deal_and_Flash_Sale_Promotional_Template_10ce4126b9.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/quick-deal-flash-sale-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/quick-deal-flash-sale-promo-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_sub_title,s1_image_src,s1_warranty,s1_discount,cta,web,shape_color,background_color,text_font_color,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_Title` | QUICK DEAL |
| `S1_Sub_Title` | QUICK DEAL |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/quick-deal-flash-sale-promo-template/1dc48499-b706-4eee-9a62-752d467a5c28/source.png |
| `S1_warranty` | 2 MONTHS WARRANTY |
| `S1_discount` | 50% |
| `CTA` | BUY TODAY |
| `Web` | www.quickdealstore.com |
| `Shape_color` | #5b17ae |
| `BACKGROUND_COLOR` | #6718dc |
| `TEXT_FONT_COLOR` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/quick-deal-flash-sale-promo-template/30eea5d8-919b-448d-9056-a1a311fc448b/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
