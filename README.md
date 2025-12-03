# Unified Innovations Group - Demo Banking Platform

A comprehensive demo banking platform showcasing modern financial technology capabilities including traditional banking, cryptocurrency management, and innovation funding.

## 🌐 Live Website

This website is deployed at: **https://unifiedinnovationsgroup.online**

## 📋 Features

- **Personal & Business Banking** - Checking, savings, and treasury accounts
- **Crypto Trading Desk** - BTC, ETH, USDC trading and portfolio management
- **Innovation Funding Hub** - Capital raising and milestone tracking
- **Admin & Governance** - Role-based access controls and audit logging
- **Bill Pay & Transfers** - Complete payment processing capabilities
- **Demo Credentials** - Pre-configured accounts for testing

## 🚀 Deployment

This repository is configured for GitHub Pages. The website is automatically deployed from the main branch.

### Custom Domain Setup

The custom domain `unifiedinnovationsgroup.online` is configured via the `CNAME` file.

For detailed instructions on linking your GoDaddy domain, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Start for Domain Configuration:

1. Add DNS A records at GoDaddy pointing to GitHub Pages IPs
2. Configure custom domain in GitHub Pages settings
3. Enable HTTPS after DNS propagates
4. Access your site at https://unifiedinnovationsgroup.online

## 🏗️ Repository Structure

```
.
├── index.html          # Homepage
├── dashboard.html      # User dashboard
├── accounts.html       # Account management
├── transfers.html      # Money transfers
├── bill-pay.html       # Bill payment
├── crypto.html         # Cryptocurrency trading
├── funding-hub.html    # Innovation funding
├── business.html       # Business banking
├── invest.html         # Investment management
├── admin.html          # Admin panel
├── login.html          # Login page
├── register.html       # Registration page
├── settings.html       # User settings
├── statements.html     # Account statements
├── support.html        # Support center
├── contact.html        # Contact page
├── docs.html           # API documentation
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── assets/
│   ├── css/           # Stylesheets
│   └── js/            # JavaScript files
├── CNAME              # Custom domain configuration
└── DEPLOYMENT.md      # Deployment instructions

```

## 🔧 Local Development

To run this website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/BoogyTheUgli35t/BoogyTheUgli35t.github.io.git
   cd BoogyTheUgli35t.github.io
   ```

2. Open with a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (npx)
   npx http-server -p 8000
   ```

3. Visit `http://localhost:8000` in your browser

## 📝 Demo Credentials

### Administrator Access
- Email: admin@uigbank.demo
- Password: admin123

### Test Users
- John Doe - Premium Client ($12,500.75 USD)
- Jane Smith - Premium Client ($8,750.25 USD)
- Bob Johnson - Suspended account (for testing workflows)

## 🔒 Security Note

This is a **demo platform** for educational and showcase purposes only. Do not use real credentials or sensitive information.

## 📄 License

© 2024 Unified Innovations Group. Demo banking experience for educational and product showcase purposes.

## 🆘 Support

For help with domain configuration or deployment, see [DEPLOYMENT.md](DEPLOYMENT.md).

For general questions about the demo platform:
- Email: solutions@uigbank.demo
- Phone: 1-800-UIG-BANK
