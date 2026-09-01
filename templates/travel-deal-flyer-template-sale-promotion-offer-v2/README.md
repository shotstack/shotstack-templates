# Modern Travel Deal Promotional Flyer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Modern Travel Deal Promotional Flyer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Modern_Travel_Deal_Promotional_Flyer_Template_791093cec4.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-deal-flyer-template-sale-promotion-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/travel-deal-flyer-template-sale-promotion-offer-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
company_name,duty,title,tagline,subtitle,list_1,list_2,list_3,list_4,discount,cta_1,web,cta_2,video,font_color_1,font_color_2,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Company_name` | Airfly ZONE |
| `Duty` | Travel Agent |
| `Title` | LET’S TRAVEL THE GLOBE TOGETHER |
| `Tagline` | We Make your Travel Experience Unforgettable |
| `Subtitle` | We Offer: |
| `List_1` | Luxury Vacation Planning |
| `List_2` | Exclusive Guided Tours |
| `List_3` | VIP Airport Services |
| `List_4` | 24/7 Travel Concierge |
| `Discount` | 40% OFF |
| `CTA_1` | Book Now |
| `Web` | www.airflyzone.com |
| `CTA_2` | VISIT US |
| `VIDEO` | https://templates.shotstack.io/travel-deal-flyer-template-sale-promotion-offer/d656734b-e668-4fcb-bdcd-25b76d1c00a2/source.mp4 |
| `FONT_COLOR_1` | #e1b504 |
| `FONT_COLOR_2` | #ffffff |
| `BACKGROUND_COLOR` | #005f64 |
| `AUDIO` | https://templates.shotstack.io/travel-deal-flyer-template-sale-promotion-offer/0651298a-ff0c-45f9-949a-5d567a571bbc/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
