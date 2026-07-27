# Portfolio Dashboard — Shared Releases

Data-free build of Portfolio Dashboard, ready to run — no personal data, no source code, just the release assets.

## Download

[⬇️ Download the latest version](https://github.com/PortfolioLabAI/portfolio-dashboard-shared/releases/latest)

Look for the `.dmg` file under "Assets" on that page.

## Installing on macOS

Since **v0.3.0** the app is signed with an Apple Developer ID and notarised by Apple, so it opens without being blocked. No Terminal commands, no trip through System Settings.

1. Open the `.dmg` and drag the app to Applications.
2. Open the app. That's it.

The first time, macOS may ask whether you're sure you want to open an app downloaded from the internet — click **Open**. That's the ordinary prompt every downloaded app gets, not a block.

<details>
<summary>Using a build older than v0.3.0?</summary>

Releases before v0.3.0 were ad-hoc signed, so macOS blocked them on first launch — usually as *"[App name] is damaged and can't be opened."* Despite the wording the file wasn't corrupted; it was Gatekeeper reacting to the quarantine flag on an unsigned app.

You don't need to work around that any more — **download v0.3.0 or later instead**, or let an existing install auto-update. Updates are delivered by the app itself and were never affected by this.

</details>

## Updates

The app checks for new versions on launch and prompts you to install when one's available.
