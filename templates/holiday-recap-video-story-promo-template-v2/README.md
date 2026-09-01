# Holiday Adventure Recap Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10.2s · **Format:** mp4 · **Category:** Memories

![Holiday Adventure Recap Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Holiday_Adventure_Recap_Story_Template_c8ef55a577.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/holiday-recap-video-story-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/holiday-recap-video-story-promo-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
video_1,video_2,video_3,title,audio
```

| Field | Default value |
| --- | --- |
| `VIDEO_1` | https://templates.shotstack.io/holiday-recap-video-story-promo-template/4245fdfe-7240-463d-b9df-5e7860cf54bc/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/holiday-recap-video-story-promo-template/35724443-8285-405b-892a-f16a3329e9a8/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/holiday-recap-video-story-promo-template/e6cc8fc3-f673-4d7f-af62-93e07f346cc0/source.mp4 |
| `Title` | HOLIDAY RECAP |
| `AUDIO` | https://templates.shotstack.io/holiday-recap-video-story-promo-template/3865ef2d-7057-49fd-bfdb-06a13a0a87f0/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
