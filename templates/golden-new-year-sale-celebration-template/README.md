# Golden New Year Celebration & Sale Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Celebrations

![Golden New Year Celebration & Sale Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Golden_New_Year_Celebration_and_Sale_Template_0f9007c133.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/golden-new-year-sale-celebration-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/golden-new-year-sale-celebration-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,body,image,font_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Happy New Year |
| `Body` | As the year unfolds, may your home be filled with laughter, your bonds grow stronger, and every season bring blessings to your family. |
| `IMAGE` | https://templates.shotstack.io/golden-new-year-sale-celebration-template/e819a31b-cc96-4870-9802-53013d90b51e/source.png |
| `FONT_COLOR` | #f4d913 |
| `BACKGROUND_COLOR` | #000000 |
| `AUDIO` | https://templates.shotstack.io/golden-new-year-sale-celebration-template/29baaa3c-87fd-4ece-a2ea-a72b6b17f70b/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
