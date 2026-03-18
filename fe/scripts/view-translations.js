#!/usr/bin/env node

/**
 * Translation Viewer
 *
 * Hiển thị tất cả translations có sẵn
 *
 * Cách sử dụng:
 * node scripts/view-translations.js [search-term] [--lang=en]
 *
 * Ví dụ:
 * node scripts/view-translations.js                    # Hiển thị tất cả
 * node scripts/view-translations.js "hero"             # Tìm keys có chứa "hero"
 * node scripts/view-translations.js "pages" --lang=en  # Xem translations tiếng Anh
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const searchTerm = args.find(arg => !arg.startsWith('--')) || '';
const lang = args.find(arg => arg.startsWith('--lang='))?.split('=')[1] || 'en';

const filePath = path.join(__dirname, '..', 'messages', `${lang}.json`);

// Hàm đệ quy để hiển thị tất cả keys
function displayKeys(obj, prefix = '', level = 0) {
  const indent = '  '.repeat(level);

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && !Array.isArray(value)) {
      // Nếu là object, tiếp tục đệ quy
      if (!searchTerm || fullKey.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log(`${indent}📁 ${key}/`);
      }
      displayKeys(value, fullKey, level + 1);
    } else {
      // Nếu là giá trị cuối cùng
      if (!searchTerm || fullKey.toLowerCase().includes(searchTerm.toLowerCase())) {
        const displayValue = typeof value === 'string'
          ? (value.length > 60 ? value.substring(0, 60) + '...' : value)
          : JSON.stringify(value);
        console.log(`${indent}📝 ${key}: "${displayValue}"`);
        console.log(`${indent}   🔑 ${fullKey}`);
      }
    }
  }
}

try {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  console.log(`
🌐 Translation Viewer - ${lang.toUpperCase()}
${searchTerm ? `🔍 Tìm kiếm: "${searchTerm}"` : '📋 Hiển thị tất cả'}
${'='.repeat(80)}
`);

  displayKeys(data);

  console.log(`
${'='.repeat(80)}
💡 Tip: Sử dụng script edit-translation.js để chỉnh sửa
   node scripts/edit-translation.js "<key>" "<new-value>" --lang=${lang}
  `);

} catch (error) {
  console.error(`❌ Lỗi: ${error.message}`);
  process.exit(1);
}
