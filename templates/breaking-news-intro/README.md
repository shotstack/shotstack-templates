# Breaking News Intro

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 16s · **Format:** mp4 · **Category:** News

![Breaking News Intro preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/breaking_news_intro_1caf4d1845.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/breaking-news-intro/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/breaking-news-intro
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
vertical_image,horizontal_image,primary_image
```

| Field | Default value |
| --- | --- |
| `VERTICAL_IMAGE` | https://templates.shotstack.io/breaking-news-intro/3796ff11-eba0-45bc-8b41-09071b46881c/source.jpg |
| `HORIZONTAL_IMAGE` | https://templates.shotstack.io/breaking-news-intro/6e80d917-a203-482f-98a3-ef62278a1430/source.jpg |
| `PRIMARY_IMAGE` | https://templates.shotstack.io/breaking-news-intro/272b9b01-5e2d-4488-a245-6409cb2f39f1/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
