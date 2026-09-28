# Tech Unveiling: Breaking News Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 14.9s · **Format:** mp4 · **Category:** News

![Tech Unveiling: Breaking News Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Tech_Unveiling_Breaking_News_Template_3d466a7542.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/tech-unveiling-breaking-news-template-new-product-launch-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/tech-unveiling-breaking-news-template-new-product-launch-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
headline,news_slug,status,video_banner,video,font_color_1,font_color_2,shape_color,channel
```

| Field | Default value |
| --- | --- |
| `HEADLINE` | New Smartphone Model Released |
| `NEWS_SLUG` | NEWS UPDATE |
| `STATUS` | LIVE |
| `VIDEO_BANNER` | https://templates.shotstack.io/tech-unveiling-breaking-news-template-new-product-launch/1c08ca8e-bee0-46d9-8c31-8b9c2f07d135/source.mp4 |
| `VIDEO` | https://templates.shotstack.io/tech-unveiling-breaking-news-template-new-product-launch/768b2405-05ee-46cc-b35c-735529c6487c/source.mp4 |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #0000ce |
| `SHAPE_COLOR` | #ce0000 |
| `CHANNEL` | NNN NEWS |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
