# Premium Offer & Travel Specials Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Premium Offer & Travel Specials Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Premium_Offer_and_Travel_Specials_Promotion_Template_7a07b10889.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/premium-offer-travel-special-promotion-template-for-holidays/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/premium-offer-travel-special-promotion-template-for-holidays
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,titl_2,subtitle,list_1,list_2,list_3,list_4,list_5,list_6,list_7,list_8,web,font_color_1,font_color_2,shape_color,font_color_3,rope_left,rope_right,image_1,image_2,image_3,image_4,background,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | Premium Service |
| `Titl_2` | TRAVEL SPECIALS |
| `Subtitle` | Exciting holidays await . affordable, fun, unforgettable! |
| `List_1` | Butler Service |
| `List_2` | Exclusive Excursions |
| `List_3` | Fine Dining |
| `List_4` | VIP Lounge Access |
| `List_5` | Private Suites |
| `List_6` | Concierge Service |
| `List_7` | Spa & Wellness |
| `List_8` | Helipad Access |
| `Web` | www.travellingsurvey.com |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #275811 |
| `SHAPE_COLOR` | #e6e6e6 |
| `FONT_COLOR_3` | #fcfcfc |
| `ROPE_LEFT` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/2e4df9bd-1dde-4830-ac2c-6c1766f67238/source.png |
| `ROPE_RIGHT` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/5c8cad15-d38d-4ceb-ba13-6bca9c3a5aac/source.png |
| `IMAGE_1` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/c24c8982-230c-413f-b9ff-e92f46203715/source.png |
| `IMAGE_2` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/41765e1b-784d-4b93-9d3e-c6d1a3a01ed5/source.png |
| `IMAGE_3` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/49d11937-f8ba-4336-9769-2fd75001130b/source.png |
| `IMAGE_4` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/e5e42c0c-07b5-4bc7-a352-ba1195adf3fc/source.png |
| `BACKGROUND` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/499fe7ef-ae6c-4e1f-be89-11239531daec/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/premium-offer-travel-special-promotion-template-for-holidays/b2f380a1-4405-44e3-9512-fdfbb8c996f2/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
