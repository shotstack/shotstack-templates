# AI Video - Real Estate Slideshow

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 20s · **Format:** mp4 · **Category:** Listings & Classifieds

![AI Video - Real Estate Slideshow preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/3a911705_b2d0_4546_93bf_9be89da958c6_6ca5ec2a7e.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/ai-video-real-estate-slideshow/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/ai-video-real-estate-slideshow
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
| `IMAGE_1` | https://templates.shotstack.io/ai-video-real-estate-slideshow/38b34c9c-6d55-4b00-8bb0-7b3a0adb19b5/realestate1.jpg |
| `IMAGE_2` | https://templates.shotstack.io/ai-video-real-estate-slideshow/d1af5fe7-7d68-4898-8fa7-eec49373911c/realestate2.jpg |
| `IMAGE_3` | https://templates.shotstack.io/ai-video-real-estate-slideshow/1368c10f-fcbc-49cb-9221-a2be52668543/realestate3.jpg |
| `IMAGE_4` | https://templates.shotstack.io/ai-video-real-estate-slideshow/97ed6ce6-f35f-4635-94bc-78e976e5c494/realestate4.jpg |
| `IMAGE_5` | https://templates.shotstack.io/ai-video-real-estate-slideshow/550f4150-f91f-4c71-90d8-6b45866fd9c7/realestate5.jpg |
| `AGENT_PICTURE` | https://templates.shotstack.io/ai-video-real-estate-slideshow/21912869-c986-4338-9a72-df1b04c12163/real-estate-agent-male.jpg |
| `AGENT_NAME` | JEREMY SIMPSON |
| `AGENT_EMAIL` | jeremy@blockrealestate.co |
| `AGENCY_LOGO` | https://templates.shotstack.io/ai-video-real-estate-slideshow/6e039462-2bdb-4b7a-930f-ad7070db497a/real-estate-white.png |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
