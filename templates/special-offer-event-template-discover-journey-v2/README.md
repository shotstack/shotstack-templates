# Ready to Discover Promotions Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Travel

![Ready to Discover Promotions Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Ready_to_Discover_Promotions_Template_cdd2d3b628.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/special-offer-event-template-discover-journey-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/special-offer-event-template-discover-journey-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,font_color,audio,video
```

| Field | Default value |
| --- | --- |
| `Title` | Ready to discover the unknown! |
| `FONT_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/special-offer-event-template-discover-journey/2ef1db71-41c8-433d-b003-91c972489aef/source.mp3 |
| `VIDEO` | https://templates.shotstack.io/special-offer-event-template-discover-journey/d3817223-c203-4f78-9b13-56f614237387/source.m4v |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
