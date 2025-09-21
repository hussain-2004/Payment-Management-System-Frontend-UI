# 💳 PayFlow - Payment Management System

A modern, comprehensive web-based payment management system built with Vue 3, providing powerful tools for managing users, transactions, and financial operations in a business environment.

![PayFlow Dashboard](./src/assets/screenshots/DASHBOARD.png)

## 🌟 Features

- **User Management**: Complete user lifecycle with role-based access control
- **Payment Processing**: Comprehensive transaction handling with real-time status tracking  
- **Analytics Dashboard**: Real-time statistics and financial summaries
- **Advanced Search**: Multi-criteria filtering across payments and users

## 📱 Application Screenshots

### 🔐 Authentication
| Login | Registration |
|-------|--------------|
| ![Login](./src/assets/screenshots/LOGIN_FORM.png) | ![Registration](./src/assets/screenshots/NEW_REGISTRATION_FORM.png) |

### 👥 User Management
| Users List | Add New User |
|------------|--------------|
| ![Users Page](./src/assets/screenshots/USERS_PAGE.png) | ![Add User](./src/assets/screenshots/ADD_NEW_USER.png) |

### 💳 Payment Management
![Payments](./src/assets/screenshots/PAYMENTS_PAGE.png)

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and development server
- **Vue Router 4** - Client-side routing
- **Vuex 4** - State management
- **Tailwind CSS** - Utility-first styling
- **Jest** - Testing framework

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/hussain-2004/Payment-Management-System-Frontend-UI.git
cd Payment-Management-System-Frontend-UI

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

## 📖 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Testing
npm test               # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report

# Code Quality
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
```

## 🏗️ Project Structure

```
src/
├── assets/           # Images and screenshots
├── components/       # Reusable components
├── data/            # Sample data
├── router/          # Route configuration
├── store/           # Vuex store
├── test/            # Unit tests
├── views/           # Page components
├── App.vue          # Root component
└── main.js          # Entry point
```

## 🧪 Testing

The project includes comprehensive unit tests:

```bash
✅ Test Suites: 6 passed, 6 total
✅ Tests: 12 passed, 12 total
✅ Coverage: All major components tested
```

## � Data Storage

- **Local Storage**: Automatic data persistence
- **Sample Data**: Pre-loaded demo content
- **Real-time Updates**: Instant synchronization

## 🔐 Authentication

- Simplified demo authentication system
- Any valid email format accepted
- Automatic account creation
- Role-based access control

## 🎨 Features Overview

### Dashboard
- Real-time payment statistics
- User activity monitoring
- Recent transactions
- Financial summaries

### User Management
- Create, edit, and delete users
- Role assignment (Admin/Manager/User)
- Status management (Active/Inactive)
- User search and filtering

### Payment Management
- Transaction processing
- Multiple payment categories
- Status tracking (Pending/Completed/Failed)
- Currency formatting (₹ INR)

## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy to static hosting
# Upload 'dist' folder to your hosting service
```

