# Italy Holiday Vacation Promotional Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 6s · **Format:** mp4 · **Category:** Memories

![Italy Holiday Vacation Promotional Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Italy_Holiday_Vacation_Promotional_Template_886b431d01.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/italy-holiday-vacation-package-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/italy-holiday-vacation-package-promo-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,video_1,video_2,video_3,video_4,font_color,shape_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Vacation in Itay |
| `Subtitle` | A journey of flavors, history, and timeless beauty. |
| `VIDEO_1` | https://templates.shotstack.io/italy-holiday-vacation-package-promo-template/2112e1b6-746f-4571-9dc3-c92aacc27cc5/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/italy-holiday-vacation-package-promo-template/1af083d6-fa43-46fc-be65-a5fa2e584186/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/italy-holiday-vacation-package-promo-template/43051774-8ec8-4e26-bbb8-061d8ffee135/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/italy-holiday-vacation-package-promo-template/42123547-aaf6-4422-b42d-4f56dddd84f7/source.mp4 |
| `FONT_COLOR` | #ffffff |
| `SHAPE_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/italy-holiday-vacation-package-promo-template/7f94ac8e-0b6d-42b9-a36d-5c4645b450fd/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
