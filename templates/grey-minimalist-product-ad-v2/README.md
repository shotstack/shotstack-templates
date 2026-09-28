# Product Sale Minimalist

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Product Sale Minimalist preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_2655_1be9933bff.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/grey-minimalist-product-ad-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/grey-minimalist-product-ad-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
product_name,product_feature,product_image
```

| Field | Default value |
| --- | --- |
| `PRODUCT_NAME` | CLASSIC WATCH |
| `PRODUCT_FEATURE` | WATER RESISTANT |
| `PRODUCT_IMAGE` | https://templates.shotstack.io/grey-minimalist-product-ad/07c63830-f749-4acd-b450-9cc51c53a128/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
