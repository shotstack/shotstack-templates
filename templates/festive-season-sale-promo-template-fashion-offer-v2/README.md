# Vibrant Festive Season Sale Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** E-Commerce

![Vibrant Festive Season Sale Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Vibrant_Festive_Season_Sale_Promotion_Template_72e1872299.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/festive-season-sale-promo-template-fashion-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/festive-season-sale-promo-template-fashion-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
logo,white_color,image_src,red_color,promo,title,pink_color,description,cta,black_color,audio_src
```

| Field | Default value |
| --- | --- |
| `LOGO` | https://templates.shotstack.io/festive-season-sale-promo-template-fashion-offer/ec3f1212-2892-44dc-bdad-1441495bae06/source.png |
| `WHITE_COLOR` | #ffffff |
| `IMAGE_SRC` | https://templates.shotstack.io/festive-season-sale-promo-template-fashion-offer/b6f55737-4a47-4d1f-9a3d-5d79fca4844b/source.jpg |
| `RED_COLOR` | #b81414 |
| `PROMO` | 40% OFF |
| `TITLE` | Special Sale |
| `PINK_COLOR` | #f36d9c |
| `DESCRIPTION` | Looking for great deals on quality products? Check out our special sale products! |
| `CTA` | SHOP NOW |
| `BLACK_COLOR` | #000000 |
| `AUDIO_SRC` | https://templates.shotstack.io/festive-season-sale-promo-template-fashion-offer/c536bb55-9194-43aa-a5d9-da87b5a3b4f7/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
