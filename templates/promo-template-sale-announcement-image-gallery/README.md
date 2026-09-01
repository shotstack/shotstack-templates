# Dynamic Offer Showcase Vertical Gallery Promo Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Dynamic Offer Showcase Vertical Gallery Promo Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Dynamic_Offer_Showcase_Vertical_Gallery_Promo_Template_d2737b7e7c.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/promo-template-sale-announcement-image-gallery/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/promo-template-sale-announcement-image-gallery
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
tittle,discount,cta,web,image_1,image_2,image_3,image_4,image_5,font_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Tittle` | SMART CHOICE |
| `Discount` | SAVE BIG – UP TO 50% OFF |
| `CTA` | ORDER NOW |
| `Web` | WWW.HOMETOOLCHEF.COM |
| `IMAGE_1` | https://templates.shotstack.io/promo-template-sale-announcement-image-gallery/4614c2b5-cac0-4670-a262-12e00922fa97/source.png |
| `IMAGE_2` | https://templates.shotstack.io/promo-template-sale-announcement-image-gallery/98104216-a6db-4238-b909-084956f8cb28/source.png |
| `IMAGE_3` | https://templates.shotstack.io/promo-template-sale-announcement-image-gallery/77fc4a5f-0887-4d83-bb51-d6b55f3ebb8a/source.png |
| `IMAGE_4` | https://templates.shotstack.io/promo-template-sale-announcement-image-gallery/ccd125de-d1c0-4ea3-b6e7-e02abb3a332a/source.png |
| `IMAGE_5` | https://templates.shotstack.io/promo-template-sale-announcement-image-gallery/5ded70c2-13a4-460c-8f0e-4a81618ff00c/source.png |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #474343 |
| `AUDIO_SRC` | https://templates.shotstack.io/promo-template-sale-announcement-image-gallery/8054862d-e1b6-4e81-b1d7-79d45b3aebea/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
