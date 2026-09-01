# TechTalks Live Event Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 15s · **Format:** mp4 · **Category:** News

![TechTalks Live Event Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Tech_Talks_Live_Event_Template_165befab2a.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/techtalks-live-event-promo-template-speaker-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/techtalks-live-event-promo-template-speaker-offer-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
tag,name,font_color_1,font_color_2,shape_color_1,shape_color_2,video
```

| Field | Default value |
| --- | --- |
| `TAG` | SPEAKER |
| `NAME` | HENRY THOMAS |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `SHAPE_COLOR_1` | #000000 |
| `SHAPE_COLOR_2` | #d85405 |
| `VIDEO` | https://templates.shotstack.io/techtalks-live-event-promo-template-speaker-offer/3609e27b-d3b3-40bd-a6f1-b510d7c2cc8f/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
