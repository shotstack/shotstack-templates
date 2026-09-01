# New Arrivals Spotlight

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** E-Commerce

![New Arrivals Spotlight preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_3921_cde7f737c2.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/new-arrivals-spotlight/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/new-arrivals-spotlight
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,image_1,image_2,image_3,image_4,image_5,image_6
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | BRAND NAME |
| `IMAGE_1` | https://templates.shotstack.io/new-arrivals-spotlight/fa03d367-9c11-40a6-8f12-ce25f02e151d/source.jpg |
| `IMAGE_2` | https://templates.shotstack.io/new-arrivals-spotlight/654bd5b6-951d-47b0-a5c3-a2440a4f579d/source.jpg |
| `IMAGE_3` | https://templates.shotstack.io/new-arrivals-spotlight/3ee148e5-571d-4aa2-a42e-208d96dc0d6f/source.jpg |
| `IMAGE_4` | https://templates.shotstack.io/new-arrivals-spotlight/03aac303-fd44-45e0-8b87-317ee4698bbc/source.jpg |
| `IMAGE_5` | https://templates.shotstack.io/new-arrivals-spotlight/662394c0-1763-4ab5-9f42-33885792f777/source.jpg |
| `IMAGE_6` | https://templates.shotstack.io/new-arrivals-spotlight/fb5944c6-6765-4670-9d74-5d7d3d72c1c1/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
