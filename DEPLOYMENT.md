# Deployment Guide: Linking Your GoDaddy Domain to GitHub Pages

This guide will help you connect your GoDaddy domain `unifiedinnovationsgroup.online` to your GitHub Pages website.

## Prerequisites

- GitHub Pages is enabled for this repository (`BoogyTheUgli35t.github.io`)
- You own the domain `unifiedinnovationsgroup.online` on GoDaddy
- The CNAME file in this repository contains your domain name

## Step 1: Configure DNS Records at GoDaddy

1. **Log in to your GoDaddy account**
   - Go to https://www.godaddy.com
   - Sign in with your credentials

2. **Navigate to DNS Management**
   - Click on your account name (top right)
   - Select "My Products"
   - Find `unifiedinnovationsgroup.online` and click "DNS" or "Manage DNS"

3. **Add/Update DNS Records**

   You need to configure the following DNS records:

   ### Option A: Using A Records (Recommended for apex domain)
   
   Add these four A records pointing to GitHub's servers:
   
   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 185.199.108.153 | 600 seconds |
   | A | @ | 185.199.109.153 | 600 seconds |
   | A | @ | 185.199.110.153 | 600 seconds |
   | A | @ | 185.199.111.153 | 600 seconds |

   ### Option B: Using CNAME for www subdomain
   
   If you want `www.unifiedinnovationsgroup.online` to also work:
   
   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | CNAME | www | boogytheugli35t.github.io | 600 seconds |

   **Important Notes:**
   - Delete any conflicting A or CNAME records for `@` or `www`
   - GoDaddy may have default parking records - remove those
   - TTL (Time To Live) of 600 seconds (10 minutes) is recommended

## Step 2: Enable GitHub Pages with Custom Domain

1. **Go to your GitHub repository**
   - Navigate to: https://github.com/BoogyTheUgli35t/BoogyTheUgli35t.github.io

2. **Configure Pages Settings**
   - Click on "Settings" tab
   - Scroll down to "Pages" section (left sidebar under "Code and automation")
   - Under "Custom domain", enter: `unifiedinnovationsgroup.online`
   - Click "Save"
   
3. **Enable HTTPS (Recommended)**
   - After DNS propagates (15-60 minutes), check the box:
   - ☑ "Enforce HTTPS"
   - This provides a secure SSL certificate for your domain

## Step 3: Verify DNS Configuration

After configuring DNS records, wait 15-60 minutes for propagation. Then verify:

1. **Check DNS propagation:**
   ```bash
   # On Mac/Linux terminal or Windows PowerShell:
   nslookup unifiedinnovationsgroup.online
   ```
   
   You should see the GitHub Pages IP addresses (185.199.108.153, etc.)

2. **Test your website:**
   - Visit: http://unifiedinnovationsgroup.online
   - Visit: http://www.unifiedinnovationsgroup.online
   - Both should load your Unified Innovations Group Bank website

3. **Verify HTTPS:**
   - After enabling HTTPS in GitHub Pages settings
   - Visit: https://unifiedinnovationsgroup.online
   - You should see a padlock icon indicating secure connection

## Step 4: Update Website References (Optional)

Consider updating any hardcoded references in your website:

- Update contact emails if needed
- Update any absolute URLs in your HTML files
- Update social media links or meta tags

## Troubleshooting

### Common Issues:

**"Domain is not properly configured"**
- Wait longer for DNS propagation (can take up to 24-48 hours)
- Double-check your DNS records match exactly
- Clear your browser cache

**"Certificate error" or HTTPS not working**
- Wait for DNS to fully propagate before enabling HTTPS
- Make sure the CNAME file exists in your repository
- Try disabling and re-enabling HTTPS in GitHub Pages settings after 24 hours

**Website shows 404 error**
- Ensure `index.html` exists in the root of your repository
- Check that GitHub Pages is enabled and set to deploy from the correct branch
- Verify the CNAME file contains only the domain name (no http:// or trailing slash)

**GoDaddy-Specific Issues**
- Some GoDaddy accounts have "domain forwarding" enabled by default - disable this
- Make sure you're editing DNS records, not using GoDaddy's website builder
- GoDaddy may show records with "@" symbol which means the root domain

### DNS Propagation Check Tools:
- https://www.whatsmydns.net/#A/unifiedinnovationsgroup.online
- https://dnschecker.org/#A/unifiedinnovationsgroup.online

## Current Status

✅ CNAME file created in repository  
⏳ Awaiting DNS configuration at GoDaddy  
⏳ Awaiting GitHub Pages custom domain setup  
⏳ Awaiting HTTPS certificate generation  

## Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **GoDaddy DNS Help:** https://www.godaddy.com/help/manage-dns-records-680
- **GitHub Pages Status:** https://www.githubstatus.com/

## Timeline

- DNS configuration: 5-10 minutes
- DNS propagation: 15 minutes to 48 hours (typically 1-2 hours)
- HTTPS certificate generation: 15 minutes to 24 hours after DNS propagates

---

**Need Help?** If you encounter issues, check the GitHub repository issues or refer to GitHub's official documentation.
