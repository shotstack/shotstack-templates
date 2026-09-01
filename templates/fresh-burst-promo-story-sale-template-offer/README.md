# Fresh Burst Promotional Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Format:** mp4 · **Category:** E-Commerce

![Fresh Burst Promotional Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Fresh_Burst_Promotional_Story_Template_1e6206da48.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/fresh-burst-promo-story-sale-template-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/fresh-burst-promo-story-sale-template-offer
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,title_3,body,product_name,font_color_title_1,font_color_body,product_image,fruit_image_1,fruit_image_2,fruit_image_3,audio_src,font_color_title_2&3
```

| Field | Default value |
| --- | --- |
| `Title_1` | Fresh! |
| `Title_2` | Fresh! |
| `Title_3` | Fresh! |
| `Body` | Refreshing. Natural. Pure. Delicious. |
| `Product_Name` | Luxemeal Red Currants Juice |
| `FONT_COLOR_Title_1` | #000000 |
| `FONT_COLOR_Body` | #860909 |
| `Product_IMAGE` | https://templates.shotstack.io/fresh-burst-promo-story-sale-template-offer/c99cd342-5f6e-4567-8f00-ee9b252b669a/source.png |
| `Fruit_IMAGE_1` | https://templates.shotstack.io/fresh-burst-promo-story-sale-template-offer/2b7aa6e3-d4a6-43a8-b184-6bee2aca4dbd/source.png |
| `Fruit_IMAGE_2` | https://templates.shotstack.io/fresh-burst-promo-story-sale-template-offer/c5ff92b6-eeb5-402e-87b0-9bf8883f5bbe/source.png |
| `Fruit_IMAGE_3` | https://templates.shotstack.io/fresh-burst-promo-story-sale-template-offer/ccd42450-ac34-4c3e-910a-66c287b7e6e3/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/fresh-burst-promo-story-sale-template-offer/44a2cb3d-a1a4-4e30-acfb-b83f3e2ee274/source.mp3 |
| `FONT_COLOR_Title_2&3` | #dfc8c8 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
