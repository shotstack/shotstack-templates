# Exclusive Dubai Vibe Luxury Offer & Event Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 26.6s · **Format:** mp4 · **Category:** Travel

![Exclusive Dubai Vibe Luxury Offer & Event Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Exclusive_Dubai_Vibe_Luxury_Offer_and_Event_Template_3e513d7f41.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/exclusive-dubai-luxury-offer-event-template-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/exclusive-dubai-luxury-offer-event-template-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title_1,s1_title_2,social_handle,s1_subtitle,s1_video,s2_title_1,s2_title_2,s2_subtitle,s2_video,s3_title,s3_subtitle,s3_video,s4_title,s4_subtitle,s4_video,s5_title,s5_subtitle,s5_video,s6_title,s6_subtitle,s6_video,s7_title,s7_subtile,s7_video,s8_title,s8_subtitle,s8_video,cta,s9_video,font_color_2,font_color_1,audio
```

| Field | Default value |
| --- | --- |
| `S1_Title_1` | HABIBI |
| `S1_Title_2` | COME TO DUBAI |
| `Social_Handle` | @TRAVELSURVEY |
| `S1_Subtitle` | FEEL LUXURY |
| `S1_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/5f720f27-81ae-488c-848b-98a54f4c82b9/source.mp4 |
| `S2_Title_1` | PLACES |
| `S2_Title_2` | TO VISIT IN DUBAI |
| `S2_Subtitle` | FOR FUN TRIP |
| `S2_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/554cd230-4481-4d57-9774-69817c3eca10/source.m4v |
| `S3_Title` | Burj Khalifa |
| `S3_Subtitle` | World’s Tallest Building |
| `S3_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/37ea2a30-15bc-4936-8e84-a33b40055d71/source.m4v |
| `S4_Title` | Dubai Mall |
| `S4_Subtitle` | Shopping & Entertainment Giant |
| `S4_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/1c02efc4-8579-452b-83c4-daf33671b8b3/source.mp4 |
| `S5_Title` | Palm Jumeirah |
| `S5_Subtitle` | Iconic Man-Made Island |
| `S5_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/e12df1db-cfe3-4535-8dda-9b3990c5d91a/source.m4v |
| `S6_Title` | Desert Safari |
| `S6_Subtitle` | Adventure in the Sands |
| `S6_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/3fc5bdad-b302-4d5a-b302-139a40e27247/source.mp4 |
| `S7_Title` | Dubai Marina |
| `S7_Subtile` | Waterfront Fun |
| `S7_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/321017c5-1188-4e28-b09f-e65f8372a8ec/source.m4v |
| `S8_Title` | IMG Worlds of Adventure |
| `S8_Subtitle` | Indoor Theme Park |
| `S8_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/9099b78e-acb6-47e4-bfc0-4fe2bde2a7c1/source.m4v |
| `CTA` | VISIT US |
| `S9_VIDEO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/7740cd6a-4304-4cc2-98f2-477f4275f6a1/source.m4v |
| `FONT_COLOR_2` | #dcbe18 |
| `FONT_COLOR_1` | #ffffff |
| `AUDIO` | https://templates.shotstack.io/exclusive-dubai-luxury-offer-event-template/8f8e5859-eb17-40e9-95a2-2fd63ad94373/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
