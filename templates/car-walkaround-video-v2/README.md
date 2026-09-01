# Luxury Car Walk Around

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 13s · **Format:** mp4 · **Category:** Listings & Classifieds

![Luxury Car Walk Around preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/car_walkaround_video_cfa2eaa7d3.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/car-walkaround-video-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/car-walkaround-video-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
video_1,video_2,video_3,make,model,year,specs,odometer,contact
```

| Field | Default value |
| --- | --- |
| `VIDEO_1` | https://templates.shotstack.io/car-walkaround-video/4a3d3300-978e-4866-8731-b0d599750804/zzy8fyga-3vug-j70r-d9dq-1mcafm4ja3gw.mp4 |
| `VIDEO_2` | https://templates.shotstack.io/car-walkaround-video/82a75800-8e89-4af2-a69f-26508b987521/zzy8fyer-2ol4-r14y-l7mh-1zwhyh1oz99v.mp4 |
| `VIDEO_3` | https://templates.shotstack.io/car-walkaround-video/5ce03652-08cc-410d-a8d2-cf5ecf966ec3/zzy8fyca-45mv-6t3s-97kd-1lkwn54l381c.mp4 |
| `MAKE` | Lamborghini |
| `MODEL` | Huracan EVO Auto AWD |
| `YEAR` | 2023 |
| `SPECS` | 10CYL 5.2L PETROL |
| `ODOMETER` | 17,100 |
| `CONTACT` | DEAN @ 703-438-5736 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
