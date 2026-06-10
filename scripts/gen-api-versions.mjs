// Generates apis/versions.json — the ordered list of public OpenAPI specs that
// zudoku.config.tsx feeds to the API reference. Runs before every dev/build (and
// in the api repo's sync-docs workflow) so a newly synced openapi.v<N>.json shows
// up in the version switcher automatically. The config can't read the filesystem
// itself: Zudoku bundles it for the browser too, where node:fs isn't available —
// so we precompute the list here and import it as plain JSON.
import { readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const apisDir = join(dirname(fileURLToPath(import.meta.url)), "..", "apis");

const inputs = readdirSync(apisDir)
  .map((file) => ({ file, match: /^openapi\.v(\d+)\.json$/.exec(file) }))
  .filter((entry) => entry.match !== null)
  .map((entry) => ({ n: Number(entry.match[1]), file: entry.file }))
  .sort((a, b) => b.n - a.n) // newest first → Zudoku treats input[0] as default
  .map(({ file }) => `./apis/${file}`);

if (inputs.length === 0) {
  throw new Error("No apis/openapi.v<N>.json specs found — is the sync pipeline wired up?");
}

writeFileSync(join(apisDir, "versions.json"), JSON.stringify(inputs, null, 2) + "\n");
console.log(`wrote apis/versions.json (${inputs.join(", ")})`);
