# Video Watermark

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Format:** mp4 · **Category:** Other

![Video Watermark preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/watermark_video_013499ec2d.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/video-watermark/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/video-watermark
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
video
```

| Field | Default value |
| --- | --- |
| `VIDEO` | https://templates.shotstack.io/video-watermark/f74212dc-4679-4350-8c63-881747ac6202/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
