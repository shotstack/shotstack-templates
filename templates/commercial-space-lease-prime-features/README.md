# Commercial Space for Lease with Prime Features

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Commercial Space for Lease with Prime Features preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Commercial_Space_for_Lease_with_Prime_Features_68f3ed7ea5.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/commercial-space-lease-prime-features/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/commercial-space-lease-prime-features
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,address,header,s2_description_1,s2_description_2,s2_description_3,s2_description_4,cta,s3_description,logo,brown_font_color,black_font_color_2,element_background_color,background_color_2
```

| Field | Default value |
| --- | --- |
| `TITLE` | FOR LEASE: |
| `DESCRIPTION` | Real Commercial Space |
| `ADDRESS` | 123 Anywhere St., Any City, ST 12345 |
| `HEADER` | Features: |
| `S2_DESCRIPTION_1` | Easily accessible location |
| `S2_DESCRIPTION_2` | Modern restrooms for customer |
| `S2_DESCRIPTION_3` | well- maintained building |
| `S2_DESCRIPTION_4` | Competitive leasing rates |
| `CTA` | Call: 123-456-7890 |
| `S3_DESCRIPTION` | to schedule a visit or get more information |
| `LOGO` | https://templates.shotstack.io/commercial-space-lease-prime-features/d8565f29-04db-4d0e-bfe1-389643fd064c/source.png |
| `BROWN_FONT_COLOR` | #6a4901 |
| `BLACK_FONT_COLOR_2` | #000000 |
| `ELEMENT_BACKGROUND_COLOR` | #ceaf82 |
| `BACKGROUND_COLOR_2` | #f9f2eb |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
