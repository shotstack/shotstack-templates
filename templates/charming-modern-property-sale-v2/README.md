# Charming Modern Property for Sale

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** Listings & Classifieds

![Charming Modern Property for Sale preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Charming_Modern_Property_for_Sale_da4739e615.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/charming-modern-property-sale-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/charming-modern-property-sale-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,s2_title,s2_description,s3_title,s3_description,s3_description_2,text_background_color,image_src,image_src_2,image_src_3
```

| Field | Default value |
| --- | --- |
| `TITLE` | MODERN REAL ESTATE |
| `S2_TITLE` | START PRICE |
| `S2_DESCRIPTION` | $1499.99 |
| `S3_TITLE` | BOOK NOW |
| `S3_DESCRIPTION` | CONTACT US |
| `S3_DESCRIPTION_2` | +123 456 7890 |
| `TEXT_BACKGROUND_COLOR` | #fed98b |
| `IMAGE_SRC` | https://templates.shotstack.io/charming-modern-property-sale/5081bd56-fac0-44b7-b467-b9d8efefbeba/shotstack-proxy.webp |
| `IMAGE_SRC_2` | https://templates.shotstack.io/charming-modern-property-sale/4fce101f-8a79-486e-b722-7702a307513f/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/charming-modern-property-sale/d19e6deb-3d8b-4454-a4fe-7f05a64bb50a/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
