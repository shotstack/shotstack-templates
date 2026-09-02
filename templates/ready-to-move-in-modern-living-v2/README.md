# Ready to Move-In Modern Living

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Ready to Move-In Modern Living preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Ready_to_Move_In_Modern_Living_206a0a41b5.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/ready-to-move-in-modern-living-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/ready-to-move-in-modern-living-v2
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title,agent_name,phone,website,email,address,dark_brown_color,brown_color,light_brown_color_3,white_color,logo,video_src,image_src,image_src_2,image_src_3,image_src_4,image_src_5,audio_src
```

| Field | Default value |
| --- | --- |
| `TITLE` | READY FOR OCCUPANCY |
| `AGENT_NAME` | Anna Gleane |
| `PHONE` | +123-456-7890 |
| `WEBSITE` | realestate.com |
| `EMAIL` | Hello@realestate.com |
| `ADDRESS` | 123 Anywhere St., Any City |
| `DARK_BROWN_COLOR` | #6a3910 |
| `BROWN_COLOR` | #eaceae |
| `LIGHT_BROWN_COLOR_3` | #fff5eb |
| `WHITE_COLOR` | #ffffff |
| `LOGO` | https://templates.shotstack.io/ready-to-move-in-modern-living/4b31140f-bb8e-4ee5-962b-82641551d8fa/shotstack-proxy.webp |
| `VIDEO_SRC` | https://templates.shotstack.io/ready-to-move-in-modern-living/5d92fbdb-0412-45ad-bdeb-4691a6ddc744/source.mp4 |
| `IMAGE_SRC` | https://templates.shotstack.io/ready-to-move-in-modern-living/ae985798-ada1-4e84-802a-b5de30412a9b/source.jpg |
| `IMAGE_SRC_2` | https://templates.shotstack.io/ready-to-move-in-modern-living/93e6e055-9be8-47b6-b8fd-65485aef0285/source.jpg |
| `IMAGE_SRC_3` | https://templates.shotstack.io/ready-to-move-in-modern-living/cbac5533-ccd7-4d4d-a409-9e2f04929768/source.jpg |
| `IMAGE_SRC_4` | https://templates.shotstack.io/ready-to-move-in-modern-living/7d6b9192-c961-43b7-8fc2-5c19eecf22e8/source.jpg |
| `IMAGE_SRC_5` | https://templates.shotstack.io/ready-to-move-in-modern-living/5e2afefa-e19f-4650-8bf3-6f8fcab6ce47/source.jpg |
| `AUDIO_SRC` | https://templates.shotstack.io/ready-to-move-in-modern-living/135ac99e-3402-4912-a361-66cbe12bd83a/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
