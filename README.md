# JWEAR - Fictitious Clothing Brand Website

A modern, responsive website for JWEAR, a fictitious clothing brand built with HTML, CSS, and JavaScript. This project was developed as a CFGS assignment and showcases a complete e-commerce clothing website with cryptocurrency market integration.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with custom media queries
- **Product Catalog**: Organized sections for Hoodies, Sweatshirts, and T-shirts
- **Special Drops**: Featured collection with hover effects and image sliders
- **Contact Form**: Interactive form with jQuery validation and animations
- **Cryptocurrency Integration**: Real-time crypto prices using CoinGecko API
- **Modern UI/UX**: Clean design with smooth transitions and hover effects

## 📁 Project Structure

```
JWEAR/
├── CSS/
│   ├── style.css           # Main stylesheet
│   └── mediaqueries.css    # Mobile responsive styles
├── JS/
│   ├── main.js            # Cryptocurrency API integration
│   └── contact.js         # Contact form functionality
├── pages/
│   ├── hoddie.html        # Hoodies catalog
│   ├── sudadera.html      # Sweatshirts catalog
│   ├── cami.html          # T-shirts catalog
│   ├── crypto.html        # Cryptocurrency market
│   ├── contact.html       # Contact form
│   └── comprar.html       # Purchase page
├── assets/
│   ├── LOGOS/            # Brand logos
│   ├── ROPA/             # Product images
│   └── ...               # Other assets
└── index.html            # Homepage
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript**: Interactive functionality and API integration
- **jQuery**: DOM manipulation and AJAX requests
- **CoinGecko API**: Real-time cryptocurrency data
- **Google Fonts**: Typography (Poppins, Anton SC)

## 🎨 Design Features

### Responsive Design
- Mobile-first approach (320px - 812px)
- Flexible layouts that adapt to different screen sizes
- Custom breakpoints for optimal viewing experience

### Interactive Elements
- Image hover effects and transitions
- Product image sliders
- Animated form submissions
- Dynamic theme switching
- Smooth scrolling navigation

### Color Scheme
- Primary: Black and white contrast
- Accent colors: Various clothing colors
- Clean, minimalist aesthetic

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 812px
- **Desktop**: 813px and above

## 🔌 API Integration

### CoinGecko API
The website integrates with the CoinGecko API to display real-time cryptocurrency prices for:
- Bitcoin (BTC)
- Ethereum (ETH)
- Solana (SOL)
- Dogecoin (DOGE)
- Tron (TRX)
- Polkadot (DOT)
- OKB (OKB)
- Litecoin (LTC)
- Chainlink (LINK)
- SUI (SUI)
- Maker (MKR)
- GALA (GALA)

Data updates every 60 seconds automatically.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jwear-website.git
   cd jwear-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your preferred browser
   - Or use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server
   ```

3. **View the website**
   - Navigate to `http://localhost:8000` (or your local server URL)

## 📋 Pages Overview

### Homepage (`index.html`)
- Hero section with brand introduction
- Special drops showcase
- Best sellers section
- Category navigation

### Product Pages
- **Hoodies** (`pages/hoddie.html`): Premium hoodies collection
- **Sweatshirts** (`pages/sudadera.html`): Comfortable sweatshirts
- **T-shirts** (`pages/cami.html`): Casual t-shirt designs

### Crypto Market (`pages/crypto.html`)
- Real-time cryptocurrency prices
- Integration with CoinGecko API
- Modern card-based layout

### Contact (`pages/contact.html`)
- Interactive contact form
- Form validation
- Dynamic theme switching
- Animated form submission feedback

## 🎯 Key Features Breakdown

### Contact Form Functionality
- Real-time form validation
- Dynamic color themes (light, dark, colorful)
- Animated form submission
- jQuery-powered interactions

### Cryptocurrency Market
- Fetches live data from CoinGecko API
- Auto-refreshes every minute
- Error handling for API failures
- Clean, organized display

### Product Showcase
- Image sliders for product views
- Hover effects and transitions
- Responsive product grids
- "Buy Now" call-to-action buttons

## 🔧 Development Notes

### CSS Architecture
- Modular CSS with separate media query file
- Custom properties for consistent theming
- Mobile-first responsive design
- Smooth transitions and animations

### JavaScript Functionality
- Vanilla JavaScript for API calls
- jQuery for DOM manipulation
- Event-driven form handling
- Error handling and user feedback

## 🚧 Future Enhancements

As mentioned in the original README, future plans include:

- **Mobile Application**: React Native version with Tailwind CSS
- **Database Integration**: Product image storage and management
- **User Authentication**: Login and registration system
- **Shopping Cart**: Complete e-commerce functionality
- **Payment Integration**: Secure payment processing

---

## 📄 License

Copyright © 2024 Juan Manuel López. All Rights Reserved.

This project was created for educational purposes as part of a university assignment.

## 🙏 Acknowledgments

- **CoinGecko**: For providing the free cryptocurrency API
- **Google Fonts**: For the Poppins and Anton SC font families
- **University Project**: Special thanks to the educational requirements that inspired this comprehensive web development project
