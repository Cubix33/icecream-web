# Ice Cream Delivery Landing Page

The Ice Cream Landing Page is a visually engaging, pixel-perfect frontend project built with React.js, inspired by a vibrant and interactive Figma design. The primary objective was to replicate the UI design exactly, while ensuring responsiveness, interactivity, and clean code organization.

This landing page captures the essence of a modern ice cream brand, blending bold typography, fun color palettes, and interactive visuals. The application adapts smoothly across all screen sizes and maintains a fluid user experience on mobile, tablet, and desktop.

The entire frontend is powered using React functional components and hooks only, following best practices in component modularization, CSS organization, and scalability.



> 🎯 This project was built as part of a selection task, with strict adherence to the provided design system including layout, colors, typography, spacing, and responsiveness.

---

## Live Demo

**Strawberry Cone Landing Page Deployed on:** [Netlify Link Here](https://strawberry-cone-icecream.netlify.app/)  
**Blueberry Cone Landing Page Deployed on:** [Netlify Link Here](https://blueberry-cone-icecream.netlify.app/)  
**Chocolate Cone Landing Page Deployed on:** [Netlify Link Here](https://chocolate-cone-icecream.netlify.app/)   
**Evergreen Cone Landing Page Deployed on:** [Netlify Link Here](https://icecream-delivery.netlify.app/) 

**Figma Prototype Preview:** [Click to View](https://www.figma.com/proto/7wBPILkI59YRNAhIz2IWr9/Ice-Cream?page-id=0%3A1&node-id=1-17&viewport=435%2C53%2C0.11&t=zUaIQitWqVhKiM37-1&scaling=scale-down&content-scaling=fixed)

---

##  Folder Structure

```
icecream-landing/
├── public/
│   └── index.html
├── src/
│   ├── assets/               # All images and icons
│   ├── components/
│   │   ├── HeroSection.js       # Landing page for Strawberry cone
│   │   ├── HeroSection1.js      # Landing page for Blueberry cone
│   │   ├── HeroSection2.js      # Landing page for Chocolate cone
│   │   ├── HeroSection3.js      # Landing page for Evergreen cone
│   │   ├── Navbar.js            # Stylesheet for the navbar
│   │   ├── HeroSection.css      # Stylesheet for the body of the web page- Hero Section
│   │   └── Navbar.css
│   ├── App.js                  # Root component with route handling or combined layout
│   ├── App.css                 # Global app-level styles
│   ├── index.js                # Entry point
│   └── index.css               # Base/global CSS
├── .gitignore
├── package.json
└── README.md
```

---

## Setup Instructions

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn.

## Setup instructions 

### 1. Clone the repository 
```bash
git clone https://github.com/Cubix33/icecream-web.git

cd icecream-web
```
### 2. Install the dependencies 
 ```bash
npm install
npm install react-scripts 
npm install react-router-dom
```
### 3. Start the development server
```bash
npm start
```
### 4. Build for production (optional)
 ```bash
npm run build
```

## Responsiveness
1. Fully responsive design using CSS flexbox and media queries.

2. Breakpoints tested for desktop, tablet, and mobile.

3. Typography and spacing adapt seamlessly across screen sizes.

## Code Quality & Practices
1. Built entirely with React functional components and hooks.

2. Modular component-based architecture.

3. Folder structure supports scalability and maintainability.

4. CSS separated per component to ensure cohesion.

5. Inline and block-level comments for better understanding.

## Known Issues / Limitations
None at the moment. All major design specifications and interactions have been implemented.
