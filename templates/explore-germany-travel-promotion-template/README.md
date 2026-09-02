# Explore Germany Travel Promotion Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 16.8s · **Format:** mp4 · **Category:** Travel

![Explore Germany Travel Promotion Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Explore_Germany_Travel_Promotion_Template_4dc2d868bc.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/explore-germany-travel-promotion-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/explore-germany-travel-promotion-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
search,text_1,text_2,text_3,text_4,text_%,video_1,video_2,video_3,video_4,video_5,video_6,video_7,video_8,video_9,video_10,video_11,video_12,text_font_color,text_background_color,audio
```

| Field | Default value |
| --- | --- |
| `Search` | Tour through Germany |
| `Text_1` | I should never miss exploring these extraordinary sights, cultural treasures, and once-in-a-lifetime experiences when traveling to Germany. |
| `Text_2` | JOIN ME |
| `Text_3` | Grand structures that showcase centuries of German history and craftsmanship. |
| `Text_4` | Majestic buildings surrounded by scenic landscapes, steeped in legend and romance. |
| `Text_%` | Germany – Too Remarkable to Miss |
| `VIDEO_1` | https://templates.shotstack.io/explore-germany-travel-promotion-template/ef26baf2-e65f-4a37-8a7c-f3d99ac9ddc7/source.m4v |
| `VIDEO_2` | https://templates.shotstack.io/explore-germany-travel-promotion-template/d12c8340-863a-4c69-a793-b334c9c4b69c/source.m4v |
| `VIDEO_3` | https://templates.shotstack.io/explore-germany-travel-promotion-template/fa7d18e1-b725-4a93-bc85-fe363a04c89d/source.mp4 |
| `VIDEO_4` | https://templates.shotstack.io/explore-germany-travel-promotion-template/aa901f74-c828-4691-95d4-fe8411f15f1b/source.m4v |
| `VIDEO_5` | https://templates.shotstack.io/explore-germany-travel-promotion-template/0069b328-abd5-4a85-b6f8-d25945a07b67/source.mp4 |
| `VIDEO_6` | https://templates.shotstack.io/explore-germany-travel-promotion-template/349b4a25-7c1e-49cc-934d-eacb588eb61b/source.m4v |
| `VIDEO_7` | https://templates.shotstack.io/explore-germany-travel-promotion-template/901760dd-8cb6-4e60-afca-9918f5e34586/source.mp4 |
| `VIDEO_8` | https://templates.shotstack.io/explore-germany-travel-promotion-template/38099998-4339-4093-bdaf-d02336c904e8/source.mp4 |
| `VIDEO_9` | https://templates.shotstack.io/explore-germany-travel-promotion-template/79dce8a9-84ed-4b0c-a933-63d3b5f11bc8/source.m4v |
| `VIDEO_10` | https://templates.shotstack.io/explore-germany-travel-promotion-template/eb04ba24-c4d8-43a9-856c-bbd773e964e7/source.m4v |
| `VIDEO_11` | https://templates.shotstack.io/explore-germany-travel-promotion-template/97ea02c4-c1d6-4732-98fc-aac7dabe163b/source.m4v |
| `VIDEO_12` | https://templates.shotstack.io/explore-germany-travel-promotion-template/075c8a54-b6bc-4b23-8718-02587883d868/source.mp4 |
| `TEXT_FONT_COLOR` | #000000 |
| `TEXT_BACKGROUND_COLOR` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/explore-germany-travel-promotion-template/5be36cb7-aaca-4c9a-9725-57fd0315a990/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
