# 🛍️ E-Commerce Admin Dashboard
A modern, feature-rich admin dashboard built for Nigerian small and medium enterprises (SMEs) to manage their e-commerce operations efficiently.
<img width="1258" height="553" alt="image" src="https://github.com/user-attachments/assets/1f76acd4-96af-4405-955f-c2c6c998eaae" />
## 🌟 Live Demo
https://e-commerce-dashboard-lovat.vercel.app/
> **Note:** This is a frontend-only application. All data is stored locally in your browser using localStorage.
<img width="1258" height="553" alt="image" src="https://github.com/user-attachments/assets/7f9abe91-d9d7-4f22-b6bc-a37320bb74af" />
<img width="1257" height="553" alt="image" src="https://github.com/user-attachments/assets/dbc68e3d-f010-4aca-81a4-45155be60245" />
<img width="1257" height="552" alt="image" src="https://github.com/user-attachments/assets/9ee75510-a552-4687-b5ee-5f9033a4b43b" />
<img width="1256" height="554" alt="image" src="https://github.com/user-attachments/assets/ed90a507-ac9d-418c-82a6-ca99ac1286bf" />

## ✨ Features

### 📊 Dashboard Overview
- **Real-time Analytics**: Revenue, orders, and customer metrics with percentage changes
- **Interactive Charts**: Line charts for revenue trends and pie charts for top products
- **Dynamic Filtering**: View data across multiple time periods (Today, Last 7 days, 30 days, 3/6/12 months)
- **Summary Cards**: At-a-glance business metrics with trend indicators

### 📦 Product Management
- **Full CRUD Operations**: Create, read, update, and delete products
- **Image Upload**: Multi-image support with cover image selection
- **Product Details**: Title, description, price, sizes, and categories
- **Image Gallery**: Visual product display with fallback for missing images

### 💰 Sales Tracking
- **Transaction History**: Complete sales records with dates and amounts
- **Status Management**: Track completed, pending, and failed transactions
- **Customer Integration**: Linked customer information for each sale
- **Color-coded Badges**: Visual status indicators for quick identification

### 👥 Customer Management
- **Customer Database**: Store customer information with creation dates
- **Account Controls**: Activate/deactivate customer accounts
- **Status Indicators**: Visual badges for active and deactivated accounts
- **Contact Information**: Email and other customer details

### 🎨 UI/UX
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Polished transitions and hover effects
- **Intuitive Navigation**: Clean sidebar with active route highlighting

---

## 🛠️ Tech Stack

### Frontend
- **[React 18](https://react.dev/)** - UI library with modern hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server

### Styling
- **[Tailwind CSS v3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[React Icons](https://react-icons.github.io/react-icons/)** - Additional icon library

### Routing & State
- **[React Router DOM](https://reactrouter.com/)** - Client-side routing
- **Context API** - Global theme management
- **LocalStorage** - Data persistence layer

### Data Visualization
- **[Recharts](https://recharts.org/)** - Composable charting library

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/e-commerce-dashboard.git
   cd e-commerce-dashboard
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start development server**
```bash
   npm run dev
```

4. **Open your browser**
```
   http://localhost:5173
```

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── DashboardLayout.tsx    # Main layout wrapper
│   │   ├── Sidebar.tsx            # Desktop navigation
│   │   └── MobileNav.tsx          # Mobile navigation
│   ├── ui/
│   │   ├── SummaryCard.tsx        # Metric display cards
│   │   └── EmptyState.tsx         # No data placeholder
│   ├── charts/
│   │   ├── RevenueChart.tsx       # Line chart component
│   │   └── TopProductsChart.tsx   # Pie chart component
│   ├── ProductModal.tsx           # Product CRUD modal
│   └── ProtectedRoute.tsx         # Auth route wrapper
├── pages/
│   ├── Home.tsx                   # Dashboard overview
│   ├── Products.tsx               # Product management
│   ├── Sales.tsx                  # Sales tracking
│   ├── Customers.tsx              # Customer management
│   ├── Login.tsx                  # Authentication
│   └── Signup.tsx                 # User registration
├── context/
│   ├── ThemeContext.tsx           # Dark/light theme
│   └── AuthContext.tsx            # Authentication state
├── utils/
│   ├── localStorage.ts            # Storage utilities
│   ├── auth.ts                    # Auth helpers
│   └── customers.ts               # Customer utilities
├── types/
│   └── index.ts                   # TypeScript interfaces
├── data/
│   └── mockData.ts                # Sample data
├── App.tsx                        # Root component
└── main.tsx                       # Entry point
```

---

## 🎯 Key Concepts & Patterns

### State Management
- **React Hooks**: `useState`, `useEffect`, `useRef`, `useContext`
- **Context API**: Global theme state management
- **LocalStorage Integration**: Persistent data layer

### TypeScript Usage
- **Interface Definitions**: Strict typing for all props and data structures
- **Type Safety**: Zero `any` types in production code
- **Generics**: Reusable type-safe components

### Component Architecture
- **Composition Pattern**: Reusable, composable components
- **Props Drilling Prevention**: Context API for deeply nested state
- **Controlled Components**: Form inputs managed by React state

### Data Flow
```
User Action → State Update → LocalStorage Save → UI Re-render
```

---

## 💾 Data Persistence

This project uses **localStorage** for data persistence. Here's how it works:
```typescript
// Save data
localStorage.setItem('products', JSON.stringify(products));

// Retrieve data
const products = JSON.parse(localStorage.getItem('products') || '[]');

// Clear all data
localStorage.clear();
```

### Storage Keys Used
- `products` - Product inventory
- `sales` - Sales transactions
- `customers` - Customer database
- `theme` - User theme preference (dark/light)
- `timeStamp` - Selected time period filter
- `authToken` - Authentication token
- `currentUser` - Current user data

---

## 📊 Mock Data

The application includes realistic mock data for demonstration:

- **20 Customers**: Nigerian names and email addresses
- **20 Sales**: Varied transaction amounts in Naira (₦)
- **Revenue Data**: 6 time period datasets
- **Product Data**: Top 5 products across different timeframes

---

## 🔐 Authentication

Basic authentication system using localStorage:
```typescript
// Login
login(user, token);

// Check if authenticated
const isLoggedIn = isAuthenticated();

// Logout
logout();

// Get current user
const user = getCurrentUser();
```

> **Note:** This is a demo authentication system. In production, use proper backend authentication with JWT tokens and secure password hashing.

---

## 🐛 Known Limitations

- **No Backend**: All data is stored in browser localStorage
- **No Real Authentication**: Mock auth system for demo purposes
- **Single User**: Not multi-tenant ready
- **No Data Sync**: Data only exists in your browser
- **Storage Limit**: localStorage has ~5-10MB limit per domain

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/onisodumyea)
- LinkedIn: [Your Name](https://linkedin.com/in/onisodumeyamazi)
- Portfolio: [yourportfolio.com](https://onisodumeya.vercel.app)

## 📧 Contact

Have questions or want to collaborate? Reach out!

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/onisodumeya)

---

## ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a star! It helps others discover the project and motivates me to keep building.

[![Star this repo](https://img.shields.io/github/stars/onisodumeya/e-commerce-dashboard?style=social)](https://github.com/onisodumeya/e-commerce-dashboard)

---

<div align="center">
  <p>Built with ☕ and determination in Port Harcourt, Nigeria 🇳🇬</p>
  <p>© 2026 Onisodumeya. All rights reserved.</p>
</div>
