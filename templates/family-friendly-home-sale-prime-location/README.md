# Family-Friendly Home for Sale in Prime Location

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 11.7s · **Format:** mp4 · **Category:** Listings & Classifieds

![Family-Friendly Home for Sale in Prime Location preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Family_Friendly_Home_for_Sale_in_Prime_Location_5a8d8ddb22.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/family-friendly-home-sale-prime-location/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/family-friendly-home-sale-prime-location
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
description_2,title,description,s2_title,s2_description_1,s2_description_2,s2_description_3,address,cta,phone,email,website,text_font_color,text_font_color_2,image_src,image_src_2,image_src_3,image_src_4,red_background_color,brown_background_color_2
```

| Field | Default value |
| --- | --- |
| `DESCRIPTION_2` | PERFECT FOR FAMILY LIFE |
| `TITLE` | Minimalist |
| `DESCRIPTION` | HOUSE FOR SALE |
| `S2_TITLE` | Features: |
| `S2_DESCRIPTION_1` | . Tranquil Residential Haven |
| `S2_DESCRIPTION_2` | . Thriving Commercial Hub |
| `S2_DESCRIPTION_3` | . Investment Gem |
| `ADDRESS` | 123 Anywhere St, Any City, ST 12345 |
| `CTA` | Contact Us: |
| `PHONE` | +123-456-7890 |
| `EMAIL` | Hello@realestate.com |
| `WEBSITE` | www.realestate.com |
| `TEXT_FONT_COLOR` | #000000 |
| `TEXT_FONT_COLOR_2` | #ffffff |
| `IMAGE_SRC` | https://templates.shotstack.io/family-friendly-home-sale-prime-location/773040a9-c7c9-4041-ae1b-79faa3d12677/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/family-friendly-home-sale-prime-location/83cc5477-4bc2-4d6f-8c09-b4eaa486dc18/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/family-friendly-home-sale-prime-location/618b9301-3909-4090-b805-51bc99bc4cd6/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/family-friendly-home-sale-prime-location/1ecc6f52-41b2-481a-ac20-feb0665d3ccd/source.jpg |
| `RED_BACKGROUND_COLOR` | #a22020 |
| `BROWN_BACKGROUND_COLOR_2` | #fff9f0 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
