# Christmas Special Offer Template for Holiday Sales

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 8.1s · **Format:** mp4 · **Category:** E-Commerce

![Christmas Special Offer Template for Holiday Sales preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Christmas_Special_Offer_Template_for_Holiday_Sales_f66cb0d4f3.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/christmas-special-offer-template-for-holiday-sales-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/christmas-special-offer-template-for-holiday-sales-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
logo,s1_title,s1_description,s1_description_2,s1_image_src,background_color,shadow_color,frame_color,s2_line_1,s2_line_2,s2_image_src,s2_image_src_2,side_design,cta,text_font_color,audio_src
```

| Field | Default value |
| --- | --- |
| `Logo` | https://templates.shotstack.io/christmas-special-offer-template-for-holiday-sales/f4410886-ff1a-42fa-9b02-289ecad69b86/source.png |
| `S1_TITLE` | GIVES YOU |
| `S1_DESCRIPTION` | CHRISTMAS |
| `S1_DESCRIPTION_2` | SPECIAL OFFERS |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/christmas-special-offer-template-for-holiday-sales/9485ad02-1ddc-4682-8c47-ff8edf04fdce/shotstack-proxy.webp |
| `BACKGROUND_COLOR` | #f50000 |
| `SHADOW_COLOR` | #a21616 |
| `FRAME_COLOR` | #ff8d0a |
| `S2_LINE_1` | ENJOY THIS |
| `S2_LINE_2` | SEASON WITH US, JOHN |
| `S2_IMAGE_SRC` | https://templates.shotstack.io/christmas-special-offer-template-for-holiday-sales/c8415244-0c19-46c1-9d70-6208df7728ae/shotstack-proxy.webp |
| `S2_IMAGE_SRC_2` | https://templates.shotstack.io/christmas-special-offer-template-for-holiday-sales/2aed57e1-a202-40bc-b19c-bae8de8118bd/shotstack-proxy.webp |
| `SIDE_DESIGN` | https://templates.shotstack.io/christmas-special-offer-template-for-holiday-sales/361f7973-cc30-465b-9552-60bfaf396f00/shotstack-proxy.webp |
| `CTA` | THANK YOU! |
| `TEXT_FONT_COLOR` | #ffda1f |
| `AUDIO_SRC` | https://templates.shotstack.io/christmas-special-offer-template-for-holiday-sales/8872d4c4-84e9-46e8-b58b-cfe0b6ff037c/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
