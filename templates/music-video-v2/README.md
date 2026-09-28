# Music Video Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Format:** mp4 · **Category:** Other

![Music Video Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/videoframe_1500_1_1b60a3e8dc.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/music-video-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/music-video-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
image_src,audio_src,text_var_512,text_var_455
```

| Field | Default value |
| --- | --- |
| `IMAGE_SRC` | https://templates.shotstack.io/music-video/b07bbc1f-ca0b-4018-aa93-7507cb8d238b/source.jpg |
| `AUDIO_SRC` | https://templates.shotstack.io/music-video/bb6151e7-8c5a-4f57-ab40-1298b7933928/source.mp3 |
| `TEXT_VAR_512` | Luna Raye |
| `TEXT_VAR_455` | Echoes of Midnight |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
