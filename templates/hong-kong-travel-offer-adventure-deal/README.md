# Hong Kong Adventure Awaits Travel Offer

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 11s · **Format:** mp4 · **Category:** Travel

![Hong Kong Adventure Awaits Travel Offer preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Hong_Kong_Adventure_Awaits_Travel_Offer_d27e5f9469.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/hong-kong-travel-offer-adventure-deal/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/hong-kong-travel-offer-adventure-deal
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,s1_video_1,s1_video_2,s1_video_3,s2_title,s2_video_1,s2_video_2,s2_video_3,s2_video_4,s2_video_5,text_font_color,text_background_color,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | ON YOUR WAY TO HONG KONG |
| `S1_Subtitle` | Amazing adventure awaits you, do not miss out. |
| `S1_VIDEO_1` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/e38e89a3-1c0c-4d2a-b28b-4e52ae62271d/source.m4v |
| `S1_VIDEO_2` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/8aac9804-4f22-4ee9-ba63-867e4ee7679c/source.m4v |
| `S1_VIDEO_3` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/cf090151-5484-4c92-b59e-8461524f291a/source.mp4 |
| `S2_Title` | FEEL THE BEAUTY OF HOM KONG |
| `S2_VIDEO_1` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/17bd3c2c-aa6d-4b2e-9c78-3552556d19fb/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/85993fd4-2082-4e7f-8d26-bf776e3072a3/source.mp4 |
| `S2_VIDEO_3` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/ea6f2d3b-f439-4b81-9596-c0e918f0f643/source.mp4 |
| `S2_VIDEO_4` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/d01b2a0e-3422-40e5-b0e5-7cba9fbc8897/source.mp4 |
| `S2_VIDEO_5` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/728bdbb5-2772-4445-ab3c-846c18377d11/source.mp4 |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_BACKGROUND_COLOR` | #9e0000 |
| `AUDIO` | https://templates.shotstack.io/hong-kong-travel-offer-adventure-deal/b8bcf445-0ee1-4485-bccb-432e3eaab296/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
