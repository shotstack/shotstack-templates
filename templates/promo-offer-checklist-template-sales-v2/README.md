# Radiant Results: Checklist Promo Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** E-Commerce

![Radiant Results: Checklist Promo Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Radiant_Results_Checklist_Promo_Template_d1b9c2a620.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/promo-offer-checklist-template-sales-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/promo-offer-checklist-template-sales-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_description_1,s1_description_2,s1_description_3,s1_description_4,text_font_color,pointers_color,box_color_2,video_src,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_TITLE` | HOW TO MAKE YOUR SKIN GLOW |
| `S1_DESCRIPTION_1` | Drink plenty of water daily to keep your skin plump and radiant. |
| `S1_DESCRIPTION_2` | Exfoliate 1 to 2 times a week to remove dead skin cells and reveal fresh, glowing skin. |
| `S1_DESCRIPTION_3` | Apply a good moisturizer suited to your skin type to maintain hydration and softness. |
| `S1_DESCRIPTION_4` | Use sunscreen every day to prevent sun damage and keep your skin tone even. |
| `TEXT_FONT_COLOR` | #ffffff |
| `POINTERS_COLOR` | #000000 |
| `BOX_COLOR_2` | #ffffff |
| `VIDEO_SRC` | https://templates.shotstack.io/promo-offer-checklist-template-sales/d314908c-0a76-4799-8cd6-a84a53db17ec/source.mp4 |
| `AUDIO_SRC` | https://templates.shotstack.io/promo-offer-checklist-template-sales/2d42798e-126f-49e1-bbd3-6d3f4bd2342b/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
