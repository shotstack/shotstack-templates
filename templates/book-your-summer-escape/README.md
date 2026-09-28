# Escape to Luxury - Book Your Summer Getaway Today!

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 9.5s · **Format:** mp4 · **Category:** E-Commerce

![Escape to Luxury - Book Your Summer Getaway Today! preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Escape_to_Luxury_Book_Your_Summer_Getaway_Today_0bf2e9c0d0.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/book-your-summer-escape/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_production_key node render.mjs templates/book-your-summer-escape
```

One video is rendered per `data.csv` row ([get a key](https://dashboard.shotstack.io/register)). For free
watermarked test renders, use a sandbox key and switch `render.mjs` from `/v1/` to `/stage/`.

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
s1_image_src,s1_title,s1_description,s1_icon_1,s1_icon_2,text_font_color,s2_image_src,s2_title,s2_description_1,s2_description_2,s2_description_3,s2_icon_1,s2_icon_2,s3_image_src,s3_icon,s3_website,s3_phonenumber,s3_5letterword_1,s3_5letterword_2,s3_10letterword_3,s3_description,text_font_color_2
```

| Field | Default value |
| --- | --- |
| `S1_IMAGE_SRC` | https://templates.shotstack.io/book-your-summer-escape/b1934d63-73f6-4a83-a9ae-f0b203456e96/source.jpg |
| `S1_TITLE` | Book Your Summer Escape |
| `S1_DESCRIPTION` | Indulge in opulence and serenity with our top-notch amenities. |
| `S1_ICON_1` | https://templates.shotstack.io/book-your-summer-escape/530022b5-39bb-4ae3-87cb-b1a88e2d63f4/source.png |
| `S1_ICON_2` | https://templates.shotstack.io/book-your-summer-escape/5f8b39cc-5092-4252-931a-30e1d1f6418d/source.png |
| `TEXT_FONT_COLOR` | #ffffff |
| `S2_IMAGE_SRC` | https://templates.shotstack.io/book-your-summer-escape/f7f2eaae-0d38-4b04-a2cf-d4aa421b55f3/source.jpg |
| `S2_TITLE` | Exclusive Villa Features |
| `S2_DESCRIPTION_1` | Spacious Living Areas |
| `S2_DESCRIPTION_2` | Outdoor Spaces and Pool |
| `S2_DESCRIPTION_3` | Fully Equipped Kitchen |
| `S2_ICON_1` | https://templates.shotstack.io/book-your-summer-escape/e4411548-569f-4f17-a063-cd1f8d6f1107/source.png |
| `S2_ICON_2` | https://templates.shotstack.io/book-your-summer-escape/43b17530-69dd-4ca0-9e07-187acf905c95/source.png |
| `S3_IMAGE_SRC` | https://templates.shotstack.io/book-your-summer-escape/fa552409-9a79-4011-be2c-e20c19525b49/source.jpg |
| `S3_ICON` | https://templates.shotstack.io/book-your-summer-escape/005157df-0765-499a-a943-d1a3e62019da/source.png |
| `S3_WEBSITE` | reallygreatsite.com |
| `S3_PHONENUMBER` | +123-456-7890 |
| `S3_5LETTERWORD_1` | Early |
| `S3_5LETTERWORD_2` | Bird |
| `S3_10LETTERWORD_3` | Discount! |
| `S3_DESCRIPTION` | Book for 3 nights and save |
| `TEXT_FONT_COLOR_2` | #d3f2f3 |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
