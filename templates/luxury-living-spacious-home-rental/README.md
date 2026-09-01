# Luxury Living - Spacious Home Rental

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Luxury Living - Spacious Home Rental preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Luxury_Living_Spacious_Home_Rental_eb3409d594.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/luxury-living-spacious-home-rental/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/luxury-living-spacious-home-rental
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,amount,time,image_src,image_src_2,image_src_3,text_font_color,icon_1,feature_1,icon_2,feature_2,icon_3,feature_3,icon_4,feature_4,contact,phone,website,background_color,square_color_2,line_color_3,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | WELCOME TO YOUR DREAM HOME |
| `DESCRIPTION` | Modern House for Rent |
| `AMOUNT` | $500 |
| `TIME` | / per month |
| `IMAGE_SRC` | https://templates.shotstack.io/luxury-living-spacious-home-rental/af4b209c-ce7a-40e0-8e18-cdb1acb8c12a/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/luxury-living-spacious-home-rental/b65dc89b-4e65-4678-9294-5d599fb067bd/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/luxury-living-spacious-home-rental/96fa3fe7-c802-4cb3-bd82-7947aa9c8991/source.jpg |
| `TEXT_FONT_COLOR` | #ffffff |
| `ICON_1` | https://templates.shotstack.io/luxury-living-spacious-home-rental/b83746df-4a5a-4562-ad33-1df0d94698f3/source.png |
| `FEATURE_1` | OUTDOOR BBQ |
| `ICON_2` | https://templates.shotstack.io/luxury-living-spacious-home-rental/820f79b8-f6d4-4775-a2ea-f5dbf3a81920/source.png |
| `FEATURE_2` | FULLY EQUIPPED KITCHEN |
| `ICON_3` | https://templates.shotstack.io/luxury-living-spacious-home-rental/78132ed1-e91c-46c8-ab08-1b5e95e10a44/source.png |
| `FEATURE_3` | HIGH-SPEED INTERNET |
| `ICON_4` | https://templates.shotstack.io/luxury-living-spacious-home-rental/3ad86c42-125a-4061-9dd4-e98baf84c102/source.png |
| `FEATURE_4` | PRIVATE POOL |
| `CONTACT` | Contact Us: |
| `PHONE` | +123-456-7890 |
| `WEBSITE` | www.reallygreatsite.com |
| `BACKGROUND_COLOR` | #343e50 |
| `SQUARE_COLOR_2` | #2f3050 |
| `LINE_COLOR_3` | #486670 |
| `AUDIO_SRC` | https://templates.shotstack.io/luxury-living-spacious-home-rental/3b8cdece-501a-447a-8de2-2b5d2f0b11c6/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
