# Government Policy Review News Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 20s · **Format:** mp4 · **Category:** News

![Government Policy Review News Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Government_Policy_Review_News_Template_04b6a40a41.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/government-policy-review-news-template-updates-analysis-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/government-policy-review-news-template-updates-analysis-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
heading,bulletin,status,phone,email,web,font_color_1,font_color_2,shape_color,video_presenter,video_background
```

| Field | Default value |
| --- | --- |
| `HEADING` | GOVERNMENT REVIEWS POLICIES TO BOOST IMPORTATION AND STRENGTHEN EXPORTATION FOR ECONOMIC GROWTH |
| `BULLETIN` | NEWS UPDATE |
| `STATUS` | LIVE |
| `PHONE` | +100-327-3432 |
| `EMAIL` | HELP@NEWSNORTHSURVEY.COM |
| `WEB` | WWW.NEWSNORTHSURVEY.COM |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `SHAPE_COLOR` | #bb0000 |
| `VIDEO_PRESENTER` | https://templates.shotstack.io/government-policy-review-news-template-updates-analysis/e679c6c9-f333-4cb9-9669-1f842c2d3e2a/source.mp4 |
| `VIDEO_BACKGROUND` | https://templates.shotstack.io/government-policy-review-news-template-updates-analysis/4f303b15-cd4f-49f9-b3ed-9638a07fae48/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
