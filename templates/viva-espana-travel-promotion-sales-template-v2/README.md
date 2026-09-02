# Viva España Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 18s · **Format:** mp4 · **Category:** Travel

![Viva España Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Viva_Espana_Travel_Promotion_Template_b00248b2c9.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/viva-espana-travel-promotion-sales-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/viva-espana-travel-promotion-sales-template-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_company_name,s1_title,s1_subtitle,web,s1_video,font_color,s2_title,s2_body,s2_video,s2_background_color,s3_title,s3_body,s3_background_color,s3_video,s4_title,s4_body,s4_background_color,s4_video,s5_title,s5_body,s5_background_color,s5_video,s6_cta,s6_tagline,s6_video
```

| Field | Default value |
| --- | --- |
| `S1_Company_Name` | TRAVEL SURVEY |
| `S1_Title` | VIVA ESPAÑA |
| `S1_Subtitle` | EXPLORE DEEPLY, GROW ENDLESSLY |
| `Web` | WWW.TRAVELSURVEY.COM |
| `S1_VIDEO` | https://templates.shotstack.io/viva-espana-travel-promotion-sales-template/bc3e65a4-02c8-40cc-aab6-2c416fb782c6/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `S2_Title` | MADRID |
| `S2_Body` | THE CAPITAL, KNOWN FOR THE PRADO MUSEUM, ROYAL PALACE, AND VIBRANT NIGHTLIFE. |
| `S2_VIDEO` | https://templates.shotstack.io/viva-espana-travel-promotion-sales-template/79e4ddde-611f-4032-9ee8-50ffd95b9bb7/source.m4v |
| `S2_BACKGROUND_COLOR` | #f89f27 |
| `S3_Title` | BARCELONA |
| `S3_Body` | FAMOUS FOR GAUDÍ’S SAGRADA FAMÍLIA, PARK GÜELL, AND BEACH VIBES. |
| `S3_BACKGROUND_COLOR` | #07a9de |
| `S3_VIDEO` | https://templates.shotstack.io/viva-espana-travel-promotion-sales-template/513c41ce-25a4-4da8-a5cf-a6615e532a19/source.m4v |
| `S4_Title` | SEVILLE |
| `S4_Body` | HEART OF ANDALUSIAN CULTURE WITH FLAMENCO, ALCÁZAR, AND THE GRAND CATHEDRAL. |
| `S4_BACKGROUND_COLOR` | #305787 |
| `S4_VIDEO` | https://templates.shotstack.io/viva-espana-travel-promotion-sales-template/eac739e8-31b3-4281-91c2-ba307f41338b/source.mp4 |
| `S5_Title` | VALENCIA |
| `S5_Body` | HEART OF ANDALUSIAN CULTURE WITH FLAMENCO, ALCÁZAR, AND THE GRAND CATHEDRAL. |
| `S5_BACKGROUND_COLOR` | #3d7436 |
| `S5_VIDEO` | https://templates.shotstack.io/viva-espana-travel-promotion-sales-template/2e6b3fee-1d78-4b45-8c31-43e6bd6773f9/source.mp4 |
| `S6_CTA` | STAY TUNED |
| `S6_Tagline` | SPAIN AWAITS YOUR VISIT |
| `S6_VIDEO` | https://templates.shotstack.io/viva-espana-travel-promotion-sales-template/98bfcb97-bd79-44a7-b490-49058f3ac9ce/source.m4v |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
