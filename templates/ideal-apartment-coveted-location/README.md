# Ideal Apartment in a Coveted Location

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Ideal Apartment in a Coveted Location preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Bright_and_Airy_2_Bedroom_Home_for_Sale_65514c7197.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/ideal-apartment-coveted-location/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/ideal-apartment-coveted-location
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
address,title,description,s1_description,s1_description_2,s1_description_3,s1_description_4,s2_title,s2_description_1,s2_description_2,text_font_color,background_color,video_src,video_src_2,audio_src
```

| Field | Default value |
| --- | --- |
| `ADDRESS` | 123 Anywhere St., Any City |
| `TITLE` | FOR SALE |
| `DESCRIPTION` | PRICE : $350000 |
| `S1_DESCRIPTION` | 2 Bathrooms |
| `S1_DESCRIPTION_2` | 2 Bedrooms |
| `S1_DESCRIPTION_3` | 1500 Sqft. |
| `S1_DESCRIPTION_4` | 1 Car Garage |
| `S2_TITLE` | Get in Touch For More Info! |
| `S2_DESCRIPTION_1` | hello@reallygreatsite.com |
| `S2_DESCRIPTION_2` | +123-456-7890 |
| `TEXT_FONT_COLOR` | #000000 |
| `BACKGROUND_COLOR` | #ffffff |
| `VIDEO_SRC` | https://templates.shotstack.io/ideal-apartment-coveted-location/472eb1d4-7a82-461b-b911-4b793615a451/source.mp4 |
| `VIDEO_SRC_2` | https://templates.shotstack.io/ideal-apartment-coveted-location/23bc1412-d3b1-44fe-96fc-93d5d4a5b6c0/source.mp4 |
| `AUDIO_SRC` | https://templates.shotstack.io/ideal-apartment-coveted-location/95e33266-c5f3-4753-a72c-ac382feadefb/shotstack-proxy.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
