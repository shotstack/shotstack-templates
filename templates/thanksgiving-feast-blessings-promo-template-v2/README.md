# Thanksgiving Feast & Blessings Promotional Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Celebrations

![Thanksgiving Feast & Blessings Promotional Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Thanksgiving_Feast_and_Blessings_Promotional_Template_fead1f1806.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/thanksgiving-feast-blessings-promo-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/thanksgiving-feast-blessings-promo-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,subtitle,video_1,video_2,video_3,element_1,element_2,element_3,element_4,font_color,background_color,audio
```

| Field | Default value |
| --- | --- |
| `Title` | Thanksgiving Blessings |
| `Subtitle` | Wishing your family peace and joy |
| `VIDEO_1` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/66dd8e68-16f6-4fad-84c7-9558eb97e684/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/f42840bb-84a6-45ef-8d73-765c3beac1a5/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/f8c8a729-0047-46d0-a413-34c397f049a9/source.mp4 |
| `Element_1` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/2d0d1ebd-dea7-40e9-89cc-57437eb1dd6b/source.png |
| `Element_2` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/dd8ae2b7-63c5-466a-bce0-9a61e278c126/source.png |
| `Element_3` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/13a55fca-6923-418e-8be9-b0b7bea128c8/source.png |
| `Element_4` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/a7e42408-615b-44f9-9aaa-076839e5d777/source.png |
| `FONT_COLOR` | #000000 |
| `BACKGROUND_COLOR` | #e4e4e0 |
| `AUDIO` | https://templates.shotstack.io/thanksgiving-feast-blessings-promo-template/658b8189-5a97-4aa5-ae79-71a43b4e497d/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
