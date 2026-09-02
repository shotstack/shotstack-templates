# Hello World

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 4s · **Format:** mp4 · **Category:** Other

![Hello World preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/hello_world_48b2e89a23.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/hello-world-title-video-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/hello-world-title-video-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
name
```

| Field | Default value |
| --- | --- |
| `NAME` | WORLD |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
