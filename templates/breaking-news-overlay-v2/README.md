# Local News Intro with Overlay

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 24s · **Format:** mp4 · **Category:** News

![Local News Intro with Overlay preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/breaking_news_overlay_f4afc88024.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/breaking-news-overlay-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/breaking-news-overlay-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
city,story_image,city_image,headline_image
```

| Field | Default value |
| --- | --- |
| `CITY` | SYDNEY |
| `STORY_IMAGE` | https://templates.shotstack.io/breaking-news-overlay/9983de60-e990-457e-b02a-ec9982ebf9f6/source.jpg |
| `CITY_IMAGE` | https://templates.shotstack.io/breaking-news-overlay/d038e3a8-9a3b-4adb-a1fa-bf242d7fac01/source.jpg |
| `HEADLINE_IMAGE` | https://templates.shotstack.io/breaking-news-overlay/a157ce89-05af-4c6e-ae62-672f5f416ee1/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
