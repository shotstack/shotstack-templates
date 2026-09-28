# Holiday Recap Promotional Story Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 15s · **Format:** mp4 · **Category:** Memories

![Holiday Recap Promotional Story Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Holiday_Recap_Promotional_Story_Template_1380036340.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/holiday-recap-promo-story-template-sale-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/holiday-recap-promo-story-template-sale-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_image_1,s1_image_2,s1_image_3,s1_image_4,s1_image_5,s1_image_6,s1_image_7,s1_background_video,image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title` | Holiday Recap |
| `S1_IMAGE_1` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/7e638a79-0de9-48bc-b69a-6fb1818be099/source.png |
| `S1_IMAGE_2` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/81b63a7d-fd2b-434f-a9c2-f0b6d786be4a/source.png |
| `S1_IMAGE_3` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/d1517788-32a6-49e5-9f57-f22e174f941b/source.png |
| `S1_IMAGE_4` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/ddadfa2b-6ef6-45fa-820b-dca45552e3f9/source.png |
| `S1_IMAGE_5` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/12d1f2b7-10ea-4a37-97c5-9b34bcfae970/source.png |
| `S1_IMAGE_6` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/ebe14028-83c6-462a-9363-c9cbf68ffd23/source.png |
| `S1_IMAGE_7` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/d3d20e84-206c-4ad8-91ca-b5af525b54e2/source.png |
| `S1_BACKGROUND_VIDEO` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/2e5e49f3-c626-45be-8976-3f49435f87f9/source.mp4 |
| `IMAGE_1` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/d89b6e2a-b33c-4c7d-af5c-33d03801ed0a/source.jpg |
| `IMAGE_2` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/87fb0bdd-8a42-4825-b939-8a4c6e6c7d88/source.jpg |
| `IMAGE_3` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/31a061d5-0267-4dbe-8f6e-56b4a1531a52/source.jpg |
| `IMAGE_4` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/f53f6c1a-6894-4960-943d-ebc67161586f/source.jpg |
| `IMAGE_5` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/18dc4fb2-5a82-4af8-9d4e-58dd5907bd48/source.jpg |
| `IMAGE_6` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/8f54be1f-1eba-4e70-9eb8-b40e92fc7579/source.jpg |
| `IMAGE_7` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/79c531b7-aa5c-4970-9257-b954f3d7ee1e/source.jpg |
| `IMAGE_8` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/cd5f590f-65a9-47ce-8abc-7876f5e87ea0/source.jpg |
| `AUDIO` | https://templates.shotstack.io/holiday-recap-promo-story-template-sale/92c115c4-684b-41ce-9cdb-2ac6c485343a/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
