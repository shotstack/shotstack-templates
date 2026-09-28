# Top 10 Tourism Listicle

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 70s · **Format:** mp4 · **Category:** Travel

![Top 10 Tourism Listicle preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/top_10_tourism_listicle_8512ec0dd0.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/top-10-tourism-listicle-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/top-10-tourism-listicle-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,1_top,1_bottom,2_top,2_bottom,3_top,3_bottom,4_top,4_bottom,5_top,5_bottom,6_top,6_bottom,7_top,7_bottom,8_top,8_bottom,9_top,9_bottom,10_top,10_bottom,video_1,video_2,video_3,video_4,video_5,video_6,video_7,video_8,video_9,video_10
```

| Field | Default value |
| --- | --- |
| `TITLE` | TOP 10 TOURIST SPOTS IN EUROPE |
| `1_TOP` | EIFFEL TOWER |
| `1_BOTTOM` | PARIS, FRANCE |
| `2_TOP` | THE COLOSSEUM |
| `2_BOTTOM` | ROME, ITALY |
| `3_TOP` | LOUVRE MUSEUM |
| `3_BOTTOM` | PARIS, FRANCE |
| `4_TOP` | BUCKINGHAM PALACE |
| `4_BOTTOM` | LONDON, UNITED KINGDOM |
| `5_TOP` | VATICAN CITY |
| `5_BOTTOM` | VATICAN CITY |
| `6_TOP` | THE ACROPOLIS |
| `6_BOTTOM` | ATHENS, GREECE |
| `7_TOP` | LAKE GENEVA |
| `7_BOTTOM` | GENEVA, SWITZERLAND |
| `8_TOP` | NEUSCHWANSTEIN CASTLE |
| `8_BOTTOM` | SCHWANGAU, GERMANY |
| `9_TOP` | CHARLES BRIDGE |
| `9_BOTTOM` | PRAGUE, CZECH REPUBLIC |
| `10_TOP` | VENICE GRAND CANAL |
| `10_BOTTOM` | VENICE, ITALY |
| `VIDEO_1` | https://templates.shotstack.io/top-10-tourism-listicle/a24efec9-2b88-4042-9933-61da86770ed2/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/top-10-tourism-listicle/51266ae1-69df-429f-a0c2-dfc4c44a1485/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/top-10-tourism-listicle/b3bac1a3-88e6-4442-83ad-45819dc11f7b/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/top-10-tourism-listicle/4ccfde25-b5b8-45b8-98e0-839904b283c2/source.mp4 |
| `VIDEO_5` | https://templates.shotstack.io/top-10-tourism-listicle/c90b8a2f-9b22-4d7f-bd86-882c72207a27/source.mp4 |
| `VIDEO_6` | https://templates.shotstack.io/top-10-tourism-listicle/eb1c167b-d1e0-42b6-a25c-8a635e500fe6/source.mp4 |
| `VIDEO_7` | https://templates.shotstack.io/top-10-tourism-listicle/31f96075-44cd-4234-aaf2-21dfa1564c13/source.mp4 |
| `VIDEO_8` | https://templates.shotstack.io/top-10-tourism-listicle/87cdf62c-361d-49a9-976b-93273fb45163/source.mp4 |
| `VIDEO_9` | https://templates.shotstack.io/top-10-tourism-listicle/6bae63ae-aadc-4178-b3af-724087a3a893/source.mp4 |
| `VIDEO_10` | https://templates.shotstack.io/top-10-tourism-listicle/a3b228e9-50d9-4480-a293-fdee6cd1c48c/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
