# Car Runout Deal Promo Ad

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Car Runout Deal Promo Ad preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/car_sale_video_e1d61de07a.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/car-sale-video/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/car-sale-video
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
discount,image,logo
```

| Field | Default value |
| --- | --- |
| `DISCOUNT` | 30% |
| `IMAGE` | https://templates.shotstack.io/car-sale-video/3a10f0fc-e444-452f-8d4d-fa6ccfa48853/source.png |
| `LOGO` | https://templates.shotstack.io/car-sale-video/38e58ea8-b6dd-40f4-bb38-28601c9843c8/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
