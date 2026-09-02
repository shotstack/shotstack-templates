# Luxe Weekly Offer Announcement Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 4:5 · **Duration:** 8s · **Format:** mp4 · **Category:** E-Commerce

![Luxe Weekly Offer Announcement Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Luxe_Weekly_Offer_Announcement_Template_460640f4fd.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/luxe-offer-announcement-promo-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/luxe-offer-announcement-promo-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_intro,s1_title,s1_body,s1_image_table,s1_image_lotion,s1_image_lotion,s1_tag_3,s1_tag_2,s1_tag_1,s2_image_table,s2_title,s2_cta_1,s2_cta_2,s2_web,font_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_intro` | We Introduce |
| `S1_Title` | OUR NEW LUXE LOTION |
| `S1_Body` | Experience the pinnacle of softness and radiance with this exquisite lotion. |
| `S1_IMAGE_Table` | https://templates.shotstack.io/luxe-offer-announcement-promo-template/d32b724e-bfe2-4797-9c15-7ece97199c07/source.png |
| `S1_IMAGE_Lotion` | https://templates.shotstack.io/luxe-offer-announcement-promo-template/514616f3-3638-4c69-b3fa-02299eb9e5d7/source.png |
| `S1_IMAGE_Lotion` | https://templates.shotstack.io/luxe-offer-announcement-promo-template/ad1922c4-370c-4033-9e0d-5c1e35b0b0d8/source.png |
| `S1_tag_3` | Silken luxury |
| `S1_tag_2` | Pure indulgence |
| `S1_tag_1` | Supreme moisture |
| `S2_IMAGE_Table` | https://templates.shotstack.io/luxe-offer-announcement-promo-template/c138333a-ed8d-4ee7-91fd-ec1a2aa3abee/source.png |
| `S2_Title` | Special price for this week only |
| `S2_CTA_1` | Catch the deal now |
| `S2_CTA_2` | BUY TODAY |
| `S2_Web` | www.lotionluxee.com |
| `FONT_COLOR` | #000000 |
| `BACKGROUND_COLOR` | #7c033e |
| `AUDIO_SRC` | https://templates.shotstack.io/luxe-offer-announcement-promo-template/791ce17f-db2d-4aaf-9c7b-329424934b0d/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
