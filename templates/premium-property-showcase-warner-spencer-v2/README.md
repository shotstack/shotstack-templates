# Premium Property Showcase

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Premium Property Showcase preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Premium_Property_Showcase_by_Warner_and_Spencer_2_8eb0eda0b0.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/premium-property-showcase-warner-spencer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/premium-property-showcase-warner-spencer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,tag,features_1,features_2,features_3,features_4,features_5,features_6,agent,email,address,long_background_color,short_background_color_2,s1_image_src,image_src_2,image_src_3,image_src_4,video_src,image_src_5,agent_image_src_6,black_font_color_2,elements_color
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | LOUIS & KATE |
| `TAG` | We've got everything for you! |
| `FEATURES_1` | - Posh Apartments |
| `FEATURES_2` | - Prime Resthouse |
| `FEATURES_3` | - Countryside Homes |
| `FEATURES_4` | - Lease Offices |
| `FEATURES_5` | - Executive Mansions |
| `FEATURES_6` | - Condominiums |
| `AGENT` | Helene Paq |
| `EMAIL` | @realeastate.com |
| `ADDRESS` | 123 Bloffville St., the real road |
| `LONG_BACKGROUND_COLOR` | #c1beb8 |
| `SHORT_BACKGROUND_COLOR_2` | #fffcf5 |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/premium-property-showcase-warner-spencer/6ed1cba8-0ba7-415c-9ad4-ab7d28517009/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/premium-property-showcase-warner-spencer/3cda1eef-d6c4-4b79-92f3-db5eeece05c3/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/premium-property-showcase-warner-spencer/fa363bbb-0de8-4141-94b6-7cfe35778f44/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/premium-property-showcase-warner-spencer/649a6f9e-5459-40af-b4c8-ecc0886f45b5/source.jpg |
| `VIDEO_SRC` | https://templates.shotstack.io/premium-property-showcase-warner-spencer/ad907e3c-2e99-4f49-83cb-58c2c33027d8/source.mp4 |
| `IMAGE_SRC_5` | https://templates.shotstack.io/premium-property-showcase-warner-spencer/fb3cc655-f2d3-4a39-8b82-d4ade1ef8c14/source.jpg |
| `AGENT_IMAGE_SRC_6` | https://templates.shotstack.io/premium-property-showcase-warner-spencer/a3fdcbdd-ece3-4ead-a6ac-7892ee9f07d4/shotstack-proxy.webp |
| `BLACK_FONT_COLOR_2` | #000000 |
| `ELEMENTS_COLOR` | #eee8dd |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
