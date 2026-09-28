# Daily Car Deal Promo

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Daily Car Deal Promo preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/daily_car_deal_d57a1ba3d6.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/car-todays-deal-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/car-todays-deal-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
price,year,image
```

| Field | Default value |
| --- | --- |
| `PRICE` | $45,000 |
| `YEAR` | 2023 |
| `IMAGE` | https://templates.shotstack.io/car-todays-deal/66b4caa1-ff0e-4d74-a2cc-0dfc336ceec2/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
