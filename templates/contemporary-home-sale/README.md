# Contemporary Home for Sale

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Contemporary Home for Sale preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Contemporary_Home_for_Sale_2ef07aea6e.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/contemporary-home-sale/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/contemporary-home-sale
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,header,amount,description_1,description_2,description_3,description_4,description_6,address,phone,black_font_color,white_font_color,white_background_color,audio_src,brand,logo,s2_title,cta,s3_title
```

| Field | Default value |
| --- | --- |
| `TITLE` | SCANDINAVIAN |
| `HEADER` | START FROM : |
| `AMOUNT` | $200.000 |
| `DESCRIPTION_1` | 3 bedroom |
| `DESCRIPTION_2` | 3 Bathroom |
| `DESCRIPTION_3` | Sitting Room |
| `DESCRIPTION_4` | Kitchen Space |
| `DESCRIPTION_6` | Car Garage |
| `ADDRESS` | 123 Anywhere St. Any City |
| `PHONE` | +123-456-7890 |
| `BLACK_FONT_COLOR` | #000000 |
| `WHITE_FONT_COLOR` | #ffffff |
| `WHITE_BACKGROUND_COLOR` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/contemporary-home-sale/053ab4a0-f45f-4481-8e3c-91aa090ae84c/source.mp3 |
| `BRAND` | REAL ESTATE |
| `LOGO` | https://templates.shotstack.io/contemporary-home-sale/6a4cc2ee-a137-4ca3-bc61-d4c91dcbc759/source.png |
| `S2_TITLE` | HOUSE |
| `CTA` | CONTACT US : |
| `S3_TITLE` | FOR SALE |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
