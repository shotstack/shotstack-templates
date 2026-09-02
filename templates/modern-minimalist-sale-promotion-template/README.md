# Modern & Minimalist Sale Announcement Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Modern & Minimalist Sale Announcement Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_and_Minimalist_Sale_Announcement_Template_cbac1974ee.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-minimalist-sale-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/modern-minimalist-sale-promotion-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,web,image,stand,font_color,web_background_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Title` | HEYFLASK |
| `Web` | www.heyflask.com |
| `IMAGE` | https://templates.shotstack.io/modern-minimalist-sale-promotion-template/cce3ab9a-343c-49a4-8c10-62c304d455b5/source.png |
| `Stand` | https://templates.shotstack.io/modern-minimalist-sale-promotion-template/cac94a78-7045-4c8f-a185-88a2e2dc618a/source.png |
| `FONT_COLOR` | #ffffff |
| `Web_BACKGROUND_COLOR` | #bd807a |
| `BACKGROUND_COLOR` | #d0a39f |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-minimalist-sale-promotion-template/a6be1ecf-c13c-458f-823c-54b60e51fc87/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
