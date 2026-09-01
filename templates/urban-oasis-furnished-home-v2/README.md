# Urban Oasis: Modern Home with Furnishings

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Urban Oasis: Modern Home with Furnishings preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Urban_Oasis_Modern_Home_with_Furnishings_3d94eda33d.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/urban-oasis-furnished-home-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/urban-oasis-furnished-home-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,s1_title,description,s2_description_1,s2_description_2,s2_description_3,website,video_src,white,black,box_color,element_background_color_2,background_color
```

| Field | Default value |
| --- | --- |
| `TITLE` | House for Sale |
| `S1_TITLE` | SPECIFICATIONS |
| `DESCRIPTION` | 5,000 SQUARE FEET |
| `S2_DESCRIPTION_1` | SIX BEDROOM |
| `S2_DESCRIPTION_2` | FIVE BATHROOM |
| `S2_DESCRIPTION_3` | INCLUDING FURNITURE |
| `WEBSITE` | www.realestatecompany.com |
| `VIDEO_SRC` | https://templates.shotstack.io/urban-oasis-furnished-home/1eed2e34-9ee4-45c5-914d-50b0cf3160f3/source.mp4 |
| `WHITE` | #ffffff |
| `BLACK` | #000000 |
| `Box_COLOR` | #917459 |
| `Element_BACKGROUND_COLOR_2` | #6b6161 |
| `BACKGROUND_COLOR` | #aba6a6 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
