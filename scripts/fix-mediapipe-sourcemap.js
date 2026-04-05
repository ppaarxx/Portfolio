const fs = require("fs");
const path = require("path");

const packageDir = path.join(
  __dirname,
  "..",
  "node_modules",
  "@mediapipe",
  "tasks-vision"
);
const sourceMapPath = path.join(packageDir, "vision_bundle.mjs.map");
const aliasMapPath = path.join(packageDir, "vision_bundle_mjs.js.map");

try {
  if (!fs.existsSync(packageDir)) {
    process.exit(0);
  }

  if (!fs.existsSync(sourceMapPath) || fs.existsSync(aliasMapPath)) {
    process.exit(0);
  }

  fs.copyFileSync(sourceMapPath, aliasMapPath);
} catch (error) {
  console.error("Failed to apply MediaPipe sourcemap fix.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
