# Timeless Moments - Inspirational Quote Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 7s · **Format:** mp4 · **Category:** Other

![Timeless Moments - Inspirational Quote Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Timeless_Moments_Inspirational_Quote_Template_be03a5333d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/timeless-moments-quote-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/timeless-moments-quote-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_text,s2_text,s1_image_src,text_font_color,text_stroke_color,text_stroke_width,website,brandname,s2_text_font_color
```

| Field | Default value |
| --- | --- |
| `S1_TEXT` | Why do some moments feel timeless, as if they never fade? |
| `S2_TEXT` | Because they are filled with emotions, connections, and experiences that leave a lasting impact on your soul. |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/timeless-moments-quote-template/e050cbe5-61d0-45dc-a6d2-2c9d6d2ae35b/source.jpg |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_STROKE_COLOR` | #000000 |
| `TEXT_STROKE_WIDTH` | 1 |
| `WEBSITE` | www.brandname.com |
| `BRANDNAME` | BRANDNAME |
| `S2_TEXT_FONT_COLOR` | #ffffff |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
