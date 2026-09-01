# Grand Travel Announcement & Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 19s · **Format:** mp4 · **Category:** Travel

![Grand Travel Announcement & Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Grand_Travel_Announcement_and_Offer_Template_be4c40ab6f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/travel-announcement-offer-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/travel-announcement-offer-promo-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_tittle_1,s1_title_2,s1_title_3,s1_video_1,s1_video_2,s1_video_3,s2_subtitle,s2_list_1,s2_list_2,s2_list_3,s2_video,s3_subtitle,s3_list_1,s3_list_2,s3_list_3,s3_video,s4_subtitle,s4_list_1,s4_list_2,s4_list_3,s4_video,s5_body,s5_cta,s5_company_name,s5_address,s5_web,s5_phone,text_font_color,text_font_color_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_Tittle_1` | WE ARE PLEASE TO ANNOUNCE |
| `S1_Title_2` | The world awaits your visitation |
| `S1_Title_3` | Three exciting places Travel Survey has prepared for you |
| `S1_VIDEO_1` | https://templates.shotstack.io/travel-announcement-offer-promo-template/9ef214cd-c777-4065-be13-3f64f067e47d/source.mp4 |
| `S1_VIDEO_2` | https://templates.shotstack.io/travel-announcement-offer-promo-template/5f5bb6dc-30e6-418c-9085-5f17c5e8cc7f/source.mp4 |
| `S1_VIDEO_3` | https://templates.shotstack.io/travel-announcement-offer-promo-template/412aed62-29a2-45d1-a3c9-03d37d497029/source.mp4 |
| `S2_Subtitle` | 1. Sweden |
| `S2_List_1` | *Gothenburg |
| `S2_List_2` | *Stockholm |
| `S2_List_3` | *Malmo |
| `S2_VIDEO` | https://templates.shotstack.io/travel-announcement-offer-promo-template/06bd3460-e9cd-442d-a052-4a1af07b4533/source.m4v |
| `S3_Subtitle` | 2. Taiwan |
| `S3_List_1` | *Taipei |
| `S3_List_2` | *Taitung |
| `S3_List_3` | *Kaohsiung City |
| `S3_VIDEO` | https://templates.shotstack.io/travel-announcement-offer-promo-template/e1f85eb0-8e4c-444d-9f0e-5825dafbf731/source.m4v |
| `S4_Subtitle` | 3. Netherlands |
| `S4_List_1` | *Amsterdam |
| `S4_List_2` | *Rotterdam |
| `S4_List_3` | *Utrecht |
| `S4_VIDEO` | https://templates.shotstack.io/travel-announcement-offer-promo-template/e48f60d7-0b72-4576-af17-4c4fa99ec505/source.m4v |
| `S5_Body` | Do not miss out of the great invitation |
| `S5_CTA` | RESERVE A SPOT |
| `S5_Company_Name` | Travel Survey |
| `S5_Address` | 01 along st, at city |
| `S5_Web` | www.travelsurvey.com |
| `S5_Phone` | 012-345-6789 |
| `TEXT_FONT_COLOR` | #fbff00 |
| `TEXT_FONT_COLOR_2` | #000000 |
| `AUDIO` | https://templates.shotstack.io/travel-announcement-offer-promo-template/a13dd5a0-6e19-4cbd-879c-511e0f33a479/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
