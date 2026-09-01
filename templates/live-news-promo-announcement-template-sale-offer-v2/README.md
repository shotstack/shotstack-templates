# Live News Promotional Announcement Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 24s · **Format:** mp4 · **Category:** News

![Live News Promotional Announcement Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Live_News_Promotional_Announcement_Template_7876508536.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/live-news-promo-announcement-template-sale-offer-v2/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/live-news-promo-announcement-template-sale-offer-v2
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_title,s1_description,black_font_color,website,white_font_color_2,element_color,s2_title,s2_description,s2_image_src,cta,social_media,audio_src
```

| Field | Default value |
| --- | --- |
| `S1_TITLE` | Live |
| `S1_DESCRIPTION` | News |
| `Black_FONT_COLOR` | #000000 |
| `WEBSITE` | www.websitenews.com |
| `White_FONT_COLOR_2` | #ffffff |
| `Element_COLOR` | #33ccd7 |
| `S2_TITLE` | Smart Farming Boosts Yields |
| `S2_DESCRIPTION` | Farmers in northern Nigeria now use smart tools like drones and weather apps to boost crop yields. Musa Danjuma saw a 30% increase in maize. The government aims to support 50,000 farmers by 2025. Experts say smart farming helps tackle climate change and improve food security. |
| `S2_IMAGE_SRC` | https://templates.shotstack.io/live-news-promo-announcement-template-sale-offer/0aba031e-de90-4467-932f-acb184e24d74/source.jpg |
| `CTA` | Be informed subscribe today |
| `SOCIAL_MEDIA` | @websitenews |
| `AUDIO_SRC` | https://templates.shotstack.io/live-news-promo-announcement-template-sale-offer/10dc2f53-701c-46ed-8c33-09b041f49275/shotstack-proxy.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
