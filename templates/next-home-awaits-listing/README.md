# Your Next Home Awaits - Rent with Ease

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 40.5s · **Format:** mp4 · **Category:** Listings & Classifieds

![Your Next Home Awaits - Rent with Ease preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Your_Next_Home_Awaits_Rent_with_Ease_10ff65565b.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/next-home-awaits-listing/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/next-home-awaits-listing
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
global_agency_name,slide_1_text,bedrooms,living_rooms,dining_room,number_of_car,sqft,year,parking,rent,cta,image_src,image_src_2,image_src_3,image_src_4,text_font_color,line_color,text_font_color_2,s1_description,s1_title,s1_description_2,s1_cta,facebook,instagram,youtube
```

| Field | Default value |
| --- | --- |
| `GLOBAL_AGENCY_NAME` | Canarsie Road |
| `SLIDE_1_TEXT` | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore |
| `BEDROOMS` | 4 Bedrooms |
| `LIVING_ROOMS` | 2 living room |
| `DINING_ROOM` | 1 dining room |
| `NUMBER_OF_CAR` | garage for 2 car |
| `SQFT` | 1200 SQFT |
| `YEAR` | 2017 year of building |
| `PARKING` | 4 parking places |
| `RENT` | 2,718,969$ |
| `CTA` | Contact us to get more Information! |
| `IMAGE_SRC` | https://templates.shotstack.io/next-home-awaits-listing/4b568503-6388-4121-a32c-c9a2be847610/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/next-home-awaits-listing/b4561d07-03e1-47f1-8f2f-0814891963a8/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/next-home-awaits-listing/f6b57468-ff7c-488f-9a16-40c3a16e084a/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/next-home-awaits-listing/9c673ce4-9f3d-4760-b38b-adfa04a5421b/source.jpg |
| `TEXT_FONT_COLOR` | #ffffff |
| `LINE_COLOR` | #042387 |
| `TEXT_FONT_COLOR_2` | #000000 |
| `S1_DESCRIPTION` | Your personal realtor |
| `S1_TITLE` | Poppy Harlow |
| `S1_DESCRIPTION_2` | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore |
| `S1_CTA` | Contact me via: |
| `FACEBOOK` | /facebook.page |
| `INSTAGRAM` | /instagram.page |
| `YOUTUBE` | /youtube.page |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
