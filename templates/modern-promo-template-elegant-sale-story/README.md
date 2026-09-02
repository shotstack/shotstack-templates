# Elegant Showcase: Modern Animated Story & Post Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 16s · **Format:** mp4 · **Category:** Other

![Elegant Showcase: Modern Animated Story & Post Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elegant_Showcase_Modern_Animated_Story_and_Post_Template_c15ffc405b.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-promo-template-elegant-sale-story/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/modern-promo-template-elegant-sale-story
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
image_src_2,s1_title,s1_description,brand_name,contact,image_src_3,image_src_4,image_src_5,image_src_6,image_src_7,text_font_color,background_color,s2_title,s2_description,cta,website,brown_background_color_2,overlay,audio_src
```

| Field | Default value |
| --- | --- |
| `IMAGE_SRC_2` | https://templates.shotstack.io/modern-promo-template-elegant-sale-story/7a4e5f16-43e4-4b74-9bf2-f3b602c62b64/source.jpg |
| `S1_TITLE` | WHAT ARE YOU LOOKING FOR? |
| `S1_DESCRIPTION` | Elegant Furniture |
| `BRAND_NAME` | JACK FURNITURE |
| `CONTACT` | @jacksitehere |
| `IMAGE_SRC_3` | https://templates.shotstack.io/modern-promo-template-elegant-sale-story/6ea05f19-456d-46d4-b622-42c34ff695a9/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/modern-promo-template-elegant-sale-story/792ee347-b706-44b1-a461-10df64203d86/source.jpg |
| `IMAGE_SRC_5` | https://templates.shotstack.io/modern-promo-template-elegant-sale-story/c129aa7f-b363-4c6e-a8fa-e4b4d6865b2f/source.jpg |
| `IMAGE_SRC_6` | https://templates.shotstack.io/modern-promo-template-elegant-sale-story/4d373dd2-1885-49ae-b3fb-7eed688fbc5d/source.jpg |
| `IMAGE_SRC_7` | https://templates.shotstack.io/modern-promo-template-elegant-sale-story/eb44d3e7-4f30-47fe-907d-b0a754e5f151/source.jpg |
| `TEXT_FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #ffffff |
| `S2_TITLE` | UNIQUE ITEMS, BUY NOW! |
| `S2_DESCRIPTION` | Don't lose out on our Elegant pieces. Add luxury to your home now! |
| `CTA` | VISIT US NOW AT |
| `WEBSITE` | www.jacksite.com |
| `BROWN_BACKGROUND_COLOR_2` | #442613 |
| `OVERLAY` | #b99898 |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-promo-template-elegant-sale-story/10bec521-cba9-4556-9192-6917bcd41dcf/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
