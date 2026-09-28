# Take Off with Our Exclusive Offer Your Next Journey Awaits!

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 8s · **Format:** mp4 · **Category:** Travel

![Take Off with Our Exclusive Offer Your Next Journey Awaits! preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Take_Off_with_Our_Exclusive_Offer_Your_Next_Journey_Awaits_3b7ede5ab1.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/flight-deal-travel-promo-special-offer-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/flight-deal-travel-promo-special-offer-template
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,s2_subtitle_1,s2_subtitle_2,s1_subtitle_3,font_color_1,font_color_2,s1_video,s2_videoc_1,s2_video_2,web,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title_1` | YOUR FLIGHT WITH |
| `S1_Title_2` | Boundfly |
| `S2_Subtitle_1` | Feast |
| `S2_Subtitle_2` | Beauty |
| `S1_Subtitle_3` | Comfort |
| `FONT_COLOR_1` | #000000 |
| `FONT_COLOR_2` | #ffffff |
| `S1_VIDEO` | https://templates.shotstack.io/flight-deal-travel-promo-special-offer-template/4448e1c1-ddad-47ed-80d3-e7dc3744a339/source.m4v |
| `S2_VIDEOC_1` | https://templates.shotstack.io/flight-deal-travel-promo-special-offer-template/f2e6242c-78b1-477b-8776-6a2633ce2d3c/source.mp4 |
| `S2_VIDEO_2` | https://templates.shotstack.io/flight-deal-travel-promo-special-offer-template/c712b399-7bc0-4271-a85c-d17c39bb2f21/source.mp4 |
| `Web` | www.boundfly.com |
| `AUDIO` | https://templates.shotstack.io/flight-deal-travel-promo-special-offer-template/6fed9dca-da7f-4000-a16c-2a0c526ad84e/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
