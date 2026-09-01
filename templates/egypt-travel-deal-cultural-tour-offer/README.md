# Egyptian Cultural Journey: Exclusive Travel Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Travel

![Egyptian Cultural Journey: Exclusive Travel Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/egypt_travel_deal_cultural_tour_offer_0dfb8d73b0.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/egypt-travel-deal-cultural-tour-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/egypt-travel-deal-cultural-tour-offer
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
company_name,title,search,offers,web,image_1,image_2,image_3,image_4,font_color,background_color,text_background_color,background_image,audio
```

| Field | Default value |
| --- | --- |
| `Company_Name` | TRAVEL SURVEY |
| `Title` | EXPERIENCE THE RICH CULTURE OF EGYPT |
| `Search` | Best Tour Guide and Their Service |
| `Offers` | Fine Dining \| Camel Trek \| Private Guide |
| `Web` | www.travelsurvey.come |
| `IMAGE_1` | https://templates.shotstack.io/egypt-travel-deal-cultural-tour-offer/cbb3fe18-5edc-422f-be7f-a87c9abd3193/source.png |
| `IMAGE_2` | https://templates.shotstack.io/egypt-travel-deal-cultural-tour-offer/bc1c678a-bef2-4403-b669-19506360a37d/source.png |
| `IMAGE_3` | https://templates.shotstack.io/egypt-travel-deal-cultural-tour-offer/349ff175-e6c5-4430-9d9f-98d9859225a7/source.png |
| `IMAGE_4` | https://templates.shotstack.io/egypt-travel-deal-cultural-tour-offer/20e90aff-713b-435f-a8e7-6342e1bc8ffb/source.png |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #935a10 |
| `TEXT_BACKGROUND_COLOR` | #d38d34 |
| `Background_IMAGE` | https://templates.shotstack.io/egypt-travel-deal-cultural-tour-offer/2f38178d-02ff-4d69-9332-c505d45f46fa/source.png |
| `AUDIO` | https://templates.shotstack.io/egypt-travel-deal-cultural-tour-offer/8a197742-ce8c-4850-95bd-3448fa4a5dfa/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
