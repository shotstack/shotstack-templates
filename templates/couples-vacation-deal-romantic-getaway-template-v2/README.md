# Romantic Getaway & Couples Vacation Deal Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 12s · **Format:** mp4 · **Category:** Travel

![Romantic Getaway & Couples Vacation Deal Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Romantic_Getaway_and_Couples_Vacation_Deal_Template_bb406e731f.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/couples-vacation-deal-romantic-getaway-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/couples-vacation-deal-romantic-getaway-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_subtitle,social_handle,s1_image_1,s1_video,font_color_1,font_color_2,background_color,s2_subtitle,s2_image_1,s2_image_2,s3_subtitle,s3_image_1,s3_image_2,s4_subtitle,s4_image_1,s5_image_2,s5_subtitle,s5_image_1,s6_subtitle,s6_image_1,s6_image_2,s7_subtitle,s7_image_1,s7_image_2,s8_subtitle,s8_body,s8_image,s8_video,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | COUPLES VACATION DEAL |
| `S1_Subtitle` | FUN MOMENT, LOVE & EXPLORATION |
| `Social_Handle` | @travelsurvey |
| `S1_IMAGE_1` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/65a6deff-b424-453a-93b7-fae018e7d117/source.png |
| `S1_VIDEO` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/2018a41e-435e-435a-aaa2-92244d7e3f22/source.m4v |
| `FONT_COLOR_1` | #f0f0ee |
| `FONT_COLOR_2` | #3e9578 |
| `BACKGROUND_COLOR` | #ffffff |
| `S2_Subtitle` | CAMPING |
| `S2_IMAGE_1` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/d11357af-3447-46dc-945f-a2f4b246f61f/source.png |
| `S2_IMAGE_2` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/8f184896-b567-438a-8fd8-d4c4eac108fd/source.png |
| `S3_Subtitle` | BEACHFRONT |
| `S3_IMAGE_1` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/2abf46d0-6882-41b8-8bcb-a7d69a5cd16e/source.png |
| `S3_IMAGE_2` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/3440db57-1a41-4f0d-ace3-944a8b2675c2/source.png |
| `S4_Subtitle` | COCKTAILS FOR TWO |
| `S4_IMAGE_1` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/dd6e4d28-51e8-4c4d-9428-e52e61fbea38/source.png |
| `S5_IMAGE_2` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/98de0f24-f318-41ce-ba23-db8c7940f396/source.png |
| `S5_Subtitle` | LUXURY MOUNTAIN ESCAPE |
| `S5_IMAGE_1` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/4a3aab71-7d78-4e1d-a5cc-cb6ba7b7bfda/source.png |
| `S6_Subtitle` | ROMANTIC POOLSIDE BRUNCH |
| `S6_IMAGE_1` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/68564e66-4c01-4293-9dda-52689ba05aab/source.png |
| `S6_IMAGE_2` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/6ade76db-1541-4b01-9784-53653aa218bd/source.png |
| `S7_Subtitle` | ROMANTIC DINNER ON THE WATER |
| `S7_IMAGE_1` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/a5b9deb4-ca13-42c0-8897-c35e55d89c00/source.png |
| `S7_IMAGE_2` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/57a90ae9-f1f0-4d2d-9433-50947098ddff/source.png |
| `S8_Subtitle` | LIVE THE BEST IN PAIRS |
| `S8_body` | Leave the everyday behind and step into a story of your own |
| `S8_IMAGE` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/e378c375-68d7-4159-a81d-40acaef03b08/source.png |
| `S8_VIDEO` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/8b6c36d5-4709-46be-af26-e3b0eec9185c/source.m4v |
| `AUDIO` | https://templates.shotstack.io/couples-vacation-deal-romantic-getaway-template/a3b3e680-392f-42f7-bb3a-975678674075/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
