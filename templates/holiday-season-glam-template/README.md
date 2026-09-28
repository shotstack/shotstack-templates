# Holiday Season Glam Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 28s · **Format:** mp4 · **Category:** E-Commerce

![Holiday Season Glam Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_5074_0e140ba192.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/holiday-season-glam-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/holiday-season-glam-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
image_src,image_src_2,image_src_3,image_src_4,image_src_5,image_src_6,image_src_7,image_src_8,product_name,brand_name,product_cta,product_text,logo_src,product_subtitle
```

| Field | Default value |
| --- | --- |
| `IMAGE_SRC` | https://templates.shotstack.io/holiday-season-glam-template/1cf79a7d-a2a7-4da3-a626-4f21a79eea84/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/holiday-season-glam-template/78343df9-22ae-415a-a7a1-f30de9c6dea7/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/holiday-season-glam-template/541c5ab1-97bf-43d8-bb42-b2ad4543aaa2/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/holiday-season-glam-template/c9d09c62-9ef0-480e-b87f-fffe6702eb70/source.jpg |
| `IMAGE_SRC_5` | https://templates.shotstack.io/holiday-season-glam-template/81012371-9be6-4b0a-9b01-21acd8618871/source.jpg |
| `IMAGE_SRC_6` | https://templates.shotstack.io/holiday-season-glam-template/c011e0a8-720d-4c60-a330-7a4e7ac1769a/source.jpg |
| `IMAGE_SRC_7` | https://templates.shotstack.io/holiday-season-glam-template/372c1fa9-a16a-4220-95b6-d247ea0910f0/source.jpg |
| `IMAGE_SRC_8` | https://templates.shotstack.io/holiday-season-glam-template/ed781b38-f9da-400e-ad63-1508781f0a8a/source.jpg |
| `PRODUCT_NAME` | PRODUCT NAME |
| `BRAND_NAME` | BRAND NAME |
| `PRODUCT_CTA` | FREE DELIVERY |
| `PRODUCT_TEXT` | YOUR TEXT GOES HERE |
| `LOGO_SRC` | https://templates.shotstack.io/holiday-season-glam-template/68d19af4-20b9-41af-a999-1b3838a8bd6d/source.png |
| `PRODUCT_SUBTITLE` | YOUR SUBTITLE GOES HERE |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
