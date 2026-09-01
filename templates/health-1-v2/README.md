# Wellness Meditation Ad

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** Health

![Wellness Meditation Ad preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/health_1_45b2d310ac.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/health-1-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/health-1-v2
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
| `VIDEO` | https://templates.shotstack.io/health-1/2f0eb4be-8210-4bb8-a721-21ec131e60ef/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
