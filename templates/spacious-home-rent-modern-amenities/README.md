# Spacious Home for Rent with Modern Amenities

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Spacious Home for Rent with Modern Amenities preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Spacious_Home_for_Rent_with_Modern_Amenities_dd4cebc645.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/spacious-home-rent-modern-amenities/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/spacious-home-rent-modern-amenities
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,title,description,address,s2_title,description_1,description_2,description_3,cta,phone,text_font_color,text_background_color,image_src,image_src_2,image_src_3,image_src_4,text_background_color_2
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | REAL ESTATE |
| `TITLE` | House For Rent |
| `DESCRIPTION` | Spacious House |
| `ADDRESS` | 123 Anywhere St, Any City, ST 12345 |
| `S2_TITLE` | Features : |
| `DESCRIPTION_1` | -2 bedrooms and 2 bathrooms |
| `DESCRIPTION_2` | -Generous living spaces and well-equipped kitchen |
| `DESCRIPTION_3` | -High-speed intemet connectivity |
| `CTA` | Call : |
| `PHONE` | 123-456-7890 |
| `TEXT_FONT_COLOR` | #000000 |
| `TEXT_BACKGROUND_COLOR` | #feb820 |
| `IMAGE_SRC` | https://templates.shotstack.io/spacious-home-rent-modern-amenities/d6245eae-e6ea-4751-a6e3-c2e886d1352e/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/spacious-home-rent-modern-amenities/e96c8b8d-9b35-460c-af81-8121fcd72e7a/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/spacious-home-rent-modern-amenities/90551f85-ea9b-42a5-ae7c-6f3cbf5c5355/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/spacious-home-rent-modern-amenities/a02e1632-e10f-49ad-af6d-b648f326fecd/shotstack-proxy.webp |
| `TEXT_BACKGROUND_COLOR_2` | #ffffff |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
