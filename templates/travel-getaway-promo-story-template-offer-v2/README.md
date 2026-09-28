# Travel Getaway Promotional Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 8.2s · **Format:** mp4 · **Category:** Travel

![Travel Getaway Promotional Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Travel_Getaway_Promotional_Story_Template_d325119a29.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-getaway-promo-story-template-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/travel-getaway-promo-story-template-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
company_name,body,cta,web,email,phone,image_1,image_2,image_3,image_4,image_5,image_6,image_7,logo,font_color_1,font_color_2,video_background,audio
```

| Field | Default value |
| --- | --- |
| `Company_Name` | Travel Survey |
| `Body` | From planning your trip to stepping onto the plane, we take care of every detail — so you can simply relax and look forward to the journey ahead |
| `CTA` | ENQUIRE HERE |
| `Web` | travelsurveymail.com |
| `Email` | @travelsurvey |
| `Phone` | 234-567-8900 |
| `IMAGE_1` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/28c1c303-f2c0-4a20-81fb-fab1048c5abc/source.png |
| `IMAGE_2` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/23474020-c9bd-40d4-ab5c-6bc5ee72a508/source.png |
| `IMAGE_3` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/a3ab2b61-cf68-4752-9e5b-e1e8bfcc1e90/source.png |
| `IMAGE_4` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/006eeabc-a37b-42e2-8599-49a05cc6b70b/source.png |
| `IMAGE_5` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/5de829a8-ea36-4777-91a8-900765f49b58/source.png |
| `IMAGE_6` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/d86e8af7-cb19-429e-9efc-5e98bf6231a0/source.png |
| `IMAGE_7` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/076ef8e5-31e7-4dce-8a76-f9ca925d3084/source.png |
| `Logo` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/fc0b791c-69b8-4226-b31c-6fbedfe87540/source.png |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `VIDEO_BACKGROUND` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/1c2eedbf-1f36-40e1-9b88-8a0afbded8bf/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/travel-getaway-promo-story-template-offer/85c659a5-e234-43da-b79c-3a0c2dc289a1/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
