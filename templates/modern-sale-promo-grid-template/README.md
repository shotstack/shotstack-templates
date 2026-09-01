# Chic Grid Sale & Offer Announcement Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 9s · **Format:** mp4 · **Category:** E-Commerce

![Chic Grid Sale & Offer Announcement Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Chic_Grid_Sale_and_Offer_Announcement_Template_b0433329b6.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/modern-sale-promo-grid-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/modern-sale-promo-grid-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_image_1,s1_image_2,s1_image_3,s1_image_4,s1_image_5,s1_image_6,s1_image_7,s1_image_8,s1_image_9,s1_image_10,s1_sub_title_1,s1_title_2,s1_discount,font_color,background_color,s2_image_11,s2_cta,s2_handle,audio_src,s1_title_1
```

| Field | Default value |
| --- | --- |
| `S1_IMAGE_1` | https://templates.shotstack.io/modern-sale-promo-grid-template/9aeabfd9-71ad-4513-88e5-62d8458fb9e1/source.png |
| `S1_IMAGE_2` | https://templates.shotstack.io/modern-sale-promo-grid-template/6a69cfc8-e872-4295-bd30-70d71d7a669f/source.png |
| `S1_IMAGE_3` | https://templates.shotstack.io/modern-sale-promo-grid-template/871796d3-943b-4e14-8a09-5fc3abf79389/source.png |
| `S1_IMAGE_4` | https://templates.shotstack.io/modern-sale-promo-grid-template/f808e067-5ba8-49c4-921b-ef158b5ab077/source.png |
| `S1_IMAGE_5` | https://templates.shotstack.io/modern-sale-promo-grid-template/f5ba05ee-ac15-4a5a-8d4b-fba861aca796/source.png |
| `S1_IMAGE_6` | https://templates.shotstack.io/modern-sale-promo-grid-template/00fe6e0b-70a6-46e0-ba7f-ef83aae91578/source.png |
| `S1_IMAGE_7` | https://templates.shotstack.io/modern-sale-promo-grid-template/6ec01770-b0d6-41e2-85c1-5d7d96df6ae8/source.png |
| `S1_IMAGE_8` | https://templates.shotstack.io/modern-sale-promo-grid-template/f60bcaef-a8f2-4c98-8fba-d1ece2257473/source.png |
| `S1_IMAGE_9` | https://templates.shotstack.io/modern-sale-promo-grid-template/8abab57e-e31b-4abd-a0c7-4b460e1f7ce1/source.png |
| `S1_IMAGE_10` | https://templates.shotstack.io/modern-sale-promo-grid-template/949ae166-505a-40f1-a9ce-e6d5f67e769f/source.png |
| `S1_Sub_Title_1` | QUICK DEAL |
| `S1_Title_2` | SALES |
| `S1_Discount` | 30% OFF |
| `FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #524f4c |
| `S2_IMAGE_11` | https://templates.shotstack.io/modern-sale-promo-grid-template/c59ad1d6-52b2-4ee6-b3b7-9fe77a9030a1/source.png |
| `S2_CTA` | Shop with us |
| `S2_handle` | @ fazmodel |
| `AUDIO_SRC` | https://templates.shotstack.io/modern-sale-promo-grid-template/df31e2a2-3543-4862-92a6-7ac98c10fb05/source.mp3 |
| `S1_Title_1` | Summer Holiday |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
