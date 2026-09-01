# Explore the World: Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Explore the World: Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Explore_the_World_Travel_Promotion_Template_dc35b18cef.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-agency-promotion-template-world-deals/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/travel-agency-promotion-template-world-deals
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,cta,phone,web,font_color_1,font_color_2,shape_color_1,shape_color_2,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | EXPLORE THE WORLD |
| `Subtitle` | WE'VE GOT YOU COVERED |
| `CTA` | BOOK TODAY |
| `Phone` | 012-345-7890 |
| `Web` | www.travelsurvey.com |
| `FONT_COLOR_1` | #0642a2 |
| `FONT_COLOR_2` | #ffae00 |
| `SHAPE_COLOR_1` | #20a4c5 |
| `SHAPE_COLOR_2` | #ffffff |
| `BACKGROUND_COLOR` | #03cafc |
| `AUDIO` | https://templates.shotstack.io/travel-agency-promotion-template-world-deals/fe5b0b54-cc47-4ff8-b745-afc62a385980/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
