# Charming Comfort – Embrace Modern Real Estate

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Charming Comfort – Embrace Modern Real Estate preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Charming_Comfort_Embrace_Modern_Real_Estate_1bfde7fde4.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/charming-comfort-embrace-modern-real-estate/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/charming-comfort-embrace-modern-real-estate
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,website,cta,text_font_color,top_element_color,side_element_color,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | MODERN REAL ESTATE |
| `DESCRIPTION` | Embrace Real Estate Bliss |
| `WEBSITE` | WWW.REALESTATECOMPANY.COM |
| `CTA` | BUY NOW |
| `TEXT_FONT_COLOR` | #ffffff |
| `TOP_ELEMENT_COLOR` | #cec2a1 |
| `SIDE_ELEMENT_COLOR` | #b1a481 |
| `AUDIO_SRC` | https://templates.shotstack.io/charming-comfort-embrace-modern-real-estate/7d8e2d26-7f0c-4374-aada-7a3665d64119/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
