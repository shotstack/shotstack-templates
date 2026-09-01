# Best Car for Sale

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Best Car for Sale preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/best_car_for_sale_89a45f505c.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/best-car-for-sale-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/best-car-for-sale-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
image
```

| Field | Default value |
| --- | --- |
| `IMAGE` | https://templates.shotstack.io/best-car-for-sale/6c46dfdc-38ec-47a5-a799-07afca67adf6/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
