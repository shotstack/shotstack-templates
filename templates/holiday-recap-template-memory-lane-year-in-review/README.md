# Holiday Recap & Memory Lane Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 22.6s · **Format:** mp4 · **Category:** Memories

![Holiday Recap & Memory Lane Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Holiday_Recap_and_Memory_Lane_Template_6011b18aaa.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/holiday-recap-template-memory-lane-year-in-review/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/holiday-recap-template-memory-lane-year-in-review
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,s1_video,s2_subtitle,s2_video,s2_image,s3_image_1,s3_image_2,s3_image_3,s3_image_4,s3_image_5,s4_video,s4_image,s5_video,s5_subtitle,s5_body,text_font_color,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | Autumn in November |
| `S1_Subtitle` | MEMORY LANE |
| `S1_VIDEO` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/959b89c4-9bae-4bd1-b3a6-59b7ac4fb673/source.mp4 |
| `S2_Subtitle` | Highlight |
| `S2_VIDEO` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/7411ba92-707e-4c45-a890-3eb110523d91/source.mp4 |
| `S2_IMAGE` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/211275e6-12ba-4f5a-aaf8-dc4598619946/source.jpg |
| `S3_IMAGE_1` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/a6febc0c-9c1b-479f-bcc5-ad0488749f56/source.jpg |
| `S3_IMAGE_2` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/a1368c39-7eba-42bc-8337-f093129c643f/source.jpg |
| `S3_IMAGE_3` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/40dcb30c-590b-4bc0-9b37-4f84a310774f/source.jpg |
| `S3_IMAGE_4` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/d325291d-e4b6-44fb-a54c-667663bb001d/source.jpg |
| `S3_IMAGE_5` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/92ce8bf9-c54f-49ac-8381-a536ae0878c4/source.jpg |
| `S4_VIDEO` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/fff00ebe-36f1-4ce1-a36c-aa6aac701b49/source.mp4 |
| `S4_IMAGE` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/fb354986-9fa8-4003-93c9-b37da291c481/source.jpg |
| `S5_VIDEO` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/921df409-3cff-44fc-a4fa-08aac35c7b13/source.mp4 |
| `S5_Subtitle` | Happy Autumn Break |
| `S5_Body` | may it be as colorful as the fall leaves! |
| `TEXT_FONT_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/holiday-recap-template-memory-lane-year-in-review/aeb23361-b385-4dc1-9c40-31c074b4cda0/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
