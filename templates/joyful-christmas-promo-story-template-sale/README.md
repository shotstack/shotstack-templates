# Joyful Christmas Moment Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 13.7s · **Format:** mp4 · **Category:** Celebrations

![Joyful Christmas Moment Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Joyful_Christmas_Moment_Story_Template_28b6c4d900.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/joyful-christmas-promo-story-template-sale/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/joyful-christmas-promo-story-template-sale
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,image_1,image_2,image_3,image_4,image_5,image_6,image_7,font_color,background_color
```

| Field | Default value |
| --- | --- |
| `Title_1` | THE BEST FAMILY MOMENT |
| `Title_2` | CHRISTMAS GAVE ME |
| `IMAGE_1` | https://templates.shotstack.io/joyful-christmas-promo-story-template-sale/e77d76a3-8fdf-4fe0-89b6-d6393ccd4fb4/source.png |
| `IMAGE_2` | https://templates.shotstack.io/joyful-christmas-promo-story-template-sale/e04d69bc-5a99-4bea-be2b-34a5640cddfc/source.png |
| `IMAGE_3` | https://templates.shotstack.io/joyful-christmas-promo-story-template-sale/67cff801-4be2-4005-b646-2170be16608a/source.png |
| `IMAGE_4` | https://templates.shotstack.io/joyful-christmas-promo-story-template-sale/3611b03a-1094-4d98-8994-f80853e53073/source.png |
| `IMAGE_5` | https://templates.shotstack.io/joyful-christmas-promo-story-template-sale/f2ccaca7-a20a-4b54-8be3-b8f57113523b/source.png |
| `IMAGE_6` | https://templates.shotstack.io/joyful-christmas-promo-story-template-sale/5c5b1bf1-a7ea-44f3-8b1c-a0761ecbcab6/source.png |
| `IMAGE_7` | https://templates.shotstack.io/joyful-christmas-promo-story-template-sale/21add812-304f-46a0-ba78-6438548932f3/source.png |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #800000 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
