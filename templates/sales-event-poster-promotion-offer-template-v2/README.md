# Dynamic Sales Event & Limited-Time Offer Poster Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Dynamic Sales Event & Limited-Time Offer Poster Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_Sales_Event_and_Limited_Time_Offer_Poster_Template_b2ed3720f6.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/sales-event-poster-promotion-offer-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/sales-event-poster-promotion-offer-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
offer,title,discount,cta,font_color,text_background_color,product_image,stand_image,audio_src
```

| Field | Default value |
| --- | --- |
| `Offer` | LIMITED-TIME OFFER |
| `Title` | JULY SALES |
| `Discount` | SAVE UP TO 50% TODAY |
| `CTA` | ORDER NOW |
| `FONT_COLOR` | #ffffff |
| `TEXT_BACKGROUND_COLOR` | #087fba |
| `PRODUCT_IMAGE` | https://templates.shotstack.io/sales-event-poster-promotion-offer-template/afe3fe39-d6c2-4e28-acc7-5f87dc4d55be/source.png |
| `STAND_IMAGE` | https://templates.shotstack.io/sales-event-poster-promotion-offer-template/28a155a5-06ab-404a-9e3e-783bd0caa6a8/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/sales-event-poster-promotion-offer-template/c31ed98e-b24f-4e08-910a-a92b549e88f3/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
