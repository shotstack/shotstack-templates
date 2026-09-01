# Elevate Your Promotions: The Ultimate Offer & Event Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 13s · **Format:** mp4 · **Category:** Travel

![Elevate Your Promotions: The Ultimate Offer & Event Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elevate_Your_Promotions_The_Ultimate_Offer_and_Event_Template_defb2d880d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/promotional-offer-event-template-boost-sales/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/promotional-offer-event-template-boost-sales
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,s1_brand_name,s1_cta,s1_web,s2_video,s1_video,s3_video,s3_brand_name,s3_description,font_color_1,font_color_2,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_Title_1` | TRAVEL |
| `S1_Title_2` | WITH US |
| `S1_Brand_name` | Air Path |
| `S1_CTA` | Fly Today |
| `S1_Web` | www.airpath.com |
| `S2_VIDEO` | https://templates.shotstack.io/promotional-offer-event-template-boost-sales/b0c75169-4e58-4cd3-b96b-1ec983f0b6f3/source.mp4 |
| `S1_VIDEO` | https://templates.shotstack.io/promotional-offer-event-template-boost-sales/9d7f1370-52c1-4e43-9287-8ca9511883d6/source.mp4 |
| `S3_VIDEO` | https://templates.shotstack.io/promotional-offer-event-template-boost-sales/94a54f6b-6ae9-493a-aa68-44d4f124cec9/source.mp4 |
| `S3_Brand_name` | Air Path, Int |
| `S3_Description` | Visit our website at www.airpath.com– choose your destination, select your travel dates, compare airlines, and pay securely in minutes |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `BACKGROUND_COLOR` | #0489a4 |
| `AUDIO_SRC` | https://templates.shotstack.io/promotional-offer-event-template-boost-sales/dc2aea44-b00d-4c50-8396-6f0b9eb2c37f/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
