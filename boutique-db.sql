-- Run in Cloudflare D1 SQL console, bind database to Pages as BOUTIQUE_DB.
CREATE TABLE IF NOT EXISTS boutique_leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL,
  email TEXT NOT NULL,
  size TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL,
  UNIQUE(product_id,email)
);
CREATE TABLE IF NOT EXISTS boutique_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL,
  event TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS boutique_events_by_product ON boutique_events(product_id,event);
-- SELECT product_id, event, COUNT(*) FROM boutique_events GROUP BY product_id,event;
-- SELECT product_id, COUNT(*) AS interested FROM boutique_leads GROUP BY product_id ORDER BY interested DESC;
