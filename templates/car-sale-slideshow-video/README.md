# Car Dealership Slideshow

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 16:9 · **Duration:** 36s · **Format:** mp4 · **Category:** Listings & Classifieds

![Car Dealership Slideshow preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/car_sale_slideshow_0fb673a783.jpg)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/car-sale-slideshow-video/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/car-sale-slideshow-video
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
year,make,model,seller,type,state,postcode,image_1,image_2,image_3,image_4,image_5,image_6,image_7,odometer,spec,interior,upgrades,price
```

| Field | Default value |
| --- | --- |
| `YEAR` | 2021 |
| `MAKE` | MERCEDES-BENZ |
| `MODEL` | A-CLASS A-180 AUTO |
| `SELLER` | DEALER |
| `TYPE` | USED |
| `STATE` | QUEENSLAND |
| `POSTCODE` | 4029 |
| `IMAGE_1` | https://templates.shotstack.io/car-sale-slideshow-video/27efb285-a3b2-47e6-8440-574a6b660183/pexels-photo-9513395.jpg |
| `IMAGE_2` | https://templates.shotstack.io/car-sale-slideshow-video/ec960f5b-85be-453e-a951-e1469da2dd6a/source.jpg |
| `IMAGE_3` | https://templates.shotstack.io/car-sale-slideshow-video/96fd90d8-c88b-482c-a539-e375314c564b/source.jpg |
| `IMAGE_4` | https://templates.shotstack.io/car-sale-slideshow-video/cda2590c-1033-430a-bd0f-ca28506f99c8/source.jpg |
| `IMAGE_5` | https://templates.shotstack.io/car-sale-slideshow-video/6726f69d-af0f-4701-b5f9-98594f9ccfad/source.jpg |
| `IMAGE_6` | https://templates.shotstack.io/car-sale-slideshow-video/a25bb50a-8813-4514-9913-3e323cd7cf8c/source.jpg |
| `IMAGE_7` | https://templates.shotstack.io/car-sale-slideshow-video/e574b011-2c53-47df-acfe-e0759840a106/source.jpg |
| `ODOMETER` | 48,364 |
| `SPEC` | 4CYL 2.0L TURBO DIESEL |
| `INTERIOR` | White Nappa leather, front heated seats, 4 door, 5 seats. |
| `UPGRADES` | Harmon Kardon sound system, Keyless Go, 360 surround view camera, rain sensing wipers. |
| `PRICE` | $46,990 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
