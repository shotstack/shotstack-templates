# Board the Dream Promotional Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Board the Dream Promotional Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Board_the_Dream_Promotional_Offer_Template_f6272d9501.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/dream-vacation-promo-template-sail-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/dream-vacation-promo-template-sail-offer
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,cta,phone,web,video_src,font_color_1,font_color_2,audio_src
```

| Field | Default value |
| --- | --- |
| `Title_1` | Board the |
| `Title_2` | DREAM |
| `CTA` | SAIL TODAY |
| `Phone` | 002-345-1234 |
| `Web` | www.sailerscruise.com |
| `VIDEO_SRC` | https://templates.shotstack.io/dream-vacation-promo-template-sail-offer/77a68d28-1a79-4151-bda3-87b5f8292a3d/source.mp4 |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `AUDIO_SRC` | https://templates.shotstack.io/dream-vacation-promo-template-sail-offer/373e9a6e-194b-4957-9ae6-1cf924db14ba/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
