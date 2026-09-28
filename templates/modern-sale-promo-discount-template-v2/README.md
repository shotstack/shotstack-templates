# Modern Ripped Paper Sale Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 10s · **Format:** mp4 · **Category:** E-Commerce

![Modern Ripped Paper Sale Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Ripped_Paper_Sale_Promotion_Template_ba650bb26f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-sale-promo-discount-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/modern-sale-promo-discount-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
website,s1_title,s1_description,s2_description,cta,image_src,audio_src
```

| Field | Default value |
| --- | --- |
| `WEBSITE` | www.workshop.com |
| `S1_TITLE` | DISCOUNT UP TO |
| `S1_DESCRIPTION` | 30% |
| `S2_DESCRIPTION` | OFF |
| `CTA` | SHOP NOW |
| `IMAGE_SRC` | https://templates.shotstack.io/modern-sale-promo-discount-template/d132b805-cfc5-4014-b348-fe19bad098c5/source.jpg |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-sale-promo-discount-template/ec8537a2-3631-4920-872f-808c9155e458/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
