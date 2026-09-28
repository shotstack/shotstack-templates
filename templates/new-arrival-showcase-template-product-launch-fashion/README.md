# Elegant New Arrival & Collection Showcase Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 18.8s · **Format:** mp4 · **Category:** E-Commerce

![Elegant New Arrival & Collection Showcase Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elegant_New_Arrival_and_Collection_Showcase_Template_2_90a88d8b8c.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/new-arrival-showcase-template-product-launch-fashion/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/new-arrival-showcase-template-product-launch-fashion
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,image_src,image_src_2,image_src_3,image_src_4,background_text,web,font_color,web_color,shape_color,logo,audio_src,background_color,review_2
```

| Field | Default value |
| --- | --- |
| `Title_1` | NEW |
| `Title_2` | ARRIVAL |
| `IMAGE_SRC` | https://templates.shotstack.io/new-arrival-showcase-template-product-launch-fashion/01c26c5e-8986-4cf1-86a0-11521ae0049d/source.png |
| `IMAGE_SRC_2` | https://templates.shotstack.io/new-arrival-showcase-template-product-launch-fashion/1be99e62-02dd-405d-9108-f3686f99830e/source.png |
| `IMAGE_SRC_3` | https://templates.shotstack.io/new-arrival-showcase-template-product-launch-fashion/0f95f226-4735-4a49-84fb-8bc7cad0a198/source.png |
| `IMAGE_SRC_4` | https://templates.shotstack.io/new-arrival-showcase-template-product-launch-fashion/86aee47d-8894-4e01-a92a-0b7dbf7a78c3/source.png |
| `Background_Text` | NEW ARRIVAL |
| `Web` | WWW.WEDDINGGOWN.COM |
| `FONT_COLOR` | #000000 |
| `Web_COLOR` | #ffffff |
| `Shape_COLOR` | #bababa |
| `Logo` | https://templates.shotstack.io/new-arrival-showcase-template-product-launch-fashion/986c14e5-27cc-417c-9674-40d2d5b66f08/source.png |
| `AUDIO_SRC` | https://templates.shotstack.io/new-arrival-showcase-template-product-launch-fashion/f113b945-4541-4c31-9ba5-777d3d8643f9/source.mp3 |
| `BACKGROUND_COLOR` | #e6e6e6 |
| `Review_2` | https://templates.shotstack.io/new-arrival-showcase-template-product-launch-fashion/52c286b1-9eda-4f36-9250-337235bc919e/source.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
