# Car Lease Promo Ad

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Car Lease Promo Ad preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/electric_car_for_sale_2714d74254.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/electric-car-for-sale/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/electric-car-for-sale
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
image,logo,make,model,price
```

| Field | Default value |
| --- | --- |
| `IMAGE` | https://templates.shotstack.io/electric-car-for-sale/a7bc8cd1-1cf6-4020-841f-5b47b0d0f3b8/source.jpg |
| `LOGO` | https://templates.shotstack.io/electric-car-for-sale/bac152a4-d053-47d8-bd87-b2ca5152cc35/source.png |
| `MAKE` | TESLA |
| `MODEL` | MODEL S |
| `PRICE` | $329 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
