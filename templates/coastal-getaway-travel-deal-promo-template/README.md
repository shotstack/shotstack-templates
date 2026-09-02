# Coastal Escape Getaway: Exclusive Tour & Travel Offer

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 20.2s · **Format:** mp4 · **Category:** Travel

![Coastal Escape Getaway: Exclusive Tour & Travel Offer preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Coastal_Escape_Getaway_Exclusive_Tour_and_Travel_Offer_0004d188a4.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/coastal-getaway-travel-deal-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/coastal-getaway-travel-deal-promo-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,s1_logo,s1_company_name,s1_video,s2_subtitle,s2_video,s3_subtile,s3_video,s4_subtitle,s4_video,font_color,background_color,web,phone,social_handle,customer_service,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | EXPLORE SPANISH |
| `S1_Subtitle` | TRADITION |
| `S1_Logo` | https://templates.shotstack.io/coastal-getaway-travel-deal-promo-template/38b38527-8d99-40d8-8252-0db096828fd4/source.png |
| `S1_Company_Name` | TRAVEL SURVEY |
| `S1_VIDEO` | https://templates.shotstack.io/coastal-getaway-travel-deal-promo-template/15ef49b4-3259-438b-b191-d60cd26dce2c/source.mp4 |
| `S2_Subtitle` | CULTURE RECIPES |
| `S2_VIDEO` | https://templates.shotstack.io/coastal-getaway-travel-deal-promo-template/8be2dfbf-9152-47e3-bff9-97343155690e/source.m4v |
| `S3_Subtile` | SPAIN PAELLA |
| `S3_VIDEO` | https://templates.shotstack.io/coastal-getaway-travel-deal-promo-template/ad37db95-3016-419b-bc97-83459b84de4d/source.mp4 |
| `S4_Subtitle` | OR MEXICO TACOS |
| `S4_VIDEO` | https://templates.shotstack.io/coastal-getaway-travel-deal-promo-template/952f2591-418a-47bc-a277-9dde569cd6a9/source.m4v |
| `FONT_COLOR` | #000000 |
| `BACKGROUND_COLOR` | #ffffff |
| `Web` | www.travellingsurvey.com |
| `Phone` | 001-234-5678 |
| `Social_Handle` | @travellingsurvey |
| `Customer_Service` | Hello@travellingsurvey.com |
| `AUDIO` | https://templates.shotstack.io/coastal-getaway-travel-deal-promo-template/e6cdadcf-e389-4442-be6b-d47dac997cb4/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
