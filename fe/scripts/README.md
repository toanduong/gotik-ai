# 📝 Translation Management Scripts

Các script hỗ trợ quản lý và chỉnh sửa translations dễ dàng.

## 🚀 Scripts Có Sẵn

### 1. **view-translations.js** - Xem Tất Cả Translations

Hiển thị cấu trúc translations và tìm kiếm keys.

**Cú pháp:**
```bash
node scripts/view-translations.js [search-term] [--lang=vi|en]
```

**Ví dụ:**
```bash
# Xem tất cả translations tiếng Việt
node scripts/view-translations.js --lang=vi

# Xem tất cả translations tiếng Anh
node scripts/view-translations.js --lang=en

# Tìm tất cả keys có chứa "hero"
node scripts/view-translations.js hero

# Tìm keys trong pages
node scripts/view-translations.js pages --lang=vi
```

**Output mẫu:**
```
🌐 Translation Viewer - VI
📋 Hiển thị tất cả
================================================================================

📁 navigation/
  📝 services: "DỊCH VỤ"
     🔑 navigation.services
  📝 blog: "BLOG"
     🔑 navigation.blog

📁 pages/
  📁 softwareEngineer/
    📁 hero/
      📝 title: "Chuyển Đổi Ý Tưởng Của Bạn Thành"
         🔑 pages.softwareEngineer.hero.title
```

---

### 2. **edit-translation.js** - Chỉnh Sửa Nhanh

Cập nhật giá trị translation mà không cần mở file JSON.

**Cú pháp:**
```bash
node scripts/edit-translation.js "<key-path>" "<new-value>" [--lang=vi|en]
```

**Ví dụ:**
```bash
# Sửa tiêu đề hero của trang Software Engineer
node scripts/edit-translation.js "pages.softwareEngineer.hero.title" "Tiêu đề mới" --lang=vi

# Sửa navigation
node scripts/edit-translation.js "navigation.services" "Các Dịch Vụ" --lang=vi

# Sửa tiếng Anh
node scripts/edit-translation.js "pages.softwareEngineer.hero.title" "New Title" --lang=en
```

**Output mẫu:**
```
✅ Đã cập nhật thành công!

📍 File: messages/vi.json
🔑 Key: pages.softwareEngineer.hero.title
📝 Giá trị cũ: "Chuyển Đổi Ý Tưởng Của Bạn Thành"
✨ Giá trị mới: "Tiêu đề mới"
```

---

## 📖 Quy Trình Làm Việc Đề Xuất

### Khi Muốn Thay Đổi Nội Dung:

**1. Tìm key cần sửa:**
```bash
node scripts/view-translations.js "hero" --lang=vi
```

**2. Sửa nội dung:**
```bash
node scripts/edit-translation.js "pages.softwareEngineer.hero.title" "Nội dung mới" --lang=vi
```

**3. Kiểm tra kết quả:**
- Mở http://localhost:3000
- Chuyển đổi ngôn ngữ để kiểm tra

---

## 🎯 Best Practices

### ✅ NÊN:
- Sử dụng scripts để chỉnh sửa translations
- Luôn cập nhật CẢ tiếng Việt VÀ tiếng Anh
- Kiểm tra cả 2 ngôn ngữ sau khi sửa
- Sử dụng keys có ý nghĩa rõ ràng

### ❌ KHÔNG NÊN:
- Sửa trực tiếp trong component `.tsx`
- Chỉ sửa 1 ngôn ngữ và quên ngôn ngữ kia
- Sửa trực tiếp file JSON bằng editor (dễ lỗi format)

---

## 🔧 Cấu Trúc Keys Hiện Tại

```
{
  "navigation": {          // Navbar menu items
    "services": "...",
    "blog": "...",
    ...
  },
  "footer": { ... },       // Footer content
  "solutions": { ... },    // Solutions section (landing page)
  "academy": { ... },      // Academy section
  "about": { ... },        // About/Our Story section
  "process": { ... },      // Process section
  "testimonials": { ... }, // Testimonials section

  "pages": {               // Individual service pages
    "softwareEngineer": {
      "hero": { ... },
      "benefits": { ... },
      "services": { ... },
      ...
    },
    "odoo": { ... },
    "salesforce": { ... },
    ...
  }
}
```

---

## 💡 Tips

1. **Tìm key nhanh:**
   ```bash
   node scripts/view-translations.js "từ khóa cần tìm"
   ```

2. **Backup trước khi sửa nhiều:**
   ```bash
   cp fe/messages/vi.json fe/messages/vi.json.backup
   ```

3. **Xem thay đổi với git:**
   ```bash
   git diff fe/messages/vi.json
   ```

4. **Format lại JSON nếu bị lỗi:**
   ```bash
   # Sử dụng online tool: jsonformatter.org
   # Hoặc VSCode: Ctrl+Shift+P > Format Document
   ```

---

## 🆘 Troubleshooting

**Lỗi: "Không tìm thấy key"**
- Kiểm tra lại key path với `view-translations.js`
- Đảm bảo sử dụng dấu chấm `.` để phân cách

**Lỗi: JSON parse error**
- File JSON bị sai format
- Restore từ backup hoặc git

**Thay đổi không hiển thị**
- Clear browser cache
- Restart dev server
- Kiểm tra đúng ngôn ngữ (EN/VI)
