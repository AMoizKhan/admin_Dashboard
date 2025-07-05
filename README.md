# Website Admin Dashboard

A modern, secure, and feature-rich admin dashboard for website configuration and management. Built with React, TypeScript, and TailwindCSS for optimal performance and user experience.

![Admin Dashboard](https://cdn.builder.io/api/v1/assets/19abc20a9b22447183d41b2dafed2e08/image-679d93?format=webp&width=800)

## 🚀 Features

### Authentication & Security

- **Secure Login System** - Password-protected admin access
- **Session Management** - Persistent user sessions with secure logout
- **Two-Factor Authentication** - Optional 2FA for enhanced security
- **SSL/HTTPS Enforcement** - Force secure connections
- **API Access Control** - Configurable external API access

### Website Management

- **Site Configuration** - Manage site name, description, and core settings
- **Maintenance Mode** - Temporarily disable site access for maintenance
- **User Registration Control** - Enable/disable new user registrations
- **Real-time Status Monitoring** - Live system health indicators

### Dashboard Features

- **Modern UI/UX** - Clean, intuitive interface with gradient backgrounds
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Real-time Statistics** - Live user counts, sessions, and system metrics
- **Quick Actions** - Fast access to common administrative tasks
- **System Status** - Monitor database, cache, storage, and SSL certificate status

### Notification System

- **Email Notifications** - Configurable email alerts for important events
- **Security Alerts** - Notifications for login attempts and security events
- **System Updates** - Maintenance and performance notifications
- **Error Reporting** - Automated error and performance issue alerts

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS 3 + Custom CSS Variables
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Routing**: React Router 6 (SPA Mode)
- **Backend**: Express.js (Optional API endpoints)
- **State Management**: React Hooks (useState, useEffect)

## 📁 Project Structure

```
├── client/
│   ├── components/ui/          # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx          # Main admin dashboard
│   │   └── NotFound.tsx       # 404 error page
│   ├── App.tsx                # App routing and setup
│   └── global.css             # Global styles and CSS variables
├── server/                     # Express backend (optional)
├── shared/                     # Shared types and interfaces
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue gradient (#3B82F6 to #6366F1)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Error**: Red (#EF4444)
- **Background**: Light gradient (Slate to Blue to Indigo)

### Components

- **Cards**: Glass-morphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Inputs**: Clean borders with focus states
- **Badges**: Status indicators with semantic colors
- **Switches**: Toggle controls for settings

### Typography

- **Headings**: Bold, hierarchical sizing
- **Body Text**: Readable contrast ratios
- **Labels**: Medium weight for form elements
- **Descriptions**: Subtle text for additional context

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd website-admin-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

## 🔐 Authentication

### Default Credentials

- **Username**: `admin`
- **Password**: `admin`

> **Note**: Change these credentials in production by modifying the authentication logic in `client/pages/Index.tsx`

### Security Features

- Password-based authentication
- Session persistence
- Secure logout functionality
- Optional two-factor authentication
- SSL/HTTPS enforcement

## 📊 Dashboard Sections

### 1. Quick Statistics

- **Total Users**: Display total registered users
- **Active Sessions**: Show current active user sessions
- **Database Size**: Monitor database storage usage
- **Notifications**: Pending notifications count

### 2. Configuration Settings

#### General Settings

- **Site Name**: Configure website title
- **Site Description**: Set website description
- **Maintenance Mode**: Enable/disable site maintenance
- **User Registration**: Control new user signups

#### Security Settings

- **Two-Factor Authentication**: Enable 2FA for admin accounts
- **SSL Encryption**: Force HTTPS connections
- **API Access**: Control external API access

#### Notification Settings

- **Email Notifications**: Configure email alerts
- **Security Alerts**: Login attempt notifications
- **System Updates**: Maintenance notifications
- **Error Reports**: Performance issue alerts

### 3. Quick Actions

- **Save Changes**: Apply configuration updates
- **Preview Site**: View site with current settings
- **Restart Services**: Restart system services

### 4. System Status

- **Database**: Connection and health status
- **Cache**: Performance and availability
- **Storage**: Disk space utilization
- **SSL Certificate**: Certificate validity

## 🎯 Usage

### Accessing the Dashboard

1. Navigate to the application URL
2. Enter admin credentials (username: admin, password: admin)
3. Click "Sign In" to access the dashboard

### Configuring Settings

1. Use the tabs to navigate between General, Security, and Notifications
2. Toggle switches to enable/disable features
3. Modify text fields for site information
4. Click "Save Changes" to apply updates

### Monitoring System Status

- View real-time statistics in the header cards
- Check system status in the right sidebar
- Monitor notification counts and alerts

## 🔧 Customization

### Updating Colors

Modify CSS variables in `client/global.css`:

```css
:root {
  --primary: 217 91% 60%; /* Blue primary color */
  --secondary: 214 32% 96%; /* Light gray secondary */
  --accent: 217 78% 95%; /* Light blue accent */
  /* ... */
}
```

### Adding New Settings

1. Add new state variables in `client/pages/Index.tsx`
2. Create form elements in the appropriate tab
3. Implement save functionality
4. Update the settings object

### Customizing Authentication

- Modify the login logic in the `handleLogin` function
- Integrate with your authentication system
- Update credential validation

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- **Desktop**: Full-featured layout with side panels
- **Tablet**: Stacked layout with maintained functionality
- **Mobile**: Optimized navigation and touch-friendly controls

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

### Optimization Features

- **Code Splitting**: Lazy loading for optimal performance
- **Image Optimization**: Responsive images with proper sizing
- **CSS Optimization**: Purged unused styles in production
- **Bundle Optimization**: Minimized JavaScript bundles

### Best Practices

- Semantic HTML for accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast ratios for readability

## 🔄 Future Enhancements

- **Role-based Access Control**: Multiple admin levels
- **Audit Logs**: Track configuration changes
- **API Integration**: Connect with external services
- **Advanced Analytics**: Detailed usage statistics
- **Theme Customization**: Dark mode and color themes
- **Plugin System**: Extensible functionality

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:

- Open an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using modern web technologies for optimal performance and user experience.**
