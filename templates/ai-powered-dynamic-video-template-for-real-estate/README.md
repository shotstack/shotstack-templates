# AI-Powered Dynamic Video Template for Real Estate

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 21s · **Format:** mp4 · **Category:** Listings & Classifieds

![AI-Powered Dynamic Video Template for Real Estate preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_7715_c212b1c4e4.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/ai-powered-dynamic-video-template-for-real-estate/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/ai-powered-dynamic-video-template-for-real-estate
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
address,city,size,bedrooms,bathrooms,price,agent,logo,image1,image2,image3,image4
```

| Field | Default value |
| --- | --- |
| `address` | 21 Norma Road |
| `city` | Palm Beach |
| `size` | 1,275 m² |
| `bedrooms` | 4 |
| `bathrooms` | 3 |
| `price` | $1,750,000 |
| `agent` | Peter Robinson |
| `logo` | https://templates.shotstack.io/ai-powered-dynamic-video-template-for-real-estate/4770d9cc-ee81-4d3a-8446-5b6b5d78fc11/source.png |
| `image1` | https://templates.shotstack.io/ai-powered-dynamic-video-template-for-real-estate/bb98bd76-ee3c-4147-9508-c8ba97fdeaa8/source.jpg |
| `image2` | https://templates.shotstack.io/ai-powered-dynamic-video-template-for-real-estate/a17a869a-ef0d-4ba9-a147-763b93ef7730/source.jpg |
| `image3` | https://templates.shotstack.io/ai-powered-dynamic-video-template-for-real-estate/5b453279-baf5-48f7-b732-423b79892972/source.jpg |
| `image4` | https://templates.shotstack.io/ai-powered-dynamic-video-template-for-real-estate/a6275f7c-5c42-4acc-8372-598c31e7869c/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
