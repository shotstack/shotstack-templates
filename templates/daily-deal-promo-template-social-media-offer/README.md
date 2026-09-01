# Dynamic Daily Deal & Offer Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 4s · **Format:** mp4 · **Category:** E-Commerce

![Dynamic Daily Deal & Offer Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_Daily_Deal_and_Offer_Promotion_Template_c0748861be.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/daily-deal-promo-template-social-media-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/daily-deal-promo-template-social-media-offer
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
audio_src,promo,title,description,cta,image_src,image_src_2,white_font_color,orange_background_color,red_circle_color_2,brown_background_color_3,red_background_color_4
```

| Field | Default value |
| --- | --- |
| `AUDIO_SRC` | https://templates.shotstack.io/daily-deal-promo-template-social-media-offer/1fe465b7-c614-4647-b277-9f0ac4803c77/source.mp3 |
| `PROMO` | Only $10 |
| `TITLE` | MONDAY COMBO |
| `DESCRIPTION` | GET FREE DELIVERY NOW! |
| `CTA` | ORDER |
| `IMAGE_SRC` | https://templates.shotstack.io/daily-deal-promo-template-social-media-offer/18062e0d-3364-4eef-ae84-fbdba142746e/source.png |
| `IMAGE_SRC_2` | https://templates.shotstack.io/daily-deal-promo-template-social-media-offer/14e3fc17-d7cf-4629-a784-b41e55f027a0/source.png |
| `White_FONT_COLOR` | #ffffff |
| `Orange_BACKGROUND_COLOR` | #f06c00 |
| `Red_Circle_COLOR_2` | #7d1c1c |
| `Brown_BACKGROUND_COLOR_3` | #a06718 |
| `Red_BACKGROUND_COLOR_4` | #7f2929 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
