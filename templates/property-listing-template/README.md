# Property Listing Template - Make Your Real Estate Stand Out

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 10s · **Format:** mp4 · **Category:** Listings & Classifieds

![Property Listing Template - Make Your Real Estate Stand Out preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Property_Listing_Template_Make_Your_Real_Estate_Stand_Out_801c72a4ac.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/property-listing-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/property-listing-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
status,address,amount,bedrooms,bathroom,square_feet,logo_image_src,logo_image_src_2,realtor,dre,phone,email,website,namename,text_font_color,text_background_color,image_src,image_src_2,image_src_3,image_src_4
```

| Field | Default value |
| --- | --- |
| `STATUS` | JUST LISTED |
| `ADDRESS` | 123 Main street, city, state, Zip Code |
| `AMOUNT` | $000,000 |
| `BEDROOMS` | 3 |
| `BATHROOM` | 2 |
| `SQUARE_FEET` | 0000 |
| `lOGO_IMAGE_SRC` | https://templates.shotstack.io/property-listing-template/742fea65-b1aa-4717-9cac-cc5c27cefa61/shotstack-proxy.webp |
| `lOGO_IMAGE_SRC_2` | https://templates.shotstack.io/property-listing-template/d8b45227-e2b2-4d84-abdf-8980e685b39f/shotstack-proxy.webp |
| `REALTOR` | REALTOR@, Broker-Associate |
| `DRE` | DRE#0123456 |
| `PHONE` | Direct 889,322,1234 |
| `EMAIL` | Leo@LeoKensingtoncom |
| `WEBSITE` | www.LeoKensingtonrealestate.com |
| `nAMENAME` | Leo Kensington |
| `TEXT_FONT_COLOR` | #ffffff |
| `TEXT_BACKGROUND_COLOR` | #98795d |
| `IMAGE_SRC` | https://templates.shotstack.io/property-listing-template/fe010177-c0d8-43e4-81f1-3b10a067f6bd/shotstack-proxy.webp |
| `IMAGE_SRC_2` | https://templates.shotstack.io/property-listing-template/2e0a9ada-6329-4431-b788-ed5aba2a3faf/shotstack-proxy.webp |
| `IMAGE_SRC_3` | https://templates.shotstack.io/property-listing-template/8091eb47-401a-4743-a50a-77bd6837e761/shotstack-proxy.webp |
| `IMAGE_SRC_4` | https://templates.shotstack.io/property-listing-template/dcce1efa-851d-4352-af1d-2e20e12d4937/shotstack-proxy.webp |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
