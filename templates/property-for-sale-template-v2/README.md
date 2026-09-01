# Fresh Start - Property Listing Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 12s · **Format:** mp4 · **Category:** Listings & Classifieds

![Fresh Start - Property Listing Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Fresh_Start_Property_Listing_Template_6cc8c1877e.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/property-for-sale-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/property-for-sale-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
global_agency_name,global_agent_name,global_agent_contact,slide_1_text,slide_1_image,logo,slide_2_title,slide_2_subtitle,slide_3_title,slide_3_subtitle,slide_3_text,image-to-video_src,image-to-video_src_2,text_font_color,text_font_color_2
```

| Field | Default value |
| --- | --- |
| `GLOBAL_AGENCY_NAME` | Johnny Tess |
| `GLOBAL_AGENT_NAME` | Monday and Olu |
| `GLOBAL_AGENT_CONTACT` | +123456789 |
| `SLIDE_1_TEXT` | Short Property Description |
| `SLIDE_1_IMAGE` | https://templates.shotstack.io/property-for-sale-template/e108cfe7-908e-4845-b7f5-088a1a20e3a0/shotstack-proxy.webp |
| `LOGO` | https://templates.shotstack.io/property-for-sale-template/179e0e1a-c68c-41e4-a29b-f215f51fa040/source.png |
| `SLIDE_2_TITLE` | Luxious & beautiful Flat |
| `SLIDE_2_SUBTITLE` | An amazing cool House for family |
| `SLIDE_3_TITLE` | A Beautiful Outdoor space |
| `SLIDE_3_SUBTITLE` | Enjoy nature in your private garden |
| `SLIDE_3_TEXT` | "Interested? Schedule a Visit Today!" |
| `IMAGE-TO-VIDEO_SRC` | https://templates.shotstack.io/property-for-sale-template/ace6ae95-a5dc-413c-ad15-11d564cdad45/shotstack-proxy.webp |
| `IMAGE-TO-VIDEO_SRC_2` | https://templates.shotstack.io/property-for-sale-template/ba97ebfc-9c64-4fab-b584-5ee63ab0e551/shotstack-proxy.webp |
| `TEXT_FONT_COLOR` | #042387 |
| `TEXT_FONT_COLOR_2` | #ffffff |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
