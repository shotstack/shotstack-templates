# Stylish 'Special Menu' Daily Deal & Sale Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 10s · **Format:** mp4 · **Category:** E-Commerce

![Stylish 'Special Menu' Daily Deal & Sale Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Stylish_Special_Menu_Daily_Deal_and_Sale_Template_e0a5f8dd45.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/special-offer-sale-promotion-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/special-offer-sale-promotion-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_title_2,s1_title_3,cta,text_font_color,text_font_color_2,image_src,video_src,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_TITLE` | TODAY'S |
| `S1_TITLE_2` | Special |
| `S1_TITLE_3` | MENU |
| `CTA` | 50% OFF |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_FONT_COLOR_2` | #feb310 |
| `IMAGE_SRC` | https://templates.shotstack.io/Special-offer-sale-promotion-template/1b936502-09bb-4a2e-8181-a71c25b3554a/source.png |
| `VIDEO_SRC` | https://templates.shotstack.io/Special-offer-sale-promotion-template/f9e4c720-52e6-4775-b970-64f458a8d565/source.mp4 |
| `AUDIO_SRC` | https://templates.shotstack.io/Special-offer-sale-promotion-template/ff3316c4-542f-44e3-962f-93d8b3c5e0f0/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
