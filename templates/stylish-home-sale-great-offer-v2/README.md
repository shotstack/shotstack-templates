# Stylish Home for Sale with Great Offer

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Stylish Home for Sale with Great Offer preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Stylish_Home_for_Sale_with_Great_Offer_ba1c1eb4a5.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/stylish-home-sale-great-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/stylish-home-sale-great-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,s1_title,amount,address,email,promo,white_logo,text_font_color,background_color,video_src,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | New Listing Modern House |
| `S1_TITLE` | Special Price |
| `AMOUNT` | $770.200 |
| `ADDRESS` | Located at 123 Anywhere St., Any City, St |
| `EMAIL` | @realestate.com |
| `PROMO` | Get It Now |
| `WHITE_LOGO` | https://templates.shotstack.io/stylish-home-sale-great-offer/c7848dc6-3e24-4520-969f-4f50a15a50a7/source.png |
| `TEXT_FONT_COLOR` | #2f7db9 |
| `BACKGROUND_COLOR` | #ffffff |
| `VIDEO_SRC` | https://templates.shotstack.io/stylish-home-sale-great-offer/2442880b-e6ab-43d1-8264-a75baef5c623/shotstack-proxy.mp4 |
| `AUDIO_SRC` | https://templates.shotstack.io/stylish-home-sale-great-offer/bf0d075a-e5a3-4e53-937e-959de3971219/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
