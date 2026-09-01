# Rhythmic Deal & Special Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 5.5s · **Format:** mp4 · **Category:** E-Commerce

![Rhythmic Deal & Special Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Rhythmic_Deal_BOGO_and_Special_Offer_Template_ff6c76bc9a.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/bogo-special-offer-promo-template-sale/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/bogo-special-offer-promo-template-sale
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
logo,logo_name,code_border,voucher,s1_title_1,s1_title_2,body,image_src,price,cta_1,cta_2,web,body_font_color,title_2_color,title_1_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `logo` | https://templates.shotstack.io/bogo-special-offer-promo-template-sale/cfe14dad-9988-4b2f-9bf1-fc9beba459a4/source.png |
| `Logo_name` | Musestudio |
| `Code_border` | #050505 |
| `Voucher` | CODE: H9MW4 |
| `S1_Title_1` | Grab 1 Enjoy 1 |
| `S1_Title_2` | FREE |
| `Body` | From vibrant tambourines to elegant accents and everything in between, we’re here to bring rhythm and style to your home—without missing a beat or your budget |
| `IMAGE_SRC` | https://templates.shotstack.io/bogo-special-offer-promo-template-sale/4171d0e5-67f2-4bfa-a437-c0a709c8d135/source.png |
| `Price` | $300 |
| `CTA_1` | BUY NOW |
| `CTA_2` | Limited-Time Offer. |
| `Web` | www.musetensite.com |
| `Body_FONT_COLOR` | #124f91 |
| `Title_2_COLOR` | #ac590c |
| `Title_1_COLOR` | #5f3207 |
| `BACKGROUND_COLOR` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/bogo-special-offer-promo-template-sale/c93a264f-47b4-4d97-a01f-7fd936745940/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
