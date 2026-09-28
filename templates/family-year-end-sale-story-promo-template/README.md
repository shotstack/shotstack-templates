# Family Moments Year-End Sale Story

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Celebrations

![Family Moments Year-End Sale Story preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Family_Moments_Year_End_Sale_Story_5333c2b958.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/family-year-end-sale-story-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/family-year-end-sale-story-promo-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_video_1,s1_video_2,s1_video_3,s2_title_1,s2_title_2,s2_title_3,s2_body,s2_video,text_font_color,text_background_color,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | THE FAMILY YEAR-END DUMP |
| `S1_VIDEO_1` | https://templates.shotstack.io/family-year-end-sale-story-promo-template/f2c05cc1-9371-4489-b432-59fb03e15206/source.mp4 |
| `S1_VIDEO_2` | https://templates.shotstack.io/family-year-end-sale-story-promo-template/d546a9d6-2b1d-490a-b498-db37dd9d3e35/source.mp4 |
| `S1_VIDEO_3` | https://templates.shotstack.io/family-year-end-sale-story-promo-template/5bfa2b9a-d795-4d63-8608-9605567993a6/source.mp4 |
| `S2_Title_1` | Happy |
| `S2_Title_2` | New Year |
| `S2_Title_3` | 2026 |
| `S2_Body` | It’s been fun, and now begins a new chapter for even greater things |
| `S2_VIDEO` | https://templates.shotstack.io/family-year-end-sale-story-promo-template/efb3f69d-6444-4ef1-8bd6-2a73707a4ec0/source.mp4 |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_BACKGROUND_COLOR` | #404040 |
| `AUDIO` | https://templates.shotstack.io/family-year-end-sale-story-promo-template/28f4b306-af5f-4a62-b858-c53a190e32f4/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
