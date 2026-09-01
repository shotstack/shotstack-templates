# AI Avatar News Summary

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 39s · **Format:** mp4 · **Category:** News

![AI Avatar News Summary preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/ai_avatar_news_93766fdfbe.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/ai-avatar-news-summary-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/ai-avatar-news-summary-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
avatar,category,headline,image
```

| Field | Default value |
| --- | --- |
| `AVATAR` | https://templates.shotstack.io/ai-avatar-news-summary/c8cd7aef-0830-45ad-9106-d592209b34d3.mp4 |
| `CATEGORY` | TECHNOLOGY |
| `HEADLINE` | Apple announces special event for May 7: 'Let Loose' |
| `IMAGE` | https://templates.shotstack.io/ai-avatar-news-summary/4f5f6ad1-d89a-4a98-a247-5808e0a45168.webp |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
