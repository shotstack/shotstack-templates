# Sweet Deal Promotional Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Sweet Deal Promotional Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Sweet_Deal_Promotional_Offer_Template_d5eac35b62.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/sweet-deal-promo-offer-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/sweet-deal-promo-offer-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,body,product,discount,cta,web,background_color_1,background_color_2,audio_src
```

| Field | Default value |
| --- | --- |
| `Brand_Name` | Melt & Whirl |
| `Title` | Sugar Frost |
| `Body` | Melt & WhiMelts in moments, swirls through your soul |
| `Product` | https://templates.shotstack.io/sweet-deal-promo-offer-template/a2d2b611-733d-4a2d-8a5b-864ed29fb787/source.png |
| `Discount` | 40% Off |
| `CTA` | Buy Now! |
| `Web` | @melt&whirl \| www.melt&whirl.com |
| `BACKGROUND_COLOR_1` | #f7a198 |
| `BACKGROUND_COLOR_2` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/sweet-deal-promo-offer-template/ced5edfb-6bc3-4666-b029-69b611868d16/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
