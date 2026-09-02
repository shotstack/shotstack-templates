# Explore Russia Your Next Adventure Awaits

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 5s · **Format:** mp4 · **Category:** Travel

![Explore Russia Your Next Adventure Awaits preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Explore_Russia_Your_Next_Adventure_Awaits_e97fe3ee32.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/explore-russia-travel-deal-tour-package-offer/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/explore-russia-travel-deal-tour-package-offer
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,title_3,font_color,cta,shape_color,video_1,video_2,video_3,audio
```

| Field | Default value |
| --- | --- |
| `Title_1` | ready to |
| `Title_2` | explore |
| `Title_3` | the globe |
| `FONT_COLOR` | #000000 |
| `CTA` | BOOK TODAY |
| `SHAPE_COLOR` | #fbf7f3 |
| `VIDEO_1` | https://templates.shotstack.io/explore-russia-travel-deal-tour-package-offer/11e02f92-bc9d-4c86-ab5d-4af1128f8b22/source.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/explore-russia-travel-deal-tour-package-offer/adfbb7d2-61e0-4bf1-aab6-a02f881def49/source.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/explore-russia-travel-deal-tour-package-offer/e4be3039-9048-4cff-89fb-4e579e80d3c2/source.mp4 |
| `AUDIO` | https://templates.shotstack.io/explore-russia-travel-deal-tour-package-offer/3aaa588e-d14b-42ce-bc3b-d05cb2cae812/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
