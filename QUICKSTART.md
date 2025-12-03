# Quick Start Guide: Linking Your Domain

## 🎉 Your Website is Ready!

Your Unified Innovations Group banking demo website is fully configured and ready to go live. Here's what you need to do to make it accessible at **unifiedinnovationsgroup.online**.

## ⚡ Quick 3-Step Process

### Step 1: Configure DNS at GoDaddy (10 minutes)

1. Go to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns)
2. Select your domain: `unifiedinnovationsgroup.online`
3. Click "Add" to create new records
4. Add these **4 A Records**:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 185.199.108.153 | 600 |
   | A | @ | 185.199.109.153 | 600 |
   | A | @ | 185.199.110.153 | 600 |
   | A | @ | 185.199.111.153 | 600 |

5. **Optional**: Add a CNAME record for www subdomain:
   
   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | CNAME | www | boogytheugli35t.github.io | 600 |

6. **Important**: Delete any existing A or CNAME records that conflict with these

### Step 2: Enable Custom Domain on GitHub (5 minutes)

1. Go to: https://github.com/BoogyTheUgli35t/BoogyTheUgli35t.github.io/settings/pages
2. Scroll to "Custom domain" section
3. Enter: `unifiedinnovationsgroup.online`
4. Click **Save**
5. GitHub will verify the DNS configuration (may take a few minutes)

### Step 3: Wait and Enable HTTPS (1-2 hours)

1. Wait 15-60 minutes for DNS to propagate globally
2. Check if your site is live at: http://unifiedinnovationsgroup.online
3. Once DNS is verified, return to GitHub Pages settings
4. Check the box: **☑ Enforce HTTPS**
5. Your site will now be secure at: https://unifiedinnovationsgroup.online

## ✅ That's It!

Your website will be live at:
- **https://unifiedinnovationsgroup.online** (main domain)
- **https://www.unifiedinnovationsgroup.online** (www subdomain, if configured)

## 🔍 Troubleshooting

**DNS not working?**
- Wait longer (DNS can take up to 24-48 hours in rare cases)
- Check propagation at: https://www.whatsmydns.net/#A/unifiedinnovationsgroup.online

**GitHub says "Domain is improperly configured"?**
- Double-check your A records match exactly
- Make sure you removed any conflicting records at GoDaddy
- Wait for DNS propagation

**Need more help?**
- See the detailed [DEPLOYMENT.md](DEPLOYMENT.md) guide
- Check [GitHub Pages Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 📱 What You'll Get

A fully functional banking demo website with:
- ✅ Modern, responsive design
- ✅ Multiple banking features (accounts, transfers, crypto, etc.)
- ✅ Demo credentials for testing
- ✅ Secure HTTPS connection
- ✅ Professional business presence online

## 🚀 Go Live Now!

Start with Step 1 above and you'll be live in about 2 hours!
