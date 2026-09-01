# Elegant Living Room Showcase

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Elegant Living Room Showcase preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elegant_Living_Room_Showcase_e0061fa1ea.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/elegant-living-room-showcase-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/elegant-living-room-showcase-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
website,text_font_color,video_src
```

| Field | Default value |
| --- | --- |
| `WEBSITE` | WWW.REALESTATE.COM |
| `TEXT_FONT_COLOR` | #ffffff |
| `VIDEO_SRC` | https://templates.shotstack.io/elegant-living-room-showcase/5de22625-1f77-46c4-a94a-a96cedeb5c46/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
