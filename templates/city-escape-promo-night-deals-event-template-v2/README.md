# Nightscape Deals: City Lights Promotional Campaign

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10.8s · **Format:** mp4 · **Category:** Travel

![Nightscape Deals: City Lights Promotional Campaign preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Nightscape_Deals_City_Lights_Promotional_Campaign_0debdd6c91.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/city-escape-promo-night-deals-event-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/city-escape-promo-night-deals-event-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,font_color_1,font_color_2,video_1,video_2,video_3,video_4,video_5,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | HAVE YOU BEEN TO |
| `Title_2` | JAPAN |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #ff0000 |
| `VIDEO_1` | https://templates.shotstack.io/city-escape-promo-night-deals-event-template/1929cdef-d97a-4d6d-bc11-cf004f328e66/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/city-escape-promo-night-deals-event-template/029262c2-02af-4fcb-abb1-6be8c148db02/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/city-escape-promo-night-deals-event-template/134beed4-f7e9-4ddd-bd96-c4c984f9e1cb/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/city-escape-promo-night-deals-event-template/39270be4-7132-4f23-a09d-8d71016d4ff4/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/city-escape-promo-night-deals-event-template/a7369cb3-6d3d-4e0d-be8b-a30948a46d6b/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/city-escape-promo-night-deals-event-template/a00a5d84-359a-4228-bbb7-123a85709843/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
