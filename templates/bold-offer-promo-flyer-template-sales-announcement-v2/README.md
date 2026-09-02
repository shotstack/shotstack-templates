# Bold & Modern Special Offer Announcement Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 5s · **Format:** mp4 · **Category:** E-Commerce

![Bold & Modern Special Offer Announcement Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Bold_and_Modern_Special_Offer_Announcement_Template_b913f983e4.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/bold-offer-promo-flyer-template-sales-announcement-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/bold-offer-promo-flyer-template-sales-announcement-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,image_src,image_src_2,s1_description,cta,text_font_color,text_font_color_2,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_TITLE` | Delight your senses! |
| `IMAGE_SRC` | https://templates.shotstack.io/bold-offer-promo-flyer-template-sales-announcement/3c939645-f5e8-4edd-ada7-d2a04889ae70/source.png |
| `IMAGE_SRC_2` | https://templates.shotstack.io/bold-offer-promo-flyer-template-sales-announcement/115c9b9c-21a0-4e5f-9cdf-05849bbf2799/source.png |
| `S1_DESCRIPTION` | WE DELIVER 24/7 |
| `CTA` | Place your order at Foodhomesite.com and we'll take care of the it. |
| `TEXT_FONT_COLOR` | #fff2e0 |
| `TEXT_FONT_COLOR_2` | #000000 |
| `BACKGROUND_COLOR` | #c33222 |
| `AUDIO_SRC` | https://templates.shotstack.io/bold-offer-promo-flyer-template-sales-announcement/d000ec2b-6698-467a-af64-0aaab8a5cfb7/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
