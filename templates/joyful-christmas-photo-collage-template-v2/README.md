# Joyful Christmas Memories Photo Collage Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 10s · **Format:** mp4 · **Category:** Celebrations

![Joyful Christmas Memories Photo Collage Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Joyful_Christmas_Memories_Photo_Collage_Template_469a7b13e2.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/joyful-christmas-photo-collage-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/joyful-christmas-photo-collage-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,font_color,shape_background_color,background_image,video_1,video_2,video_3,video_4,text_background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Season Greetings |
| `FONT_COLOR` | #ffffff |
| `SHAPE_BACKGROUND_COLOR` | #167a37 |
| `BACKGROUND_IMAGE` | https://templates.shotstack.io/joyful-christmas-photo-collage-template/12dc7b16-2a3f-4d60-b8ae-7d9e348e33f4/source.jpg |
| `VIDEO_1` | https://templates.shotstack.io/joyful-christmas-photo-collage-template/d16be338-0192-4b88-aecb-dafc6b356724/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/joyful-christmas-photo-collage-template/7da7e4c9-2bc5-49cd-a10b-7fdddaeedcd5/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/joyful-christmas-photo-collage-template/4ded2e54-604a-46a4-8f68-b8239ebb248f/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/joyful-christmas-photo-collage-template/0727bc17-4687-4f7a-834b-db27716534a1/source.mp4 |
| `TEXT_BACKGROUND_COLOR` | #ddbc00 |
| `AUDIO` | https://templates.shotstack.io/joyful-christmas-photo-collage-template/7211278b-2350-495c-9e3c-79ac22b2f525/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
