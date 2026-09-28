# Summer Holiday Recap & Review Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 14.7s · **Format:** mp4 · **Category:** Memories

![Summer Holiday Recap & Review Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Summer_Holiday_Recap_and_Review_Template_7210602979.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/summer-holiday-recap-review-story-template-highlights-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/summer-holiday-recap-review-story-template-highlights-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,s1_video,s2_subtitle,s2_video,s3_subtitle,s3_video,s4_subtitle,s5_video,s6_subtitle,s6_video,s7_subtitle_1,s7_subtitle_2,s7_video,font_color_1,font_color_2,audio
```

| Field | Default value |
| --- | --- |
| `S1_title_1` | SUMMER |
| `S1_Title_2` | Holiday Review |
| `S1_VIDEO` | https://templates.shotstack.io/summer-holiday-recap-review-story-template-highlights/7e89c34e-1df1-4192-92bc-f218ebaa5444/source.mp4 |
| `S2_Subtitle` | Beach Day |
| `S2_VIDEO` | https://templates.shotstack.io/summer-holiday-recap-review-story-template-highlights/a20a0cd9-8af2-4b0c-9995-da8c329d7351/source.mp4 |
| `S3_Subtitle` | Picnic in the Park |
| `S3_VIDEO` | https://templates.shotstack.io/summer-holiday-recap-review-story-template-highlights/ad859abd-8195-4ad5-b7ce-de9c4f90ff80/source.mp4 |
| `S4_Subtitle` | Road Trip |
| `S5_VIDEO` | https://templates.shotstack.io/summer-holiday-recap-review-story-template-highlights/e8fcc325-e971-443b-881c-9da5d7b0cd3b/source.mp4 |
| `S6_Subtitle` | Camping |
| `S6_VIDEO` | https://templates.shotstack.io/summer-holiday-recap-review-story-template-highlights/55c3321e-2487-46b7-9db6-3bbad528c043/source.mp4 |
| `S7_Subtitle_1` | MEMORIES |
| `S7_Subtitle_2` | Made Under Skies |
| `S7_VIDEO` | https://templates.shotstack.io/summer-holiday-recap-review-story-template-highlights/b41f3ce3-6034-45b9-a1ff-eb3ad47c0a73/source.mp4 |
| `FONT_COLOR_1` | #ffffff |
| `FONT_COLOR_2` | #12c21f |
| `AUDIO` | https://templates.shotstack.io/summer-holiday-recap-review-story-template-highlights/de32b9ac-7b0f-4648-80b9-ad79db4ccd75/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
