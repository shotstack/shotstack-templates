# Tropical Escape: Vacation & Travel Offer Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 20s · **Format:** mp4 · **Category:** Memories

![Tropical Escape: Vacation & Travel Offer Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Tropical_Escape_Vacation_and_Travel_Offer_Template_554c1466b6.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/vacation-getaway-travel-offer-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/vacation-getaway-travel-offer-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_video_1,s1_video_2,s1_video_3,s2_subtitle,s2_body,s2_video,s3_subtitle,s3_body,s3_video,s4_subtitle,s4_body,s4_video,font_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | My Vacation Plan |
| `S1_VIDEO_1` | https://templates.shotstack.io/vacation-getaway-travel-offer-template/158347ba-1376-4248-809a-9d7b4a812702/source.mp4 |
| `S1_VIDEO_2` | https://templates.shotstack.io/vacation-getaway-travel-offer-template/66ec51b2-99b4-4413-9a78-745154f7106a/source.mp4 |
| `S1_VIDEO_3` | https://templates.shotstack.io/vacation-getaway-travel-offer-template/a4ee377a-63e0-4a60-aeb0-e983977695bb/source.mp4 |
| `S2_Subtitle` | Day 1 |
| `S2_Body` | exploring art & cafés in Paris |
| `S2_VIDEO` | https://templates.shotstack.io/vacation-getaway-travel-offer-template/97888ce8-92c6-42a7-a775-54497898e6ba/source.mp4 |
| `S3_Subtitle` | Day 2 |
| `S3_Body` | Camping under the Northern Lights in Finland |
| `S3_VIDEO` | https://templates.shotstack.io/vacation-getaway-travel-offer-template/ed7150c6-3d75-40fa-a092-8c59f4e54344/source.mp4 |
| `S4_Subtitle` | Day 3 |
| `S4_Body` | Hiking in the Swiss Alps |
| `S4_VIDEO` | https://templates.shotstack.io/vacation-getaway-travel-offer-template/f594c673-0f92-4b2f-b6f4-fbf435c59197/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #02526c |
| `AUDIO` | https://templates.shotstack.io/vacation-getaway-travel-offer-template/94b20eaa-6ad0-47a8-9cbb-157cc507b564/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
