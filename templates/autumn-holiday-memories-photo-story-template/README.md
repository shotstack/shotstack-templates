# Autumn Holiday Moments & Memories Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 25s · **Format:** mp4 · **Category:** Memories

![Autumn Holiday Moments & Memories Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Autumn_Holiday_Moments_and_Memories_Template_5a56e285b5.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/autumn-holiday-memories-photo-story-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/autumn-holiday-memories-photo-story-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,subtitle_1,body_1,subtitle_2,body_2,subtitle_3,body_3,subtitle_4,body_4,text_font_color,text_font_color_2,text_font_color_3,flower,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | Autumn in November |
| `Title_2` | #Autumn Break 2025 |
| `Subtitle_1` | KAYAKING ON AUTUMN LAKES |
| `Body_1` | Glide across calm waters reflecting fiery treetops, the stillness broken only by the dip of your paddle, surrounded by nature’s quiet, colorful spectacle. |
| `Subtitle_2` | MOUNTAIN HIKES WITH FOLIAGE |
| `Body_2` | Trek along rugged trails where crisp mountain air meets sweeping vistas of valleys and forests bursting with vibrant autumn color. |
| `Subtitle_3` | LEAF-PEEPING HIKES IN FORESTS |
| `Body_3` | Stroll through woodlands painted in shades of crimson, amber, and gold, where every step crunches with fallen leaves, and the air is filled with the earthy scent of autumn. |
| `Subtitle_4` | NATURE PHOTOGRAPHY IN AUTUMN |
| `Body_4` | Capture magical landscapes kissed by golden sunlight, misty mornings rolling across valleys, and forests transforming into a vivid palette of red, orange, and yellow. |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_FONT_COLOR_2` | #e97d07 |
| `TEXT_FONT_COLOR_3` | #000000 |
| `Flower` | https://templates.shotstack.io/autumn-holiday-memories-photo-story-template/dbbcd2c2-9722-420e-aeff-ae1f274dc1fa/source.png |
| `AUDIO` | https://templates.shotstack.io/autumn-holiday-memories-photo-story-template/e21776f0-3fb5-4e47-a7c5-6d6d2899610c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
