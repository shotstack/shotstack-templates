# News Story Summary with Border

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** News

![News Story Summary with Border preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/breaking_news_summary_7a7e0abc31.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/breaking-news-summary-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/breaking-news-summary-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,b_roll_video
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | Rate of unemployment has dropped |
| `B_ROLL_VIDEO` | https://templates.shotstack.io/breaking-news-summary/85a22481-c670-4348-a26f-dd35acbbfa24/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
