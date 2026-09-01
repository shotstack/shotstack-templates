# Adventure Awaits Nature Retreat & Travel Sale Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 22s · **Format:** mp4 · **Category:** Memories

![Adventure Awaits Nature Retreat & Travel Sale Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Adventure_Awaits_Nature_Retreat_and_Travel_Sale_Template_376d8efb5a.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/adventure-awaits-nature-retreat-travel-sale-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/adventure-awaits-nature-retreat-travel-sale-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_video,s2_subtitle_1,s2_subtitle_2,s2_video,s3_subtitle_1,s3_subtitle_2,s3_video_1,s3_video_2,s3_video_3,s4_subtitle,s4_video,s5_subtitle,s5_video,font_color_1,font_color_2,s3_video_background,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | Nature retreat Throwback |
| `S1_VIDEO` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/2f1c025d-3e6b-4534-a7aa-ab8a18342156/source.mp4 |
| `S2_Subtitle_1` | WILD MOMENT |
| `S2_Subtitle_2` | Peaceful Memories |
| `S2_VIDEO` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/7604bdb1-0801-40db-af1b-b6bbdf7e0347/source.mp4 |
| `S3_Subtitle_1` | A holiday that leaves memories |
| `S3_Subtitle_2` | Not just photos. |
| `S3_VIDEO_1` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/f15ac665-eb9f-40d8-883e-e51cb4744447/source.mp4 |
| `S3_VIDEO_2` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/bc79baa6-1f30-4576-925f-24155999fda8/source.mp4 |
| `S3_VIDEO_3` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/50e595f0-18d5-4c87-bdbf-d3a8c48305eb/source.mp4 |
| `S4_Subtitle` | Joy that shines brighter than pictures. |
| `S4_VIDEO` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/eb2272b2-3fa9-41ab-b6f9-0158fcb17875/source.mp4 |
| `S5_Subtitle` | Nature doesn’t end here; it stays with you. |
| `S5_VIDEO` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/9a0c0f45-17d6-4c80-8687-a859a4978bc6/source.mp4 |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #000000 |
| `S3_VIDEO_BACKGROUND` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/5e2cfab9-9b5a-435f-ad15-de15eb211924/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/adventure-awaits-nature-retreat-travel-sale-template/4a30234f-4c3e-41ac-bc1d-3eb10472e5df/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
