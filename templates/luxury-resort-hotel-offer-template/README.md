# Luxury Resort & Hotel Big Deal Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Luxury Resort & Hotel Big Deal Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Luxury_Resort_and_Hotel_Big_Deal_Offer_Template_7701e787dd.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/luxury-resort-hotel-offer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/luxury-resort-hotel-offer-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
text_body,title,discount,social_handle,cta,font_color_1,font_color_2,text_background_color,image_1,image_2,image_3,image_4,background_image,audio
```

| Field | Default value |
| --- | --- |
| `TEXT_Body` | Escape to elegance, your five-star holiday begins here. |
| `Title` | Step into Relaxation |
| `Discount` | BIG DEAL 40% OFF |
| `Social_Handle` | @Homeluxeresort |
| `CTA` | Reserve Now |
| `FONT_COLOR_1` | #fcfcfc |
| `FONT_COLOR_2` | #e4d3cb |
| `TEXT_BACKGROUND_COLOR` | #b66235 |
| `IMAGE_1` | https://templates.shotstack.io/luxury-resort-hotel-offer-template/40073f74-3253-4bde-aa50-8b7f2d27d906/source.png |
| `IMAGE_2` | https://templates.shotstack.io/luxury-resort-hotel-offer-template/83dfc6a3-a41a-46cd-853c-c766ca1cc2db/source.png |
| `IMAGE_3` | https://templates.shotstack.io/luxury-resort-hotel-offer-template/e10a0304-e274-465c-9b82-285afa90e6dd/source.png |
| `IMAGE_4` | https://templates.shotstack.io/luxury-resort-hotel-offer-template/20ad92d7-7898-4db2-862e-1cb07facbd69/source.png |
| `BACKGROUND_IMAGE` | https://templates.shotstack.io/luxury-resort-hotel-offer-template/bfd0548c-b243-43d9-a19c-1d201da13ece/source.png |
| `AUDIO` | https://templates.shotstack.io/luxury-resort-hotel-offer-template/5372e924-8801-4f87-ae26-39dac994b2d5/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
