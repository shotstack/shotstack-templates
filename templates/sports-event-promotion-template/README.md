# Event Announcement Template - Promote Your Sports Match

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 15s · **Format:** mp4 · **Category:** Other

![Event Announcement Template - Promote Your Sports Match preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Event_Announcement_Template_Promote_Your_Sports_Match_f83ba1b6ff.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/sports-event-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/sports-event-promotion-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
header,footer,match_type,logo_image_src,gradient_background_color,first_background_color_2,image_src,board_background_color,bar_background_color,star_background_color,star_color,logo_image_src_1,logo_image_src_2,vs_text_font_color,time,date,text_font_color,text_font_color_2,date_color,time_color
```

| Field | Default value |
| --- | --- |
| `HEADER` | SAKSIKANLAH PERTANDIGAN PERSAHABATAN |
| `FOOTER` | PERTANDIGAN PERSAHABATAN |
| `MATCH_TYPE` | FRIENDLY MATCH |
| `LOGO_IMAGE_SRC` | https://templates.shotstack.io/sports-event-promotion-template/60f6e9b5-266b-4d0e-8992-e4022a7040c2/shotstack-proxy.webp |
| `GRADIENT_BACKGROUND_COLOR` | #ff0000 |
| `FIRST_BACKGROUND_COLOR_2` | #154956 |
| `IMAGE_SRC` | https://templates.shotstack.io/sports-event-promotion-template/9a528451-04b5-4519-9cf0-5ac42975a4fb/shotstack-proxy.webp |
| `BOARD_BACKGROUND_COLOR` | #ffffff |
| `BAR_BACKGROUND_COLOR` | #187ba5 |
| `STAR_BACKGROUND_COLOR` | #187ba5 |
| `STAR_COLOR` | #193c06 |
| `LOGO_IMAGE_SRC_1` | https://templates.shotstack.io/sports-event-promotion-template/a535ae1c-9ff4-4e7e-9507-d0f08f46f702/shotstack-proxy.webp |
| `LOGO_IMAGE_SRC_2` | https://templates.shotstack.io/sports-event-promotion-template/b21dfcb4-4d9a-4d46-be05-0ec56ccfe414/shotstack-proxy.webp |
| `VS_TEXT_FONT_COLOR` | #000000 |
| `TIME` | 17:00PM |
| `DATE` | FEB 20, 2024 |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_FONT_COLOR_2` | #ffffff |
| `DATE_COLOR` | #7011d0 |
| `TIME_COLOR` | #ff0000 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
