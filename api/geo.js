// Returns the visitor's country from Vercel's geo-IP edge header, so the
// download page can auto-pick its language: Danish for Denmark, English
// everywhere else. Vercel injects x-vercel-ip-country on every request (all
// plans); nothing is stored and no third-party service is contacted.
module.exports = (req, res) => {
  const country = (req.headers["x-vercel-ip-country"] || "").toUpperCase();
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ country });
};