**Deployment Options:**
- Vercel, Netlify, GitHub Pages
- Any static file hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hussain**
- GitHub: [@hussain-2004](https://github.com/hussain-2004)
- Repository: [Payment-Management-System-Frontend-UI](https://github.com/hussain-2004/Payment-Management-System-Frontend-UI)

---

<div align="center">
  <strong>Made with ❤️ using Vue 3 and modern web technologies</strong>
  <br><br>
  ⭐ Star this repository if you find it helpful!
</div>

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/hussain-2004/Payment-Management-System-Frontend-UI.git
   cd Payment-Management-System-Frontend-UI
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

![Installation Process](./assets/screenshots/installation.png)

## 📖 Available Scripts

### **Development**
```bash
# Start development server with hot reload
npm run dev

# Run development server on specific port
npm run dev -- --port 3000
```

### **Testing**
```bash
# Run unit tests with Jest
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage

# Run end-to-end tests with Cypress
npm run test:e2e:dev
```

### **Production**
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### **Code Quality**
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

## 🏗️ Project Structure

```
Payment-Management-System/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 assets/            # Images, icons, styles
│   ├── 📁 components/        # Reusable Vue components
│   │   ├── NavbarComponent.vue
│   │   ├── PaymentTableComponent.vue
│   │   ├── RecentPaymentComponent.vue
│   │   ├── StatusCardComponent.vue
│   │   └── UserTableComponent.vue
│   ├── 📁 data/              # Sample data and constants
│   ├── 📁 router/            # Vue Router configuration
│   ├── 📁 store/             # Vuex store modules
│   ├── 📁 test/              # Unit test files
│   ├── 📁 views/             # Page components
│   │   ├── DashboardPage.vue
│   │   ├── LoginPage.vue
│   │   ├── PaymentDetailsInformation.vue
│   │   ├── PaymentInitiationForm.vue
│   │   ├── PaymentListSection.vue
│   │   ├── RegisterPage.vue
│   │   ├── UserFormPage.vue
│   │   └── UserListPage.vue
│   ├── App.vue               # Root component
│   └── main.js               # Application entry point
├── 📁 cypress/               # E2E test configuration
├── 📁 tests/                 # Additional test files
└── 📋 Configuration files
    ├── jest.config.js        # Jest testing configuration
    ├── vite.config.js        # Vite build configuration
    ├── tailwind.config.js    # Tailwind CSS configuration
    └── package.json          # Project dependencies
```

![Project Structure](./assets/screenshots/project-structure.png)

## 💾 Data Management

### **Local Storage**
- Automatic data persistence to browser local storage
- No server setup required for development
- Instant data synchronization across sessions

### **Sample Data**
- Pre-loaded demo users and payments
- Realistic test scenarios included
- Easy data reset and regeneration

### **State Management**
- Centralized Vuex store for all application data
- Reactive updates across all components
- Optimistic UI updates for better user experience

![Data Flow](./assets/screenshots/data-flow.png)

## 🔐 Authentication & Security

### **Demo Authentication**
- Simplified login system for demonstration
- Any valid email format accepted
- Automatic account creation if user doesn't exist
- Role-based navigation and access control

### **Production Ready Features**
- Session management foundation
- Role-based access control structure
- Secure routing protection
- User permission system ready for expansion

![Authentication Flow](./assets/screenshots/auth-flow.png)

## 🎨 UI/UX Features

### **Modern Design**
- Clean, professional interface
- Consistent color scheme and branding
- Responsive design for all devices
- Intuitive user workflows

### **Interactive Elements**
- Smooth hover effects and transitions
- Loading states and visual feedback
- Form validation with real-time feedback
- Accessible design patterns

### **Mobile Support**
- Touch-friendly interface elements
- Responsive tables and forms
- Optimized for various screen sizes
- Progressive enhancement approach

![UI Screenshots](./assets/screenshots/ui-features.png)

## 🧪 Testing

### **Test Coverage**
- **Unit Tests**: 12 tests across 6 major components
- **Component Testing**: Vue component functionality
- **Integration Testing**: Store and router integration
- **E2E Testing**: Complete user workflows (configured)

### **Test Results**
```bash
✅ Test Suites: 6 passed, 6 total
✅ Tests: 12 passed, 12 total
✅ Coverage: Components and core functionality
```

![Test Results](./assets/screenshots/test-results.png)

## 🚀 Deployment

### **Build Process**
```bash
# Create production build
npm run build

# Files will be generated in 'dist' directory
# Ready for deployment to any static hosting service
```

### **Deployment Options**
- **Vercel**: Zero-configuration deployment
- **Netlify**: Drag-and-drop or Git integration
- **GitHub Pages**: Direct repository deployment
- **Traditional Hosting**: Upload dist folder contents

![Deployment Options](./assets/screenshots/deployment.png)

## 🔧 Configuration

### **Environment Variables**
```env
# Add to .env file for custom configuration
VITE_API_URL=your-api-endpoint
VITE_APP_TITLE=PayFlow
VITE_DEFAULT_CURRENCY=INR
```

### **Customization**
- **Colors**: Modify `tailwind.config.js` for brand colors
- **Currency**: Update currency symbols and formatting
- **Features**: Enable/disable modules as needed
- **Branding**: Replace logos and app names

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

![Contributing Guide](./assets/screenshots/contributing.png)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hussain**
- GitHub: [@hussain-2004](https://github.com/hussain-2004)
- Repository: [Payment-Management-System-Frontend-UI](https://github.com/hussain-2004/Payment-Management-System-Frontend-UI)

## 📞 Support

For support, issues, or feature requests:
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/hussain-2004/Payment-Management-System-Frontend-UI/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/hussain-2004/Payment-Management-System-Frontend-UI/discussions)
- 📧 **Email**: Create an issue for direct contact

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Vite team for the blazing fast build tool
- Open source community for inspiration and tools

---

<div align="center">
  <img src="./assets/screenshots/payflow-logo.png" alt="PayFlow Logo" width="100">
  
  **Made with ❤️ using Vue 3 and modern web technologies**
  
  ⭐ Star this repository if you find it helpful!
</div>

![Footer](./assets/screenshots/footer.png)

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
