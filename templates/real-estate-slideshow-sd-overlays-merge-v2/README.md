# Real Estate Slideshow with Overlays

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 36s · **Format:** mp4 · **Category:** Listings & Classifieds

![Real Estate Slideshow with Overlays preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/real_estate_slideshow_0abf4897b5.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/real-estate-slideshow-sd-overlays-merge-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/real-estate-slideshow-sd-overlays-merge-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
address,suburb,state,postcode,bedrooms,bathrooms,carports,type,image_1,image_2,image_3,image_4,image_5,agent_picture,agent_name,agent_email,agency_logo
```

| Field | Default value |
| --- | --- |
| `ADDRESS` | 192 STOREY STREET |
| `SUBURB` | MAROUBRA |
| `STATE` | NSW |
| `POSTCODE` | 2035 |
| `BEDROOMS` | 4 |
| `BATHROOMS` | 2 |
| `CARPORTS` | 1 |
| `TYPE` | AUCTION |
| `IMAGE_1` | https://templates.shotstack.io/real-estate-slideshow-sd-overlays-merge/a9539f91-6c96-447b-b148-a16488bd0074/realestate1.jpg |
| `IMAGE_2` | https://templates.shotstack.io/real-estate-slideshow-sd-overlays-merge/910e430c-2aec-45a7-a90c-68ed42dc62e0/realestate2.jpg |
| `IMAGE_3` | https://templates.shotstack.io/real-estate-slideshow-sd-overlays-merge/5baf492c-91c6-4fe6-9e7d-bacb86ff3ef9/realestate3.jpg |
| `IMAGE_4` | https://templates.shotstack.io/real-estate-slideshow-sd-overlays-merge/ad162c75-4898-4986-b652-2f167ea17f23/realestate4.jpg |
| `IMAGE_5` | https://templates.shotstack.io/real-estate-slideshow-sd-overlays-merge/6bbdbebd-2b58-4481-8b73-b3b879e058d0/realestate5.jpg |
| `AGENT_PICTURE` | https://templates.shotstack.io/real-estate-slideshow-sd-overlays-merge/7bf0a1b7-29d6-4f9c-b5b3-a2c93530d6a4/real-estate-agent-male.jpg |
| `AGENT_NAME` | JEREMY SIMPSON |
| `AGENT_EMAIL` | jeremy@blockrealestate.co |
| `AGENCY_LOGO` | https://templates.shotstack.io/real-estate-slideshow-sd-overlays-merge/e55784b5-783b-47c6-8db7-5ea4043860f4/real-estate-white.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
