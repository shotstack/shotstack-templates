# Celebrate Canada: Your Go-To Promotional Event Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 23.4s · **Format:** mp4 · **Category:** Travel

![Celebrate Canada: Your Go-To Promotional Event Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Celebrate_Canada_Your_Go_To_Promotional_Event_Template_614f2f79f9.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/canadian-event-promo-template-sale-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/canadian-event-promo-template-sale-offer-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,s1_producer_name,font_color,s1_video,s2_subtitle_1,s2_body,background_color,s2_video,s3_video,s3_subtitle,s3_body,s4_video,s4_subtitle,s4_body,s5_video,s5_subtitle,s5_body,s6_video,s6_subtitle,s6_body,s7_video,s7_cta_1,s7_cta_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title_1` | 5 |
| `S1_Title_2` | most beautiful places in Canada |
| `S1_Producer_Name` | By popular post |
| `FONT_COLOR` | #e2c012 |
| `S1_VIDEO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/5703db7f-ba93-4638-8804-50858646b045/source.mp4 |
| `S2_Subtitle_1` | Turquoise lakes like Lake Louise and Moraine Lake, Towering Rocky Mountains and glacier-fed rivers, One of the most scenic spots in North America, ideal year-round |
| `S2_Body` | Banff National Park, Alberta |
| `BACKGROUND_COLOR` | #030303 |
| `S2_VIDEO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/8e805a9c-166d-449b-853d-e45081b61c9f/source.mp4 |
| `S3_VIDEO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/90f19972-0e1d-4cac-bca2-fd119d5a090b/source.mp4 |
| `S3_Subtitle` | Niagara Falls, Ontario |
| `S3_Body` | One of the world’s most powerful and iconic waterfalls. Illuminated at night and often seen with rainbows during the day. Surrounded by lush parks, boat tours, and observation decks |
| `S4_VIDEO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/b9e8ac1e-7990-4ffc-a2d3-234f1bee444e/source.mp4 |
| `S4_Subtitle` | Tofino, Vancouver Island, British Columbia |
| `S4_Body` | Remote surf town with wild beaches, rainforests, and misty coastlines. Perfect for storm watching, kayaking, or spotting whales. Surreal sunsets over the Pacific Ocean |
| `S5_VIDEO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/8e016427-0afb-435e-9c5d-6fb9f5bb068c/source.mp4 |
| `S5_Subtitle` | Quebec City, Quebec |
| `S5_Body` | Historic European-style charm with cobblestone streets. The majestic Château Frontenac overlooks the St. Lawrence River. Magical in both summer bloom and winter snow |
| `S6_VIDEO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/98c83fa3-22fb-4f2a-a563-5f53d291e801/source.mp4 |
| `S6_Subtitle` | Jasper National Park, Alberta |
| `S6_Body` | Canada’s largest national park in the Rockies. Mirror-like lakes, dark-sky preserves, and abundant wildlife. Fewer crowds than Banff, but equally stunning |
| `S7_VIDEO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/f314a028-d715-4f0c-a4bf-365b2dc75e19/source.mp4 |
| `S7_CTA_1` | Don't forget to like and share |
| `S7_CTA_2` | Follos For More Content Like This @Dico |
| `AUDIO` | https://templates.shotstack.io/canadian-event-promo-template-sale-offer/8d12d872-865b-4334-afaa-14e7e7e9fa80/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
