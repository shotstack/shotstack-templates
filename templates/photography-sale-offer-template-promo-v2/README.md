# Capture the Moment: Modern Photography Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Capture the Moment: Modern Photography Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Capture_the_Moment_Modern_Photography_Promotion_Template_3a15567988.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/photography-sale-offer-template-promo-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/photography-sale-offer-template-promo-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
image_1,image_2,image_3,video,title_1,title_2,background_color,shape_color,audio_src
```

| Field | Default value |
| --- | --- |
| `IMAGE_1` | https://templates.shotstack.io/photography-sale-offer-template-promo/7fe06e67-45c8-4029-9a1f-04cb45b4d5de/source.jpg |
| `IMAGE_2` | https://templates.shotstack.io/photography-sale-offer-template-promo/a4d1f225-f717-48a3-a657-985559a97b90/source.png |
| `IMAGE_3` | https://templates.shotstack.io/photography-sale-offer-template-promo/76ae9c22-454d-4415-a9e0-8060747d3aa9/source.png |
| `VIDEO` | https://templates.shotstack.io/photography-sale-offer-template-promo/dd193fe2-94ba-4dcc-92f1-7a1e50a1e93d/source.mp4 |
| `Title_1` | PHOTOGRAPHY |
| `Title_2` | PHOTOGRAPHY |
| `BACKGROUND_COLOR` | #1f1f1f |
| `SHAPE_COLOR` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/photography-sale-offer-template-promo/76224f45-a17c-41cf-9a3c-42edb9950fab/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
