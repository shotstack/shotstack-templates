# World Wonder Tour & Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 8s · **Format:** mp4 · **Category:** Travel

![World Wonder Tour & Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/World_Wonder_Tour_and_Travel_Promotion_Template_9144d40570.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-deal-promo-template-tour-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/travel-deal-promo-template-tour-offer
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,info,phone,address,text_font_color,text_font_color_2,video,audio
```

| Field | Default value |
| --- | --- |
| `Title` | TAKE A TOUR |
| `Subtitle` | TO BEIJING |
| `Info` | For More Info: |
| `Phone` | (234)-567-8900 |
| `Address` | 24 Road at Street, Any City, Country |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_FONT_COLOR_2` | #000000 |
| `VIDEO` | https://templates.shotstack.io/travel-deal-promo-template-tour-offer/8c08abcf-3a16-4668-8af8-c858b9f75d8d/source.m4v |
| `AUDIO` | https://templates.shotstack.io/travel-deal-promo-template-tour-offer/dc3c6010-6931-40f0-bfb2-a7d61740146e/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
