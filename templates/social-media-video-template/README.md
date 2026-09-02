# Engaging Social Media Video Template - Capture Your Story

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 16.4s · **Format:** mp4 · **Category:** Social Media

![Engaging Social Media Video Template - Capture Your Story preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Engaging_Social_Media_Video_Template_Capture_Your_Story_3503a833b4.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/social-media-video-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/social-media-video-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
main_video,footage_2,footage_3,background_color
```

| Field | Default value |
| --- | --- |
| `MAIN_VIDEO` | https://templates.shotstack.io/social-media-video-template/334b9393-d73a-4271-b7d9-2c602305f973/source.mp4 |
| `FOOTAGE_2` | https://templates.shotstack.io/social-media-video-template/4d0f3313-a040-4b64-86e9-6dd8e518b0a6/source.jpg |
| `FOOTAGE_3` | https://templates.shotstack.io/social-media-video-template/1a6ffb15-3fbb-416c-a36d-bff474e94833/source.mp4 |
| `BACKGROUND_COLOR` | https://templates.shotstack.io/social-media-video-template/8e07de5f-787f-457a-b482-35ac40750eb0/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
