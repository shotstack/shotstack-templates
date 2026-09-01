# Open House Invitation for Luxury Real Estate

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 6s · **Format:** mp4 · **Category:** Listings & Classifieds

![Open House Invitation for Luxury Real Estate preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Open_House_Invitation_for_Luxury_Real_Estate_60bca896cc.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/open-house-invitation-luxury-real-estate-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/open-house-invitation-luxury-real-estate-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
brand_name,brand_tag,title,date,address,cta,phone,website,email,text_font_color,audio_src,background_color,video_src
```

| Field | Default value |
| --- | --- |
| `BRAND_NAME` | REAL ESTATE |
| `BRAND_TAG` | PORPERTIES |
| `TITLE` | OPEN HOUSE |
| `DATE` | SUNDAY, 04 OCTOBER, 2025 |
| `ADDRESS` | 123 ANYWHERE ST., ANY CITY |
| `CTA` | JOIN US! |
| `PHONE` | +123-456-7890 |
| `WEBSITE` | WWW.REALESTATE.COM |
| `EMAIL` | @REALESTATE |
| `TEXT_FONT_COLOR` | #000000 |
| `AUDIO_SRC` | https://templates.shotstack.io/open-house-invitation-luxury-real-estate/e63326dc-2be4-43d0-b61d-dca62a53a463/source.mp3 |
| `BACKGROUND_COLOR` | #ffffff |
| `VIDEO_SRC` | https://templates.shotstack.io/open-house-invitation-luxury-real-estate/884fbf79-dff2-4e33-8e0f-d3634c68a053/source.mp4 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
