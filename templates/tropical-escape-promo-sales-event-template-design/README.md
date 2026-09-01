# Tropical Escape Promotion & Sales Event Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Tropical Escape Promotion & Sales Event Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Tropical_Escape_Promotion_and_Sales_Event_Template_9da6b44f78.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/tropical-escape-promo-sales-event-template-design/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/tropical-escape-promo-sales-event-template-design
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,body,sutitle,list_1,list_2,list_3,list_4,list_5,list_6,cta,web,font_color,shape_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Title` | EXPLORE MALDIVE |
| `Body` | The serene islands call. The sun shines over clear waters, and leisure reigns. Soft winds, white sands, life without end. The journey begins, paradise awaits. |
| `Sutitle` | TOUR SERVICE |
| `List_1` | Island Hopping Tours |
| `List_2` | Water Sports Packages |
| `List_3` | Sunset Cruises |
| `List_4` | Cultural Village Tours |
| `List_5` | Luxury Resort Transfers |
| `List_6` | Private Sandbank Picnics |
| `CTA` | BOOK TODAY |
| `Web` | www.travellingsurvey.com |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #000000 |
| `AUDIO_SRC` | https://templates.shotstack.io/tropical-escape-promo-sales-event-template-design/c7cab34b-1155-4f01-8d8f-5c060c602924/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
