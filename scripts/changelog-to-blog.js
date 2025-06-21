const fs = require('fs');
const path = require('path');

const changelogPath = path.resolve(__dirname, '../CHANGELOG.md');
const blogDir = path.resolve(__dirname, '../website/blog');

if (!fs.existsSync(changelogPath)) {
  console.error('CHANGELOG.md not found');
  process.exit(1);
}

const changelog = fs.readFileSync(changelogPath, 'utf-8');
const match = changelog.match(
  /^##? \[?([0-9]+\.[0-9]+\.[0-9]+)]? - (\d{4}-\d{2}-\d{2})\n([\s\S]*?)(?=^##? |\n*$)/m
);

if (!match) {
  console.error('No release entry found in CHANGELOG.md');
  process.exit(1);
}

const [, version, date, body] = match;
const filename = `${date}-changelog-v${version}.md`;
const filePath = path.join(blogDir, filename);

if (fs.existsSync(filePath)) {
  console.log('Blog post for this release already exists.');
  process.exit(0);
}

const content = `---\ntitle: v${version} 릴리즈 노트\ndate: ${date}\n---\n\n${body.trim()}\n`;

fs.writeFileSync(filePath, content);
console.log(`Created blog post: ${filePath}`);
