#!/usr/bin/env node

/**
 * Translation Editor Helper
 *
 * Cách sử dụng:
 * node scripts/edit-translation.js <key> <new-value> [--lang=en]
 *
 * Ví dụ:
 * node scripts/edit-translation.js "pages.softwareEngineer.hero.title" "New title" --lang=en
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const keyPath = args[0];
const newValue = args[1];
const lang = args.find(arg => arg.startsWith('--lang='))?.split('=')[1] || 'en';

if (!keyPath || !newValue) {
  console.log(`
📝 Translation Editor

Cách sử dụng:
  node scripts/edit-translation.js <key-path> <new-value> [--lang=en]

Ví dụ:
  node scripts/edit-translation.js "pages.softwareEngineer.hero.title" "New title" --lang=en
  node scripts/edit-translation.js "navigation.services" "Services" --lang=en

Key paths có sẵn:
  - navigation.*
  - solutions.*
  - academy.*
  - about.*
  - pages.softwareEngineer.*
  - pages.odoo.*
  `);
  process.exit(1);
}

const filePath = path.join(__dirname, '..', 'messages', `${lang}.json`);

try {
  // Đọc file JSON
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Tách key path
  const keys = keyPath.split('.');

  // Tìm và cập nhật giá trị
  let current = data;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      console.error(`❌ Không tìm thấy key: ${keys.slice(0, i + 1).join('.')}`);
      process.exit(1);
    }
    current = current[keys[i]];
  }

  const lastKey = keys[keys.length - 1];
  const oldValue = current[lastKey];

  if (oldValue === undefined) {
    console.error(`❌ Không tìm thấy key: ${keyPath}`);
    process.exit(1);
  }

  current[lastKey] = newValue;

  // Ghi lại file với format đẹp
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

  console.log(`✅ Đã cập nhật thành công!

📍 File: messages/${lang}.json
🔑 Key: ${keyPath}
📝 Giá trị cũ: "${oldValue}"
✨ Giá trị mới: "${newValue}"
  `);

} catch (error) {
  console.error(`❌ Lỗi: ${error.message}`);
  process.exit(1);
}
