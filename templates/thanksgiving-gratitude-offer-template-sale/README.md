# Thanksgiving Gratitude Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 6s · **Format:** mp4 · **Category:** Celebrations

![Thanksgiving Gratitude Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Thanksgiving_Gratitude_Offer_Template_042264df1d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/thanksgiving-gratitude-offer-template-sale/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/thanksgiving-gratitude-offer-template-sale
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,greetings,element_1,element_2,font_color,shape_color,video,audio,background_image
```

| Field | Default value |
| --- | --- |
| `Title_1` | Season’s |
| `Title_2` | Gratitude |
| `Greetings` | Sending you warmth, kindness, and lasting memories this Thanksgiving. |
| `Element_1` | https://templates.shotstack.io/thanksgiving-gratitude-offer-template-sale/ec31bf34-513a-48a4-b1a5-405e697f5bf8/source.png |
| `Element_2` | https://templates.shotstack.io/thanksgiving-gratitude-offer-template-sale/e84c0263-545c-4c70-b8ea-66c791c40a47/source.png |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #d8d6c7 |
| `VIDEO` | https://templates.shotstack.io/thanksgiving-gratitude-offer-template-sale/f18c4ce8-3791-4e86-8d8f-98155872448b/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/thanksgiving-gratitude-offer-template-sale/ff769c1b-f461-4a2d-ab2a-b25e9c167670/source.mp3 |
| `BACKGROUND_IMAGE` | https://templates.shotstack.io/thanksgiving-gratitude-offer-template-sale/3e92b72e-b028-440d-8542-69bf63512240/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
