# Social Media Preview Image (OG Image)

## Required Image: og-image.png

**Location:** `/public/og-image.png`

**Specifications:**
- **Dimensions:** 1200 x 630 pixels (required by Open Graph standard)
- **Format:** PNG or JPG
- **File Size:** Keep under 1MB for fast loading
- **Aspect Ratio:** 1.91:1

## Design Recommendations:

1. **Content:**
   - Company logo (IMS Saigon)
   - Tagline: "Transforming Ideas into Scalable Software Solutions"
   - Visual elements representing: AI, Cloud, Data, Software
   - Clean, professional design with brand colors

2. **Colors:**
   - Navy Blue (#1e3a8a) - Primary
   - Sky Blue (#0284c7) - Accent
   - Purple (#8b5cf6) - Highlight
   - White/Light backgrounds for readability

3. **Typography:**
   - Use clear, readable fonts
   - Ensure text is large enough to read in small previews
   - High contrast between text and background

4. **Safe Zones:**
   - Keep important content within central 1200x600px area
   - Avoid placing critical text near edges (social platforms may crop)

5. **Preview Contexts:**
   - Facebook/LinkedIn: Shows full image
   - Twitter: Centers and may crop sides
   - WhatsApp/Slack: Shows smaller preview

## Design Tools:

- **Canva:** https://www.canva.com (free templates available)
- **Figma:** Professional design tool
- **Adobe Photoshop/Illustrator:** Advanced design
- **Online OG Image Generators:** Various free tools available

## Alternative: Use Existing Logo

As a temporary solution, you can use your existing logo file resized to 1200x630px:
- Current logo at `/public/logo_footer.png`
- Resize and center on a branded background
- Add text overlay with company tagline

## Testing:

After creating the image, test how it appears:
1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

## Current Status:

⚠️ **Action Required:** Create and place `og-image.png` in `/public/` directory

The metadata is already configured in the codebase to use this image.
