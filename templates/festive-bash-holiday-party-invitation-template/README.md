# Festive Bash Holiday Party Invitation Template

A video template for the Shotstack Edit API.

**Type:** Video · **Aspect:** 9:16 · **Duration:** 8s · **Format:** mp4 · **Category:** Celebrations

![Festive Bash Holiday Party Invitation Template preview](https://d2jn8jtjz02j0j.cloudfront.net/images/origin/Festive_Bash_Holiday_Party_Invitation_Template_3b586e6581.png)

[**Preview and customise this template on shotstack.io →**](https://shotstack.io/studio/templates/festive-bash-holiday-party-invitation-template/)

## Render a batch from the command line

`template.json` is the full [Shotstack Edit API](https://shotstack.io/docs/api/) payload. From the repo root:

```sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/festive-bash-holiday-party-invitation-template
```

One video is rendered per `data.csv` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

`data.csv` header row:

```
title_1,title_2,subtitle,date,image,element_1,element_2,font_color,background_color,background_image
```

| Field | Default value |
| --- | --- |
| `Title_1` | Festive |
| `Title_2` | Bash |
| `Subtitle` | The season’s cheer awaits! Let’s party the holiday way. |
| `Date` | 8 pm \| 24th Dec. |
| `IMAGE` | https://templates.shotstack.io/festive-bash-holiday-party-invitation-template/0b9fc8dc-93b2-4843-b9cc-429d8c648482/source.jpg |
| `Element_1` | https://templates.shotstack.io/festive-bash-holiday-party-invitation-template/c8b5cc1c-2588-4394-8733-4232c8bd61d2/source.png |
| `Element_2` | https://templates.shotstack.io/festive-bash-holiday-party-invitation-template/f9a84711-9a7b-4991-808d-458fb9b3de38/source.png |
| `FONT_COLOR` | #38932f |
| `BACKGROUND_COLOR` | #ece4bd |
| `BACKGROUND_IMAGE` | https://templates.shotstack.io/festive-bash-holiday-party-invitation-template/22ae1da1-2f21-452e-b840-7f330edb9c07/source.jpg |

---

Also works with the [Shotstack MCP server](https://shotstack.io/docs/guide/agents/mcp-server/): give your AI assistant this folder's `template.json` and ask it to adapt the template to your data.
