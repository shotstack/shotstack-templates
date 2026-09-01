# Elegant Home for Rent with Premium Features

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Elegant Home for Rent with Premium Features preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Elegant_Home_for_Rent_with_Premium_Features_68aa3812f9.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/elegant-home-rent-premium-features/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/elegant-home-rent-premium-features
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,description,address,amount,time,s1_title,s1_description,s1_description_2,s1_description_3,s1_description_4,s1_description_5,s1_description_6,s1_description_7,s1_description_8,s1_description_9,cta,phone,website,brand_name,white_logo,long_image_src_2,image_src_3,image_src_4,s1_text_font_color,s2_text_font_color_2,element_color,background_color_2,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | EXPERIENCE MODERN LIVING |
| `DESCRIPTION` | Luxurious House for Rent |
| `ADDRESS` | 123 AnywhereSt, Any City |
| `AMOUNT` | $500 |
| `TIME` | / per month |
| `S1_TITLE` | Our Facilities |
| `S1_DESCRIPTION` | 3 Bathrooms |
| `S1_DESCRIPTION_2` | Swimming Pool |
| `S1_DESCRIPTION_3` | Internet |
| `S1_DESCRIPTION_4` | 3 Bedrooms |
| `S1_DESCRIPTION_5` | Modern Kitchen |
| `S1_DESCRIPTION_6` | Gym Center |
| `S1_DESCRIPTION_7` | Living Room |
| `S1_DESCRIPTION_8` | Garage |
| `S1_DESCRIPTION_9` | Smart Home |
| `CTA` | Contact Us: |
| `PHONE` | +123-456-7890 |
| `WEBSITE` | www.realestate.com |
| `BRAND_NAME` | REAL ESTATE |
| `WHITE_LOGO` | https://templates.shotstack.io/elegant-home-rent-premium-features/ab06675b-9a04-4017-ad85-648d6554fc80/source.png |
| `LONG_IMAGE_SRC_2` | https://templates.shotstack.io/elegant-home-rent-premium-features/e09abec0-fdb5-4eb3-93ab-e22ec79364e6/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/elegant-home-rent-premium-features/8f517b94-d96c-49c0-b7f3-6fb7944333bf/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/elegant-home-rent-premium-features/dc9ec43b-ac41-4340-b760-9627d931a2af/source.jpg |
| `S1_TEXT_FONT_COLOR` | #ffffff |
| `S2_TEXT_FONT_COLOR_2` | #000000 |
| `ELEMENT_COLOR` | #5900ff |
| `BACKGROUND_COLOR_2` | #ffffff |
| `AUDIO_SRC` | https://templates.shotstack.io/elegant-home-rent-premium-features/7ff8bb22-f62f-49ff-93fd-73c9e81e209a/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
