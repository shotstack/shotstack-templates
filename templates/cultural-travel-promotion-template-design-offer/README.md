# Cultural Journey Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 11s · **Format:** mp4 · **Category:** Travel

![Cultural Journey Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Cultural_Journey_Travel_Promotion_Template_3f3c393c3d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/cultural-travel-promotion-template-design-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/cultural-travel-promotion-template-design-offer
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
company_name,s1_subtitle_1,s1_title_1,s1_title_2,s1_body,tag,price,s1_image_1,s1_image_2,s1_image_3,s2_subtitle,s2_list_1,s2_list_2,s2_list_3,s2_list_4,s2_list_5,s2_list_6,cta,web,font_color,line_color,video,background_color_2,audio_src
```

| Field | Default value |
| --- | --- |
| `Company_Name` | TRAVEL SURVEY |
| `S1_Subtitle_1` | PREMIUM TOUR SERVICE |
| `S1_Title_1` | DISCOVER THE BEAUTY OF |
| `S1_Title_2` | S. KOREA |
| `S1_Body` | STEP INTO THE SOUL OF SOUTH KOREA, WHERE BLOSSOMING SEASONS, BOLD FLAVORS, AND TIMELESS TRADITIONS UNFOLD BESIDE DAZZLING SKYLINES AND VIBRANT CULTURE. |
| `Tag` | BASE PRICE |
| `Price` | £350.00 |
| `S1_IMAGE_1` | https://templates.shotstack.io/cultural-travel-promotion-template-design-offer/1dcf89b3-0b55-4596-a465-d474362a0ae0/source.png |
| `S1_IMAGE_2` | https://templates.shotstack.io/cultural-travel-promotion-template-design-offer/8166f86a-3be3-4ed4-ac88-62a902bbb8f0/source.png |
| `S1_IMAGE_3` | https://templates.shotstack.io/cultural-travel-promotion-template-design-offer/9d854639-8dbc-4075-9c47-558df693d148/source.png |
| `S2_Subtitle` | OUR PREMIUM SERVICES INCLUDE |
| `S2_List_1` | Custom Itinerary |
| `S2_List_2` | Priority Check-in |
| `S2_List_3` | Private Tours |
| `S2_List_4` | Travel Concierge |
| `S2_List_5` | First-Class Flights |
| `S2_List_6` | Wellness Retreats |
| `CTA` | START PLANNING YOUR DREAM GETAWAY TODAY AT |
| `Web` | www.travelsurvey.com |
| `FONT_COLOR` | #ffffff |
| `LINE_COLOR` | #ffffff |
| `VIDEO` | https://templates.shotstack.io/cultural-travel-promotion-template-design-offer/6cb844c7-9f5c-4875-bfc7-132d4350b57c/source.mp4 |
| `BACKGROUND_COLOR_2` | #ce2d31 |
| `AUDIO_SRC` | https://templates.shotstack.io/cultural-travel-promotion-template-design-offer/8ebac729-5a44-4baa-b21e-de603d5b5dad/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
