src/
 ├─ app/
 │   ├─ layout.jsx        # ThemeProvider + global layout
 │   ├─ page.jsx          # Redirects to /login or /chat
 │   ├─ login/            # Login page
 │   ├─ chat/             # Chat main page
 │   │   ├─ layout.jsx    # Sidebar + Navbar wrapper
 │   │   ├─ page.jsx      # Chat screen
 │   │   ├─ components/   # Chat-related UI
 │   │   │   ├─ Sidebar.jsx
 │   │   │   ├─ ChatHeader.jsx
 │   │   │   ├─ ChatMessages.jsx
 │   │   │   ├─ MessageInput.jsx
 │   │   │   └─ MessageBubble.jsx
 ├─ theme/
 │   └─ theme.js          # MUI theme + overrides (your provided file)
 ├─ lib/
 │   └─ firebase.ts       # Firebase config