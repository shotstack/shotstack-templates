# Urban Pulse: Your Next Big Offer is Calling

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10.6s · **Format:** mp4 · **Category:** Travel

![Urban Pulse: Your Next Big Offer is Calling preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Urban_Pulse_Your_Next_Big_Offer_is_Calling_f6dbadc2fd.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/event-promo-sales-template-urban-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/event-promo-sales-template-urban-offer-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,s1_background_color,profile_photos,s1_video,s2_video,s3_video,s4_video,audio_src,ringtone
```

| Field | Default value |
| --- | --- |
| `Title_1` | NEW YORK |
| `Title_2` | is calling .... |
| `S1_BACKGROUND_COLOR` | #000000 |
| `Profile_Photos` | https://templates.shotstack.io/event-promo-sales-template-urban-offer/6a05e68b-828e-4add-9cca-a5b8cf309df6/source.jpg |
| `S1_VIDEO` | https://templates.shotstack.io/event-promo-sales-template-urban-offer/1f26ebf8-eaac-46ed-b950-c78c3a39575d/source.mp4 |
| `S2_VIDEO` | https://templates.shotstack.io/event-promo-sales-template-urban-offer/84e48c52-008c-4caa-8604-01e7c7152543/source.mp4 |
| `S3_VIDEO` | https://templates.shotstack.io/event-promo-sales-template-urban-offer/f4bfcff8-17e9-48cd-8351-eb44e0d6e91b/source.mp4 |
| `S4_VIDEO` | https://templates.shotstack.io/event-promo-sales-template-urban-offer/ab292098-2ab0-4e8e-90de-4872d145be7c/source.mp4 |
| `AUDIO_SRC` | https://templates.shotstack.io/event-promo-sales-template-urban-offer/6b8f936e-f340-4a1e-8b67-9e763a1c20b8/source.mp3 |
| `Ringtone` | https://templates.shotstack.io/event-promo-sales-template-urban-offer/0345d142-cebb-4677-b0c3-72b20b3281fe/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
