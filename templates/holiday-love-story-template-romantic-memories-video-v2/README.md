#  Holiday Love Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 16s · **Format:** mp4 · **Category:** Memories

![Holiday Love Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Holiday_Love_Story_Template_1c3f3d7293.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/holiday-love-story-template-romantic-memories-video-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/holiday-love-story-template-romantic-memories-video-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_day,s1_date,s1_event,s1_folder_1,s1_folder_2,s1_folder_3,s1_folder_4,s1_video_1,s2_video_2,s1_video_3,s2_title,s2_video_1,s3_video_2,s4_video_3,font_color_1,font_color_2,calender_color,folder_color,font_color_3,text_background_color,s3_body,audio,s3_subtitle
```

| Field | Default value |
| --- | --- |
| `S1_Day` | TUESTDAY |
| `S1_Date` | 26 MAY |
| `S1_Event` | Remember this day |
| `S1_Folder_1` | First Date |
| `S1_Folder_2` | Love Throwback |
| `S1_Folder_3` | Beautiful Moment |
| `S1_Folder_4` | Favorite |
| `S1_Video_1` | https://templates.shotstack.io/holiday-love-story-template-romantic-memories-video/f610868b-ebc7-4081-851d-dc2759638ba5/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/holiday-love-story-template-romantic-memories-video/42ebb9f2-7c2b-4c6b-b1cd-4e11d4366bbf/source.mp4 |
| `S1_VIDEO_3` | https://templates.shotstack.io/holiday-love-story-template-romantic-memories-video/605afd06-0243-4403-b5e4-80538ef6da46/source.mp4 |
| `S2_Title` | Romantic Holiday |
| `S2_VIDEO_1` | https://templates.shotstack.io/holiday-love-story-template-romantic-memories-video/1dd9fdd7-040b-4822-9ec1-1e9a594846bc/source.mp4 |
| `S3_VIDEO_2` | https://templates.shotstack.io/holiday-love-story-template-romantic-memories-video/14ff00a9-a4cc-4f8d-9702-7cb0d464614b/source.mp4 |
| `S4_VIDEO_3` | https://templates.shotstack.io/holiday-love-story-template-romantic-memories-video/20f5fe59-3e91-4c51-aaae-1de4b6173e48/source.mp4 |
| `FONT_COLOR_1` | #ff0000 |
| `FONT_COLOR_2` | #000000 |
| `CALENDER_COLOR` | #efefef |
| `FOLDER_COLOR` | #eea50d |
| `FONT_COLOR_3` | #ffffff |
| `TEXT_BACKGROUND_COLOR` | #000000 |
| `S3_Body` | From sunsets by the shore to laughter under the stars, our holiday gave us more than memories |
| `AUDIO` | https://templates.shotstack.io/holiday-love-story-template-romantic-memories-video/5f6210e5-73f0-4bcc-b8e4-292a94585f55/source.mp3 |
| `S3_Subtitle` | Love, Promise, Gratitude. |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
