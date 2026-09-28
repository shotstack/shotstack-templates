# Chic Luxury Apartment for Rent

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 11.9s · **Format:** mp4 · **Category:** Listings & Classifieds

![Chic Luxury Apartment for Rent preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Chic_Luxury_Apartment_for_Rent_de866cf427.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/chic-luxury-apartment-rent-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/chic-luxury-apartment-rent-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,cta,text_font_color,text_font_color_2,audio_src,video_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | LUXURY APARTMENT |
| `DESCRIPTION` | - FOR RENT |
| `CTA` | CONTACT +123 456 7890 |
| `TEXT_FONT_COLOR` | #ffae00 |
| `TEXT_FONT_COLOR_2` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/chic-luxury-apartment-rent/40711cb1-d5ac-43ef-8ef2-17acc2d0e74d/shotstack-proxy.mp3 |
| `VIDEO_SRC` | https://templates.shotstack.io/chic-luxury-apartment-rent/df4c0139-fdd0-445d-b2b9-e46c4d9dddba/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
