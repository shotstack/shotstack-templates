# Bold Business Promotion & Webinar Announcement

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 1:1 · **Duration:** 10s · **Format:** mp4 · **Category:** E-Commerce

![Bold Business Promotion & Webinar Announcement preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Bold_Business_Promotion_and_Webinar_Announcement_4385148280.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/bold-business-promotion-event-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/bold-business-promotion-event-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
company,s1_title,s1_title_2,s1_title_3,date,s1_description,cta,phone,website,image_src,element_color,text_font_color,background_color,audio_src
```

| Field | Default value |
| --- | --- |
| `COMPANY` | name Company |
| `S1_TITLE` | DIGITAL |
| `S1_TITLE_2` | BUSINESS |
| `S1_TITLE_3` | WEBINAR |
| `DATE` | 20 JUNE 2025 |
| `S1_DESCRIPTION` | Mastering digital strategies for greater success |
| `CTA` | REGISTER NOW |
| `PHONE` | 123-456-7890 |
| `WEBSITE` | workshop.com |
| `IMAGE_SRC` | https://templates.shotstack.io/bold-business-promotion-event-template/60ba1ba7-20e1-46b8-a096-75a997bcb81a/source.png |
| `ELEMENT_COLOR` | #ff9500 |
| `TEXT_FONT_COLOR` | #ffffff |
| `BACKGROUND_COLOR` | #4320a2 |
| `AUDIO_SRC` | https://templates.shotstack.io/bold-business-promotion-event-template/423bdd44-7848-4b60-97af-d1edf33b8e85/source.mp3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
