import React from 'react'

function Footer() {
    return (
        <footer className="w-full mt-24 py-6 border-t border-(--card-border)">
          <p className="text-center text-sm text-(--text-muted)">
            © {new Date().getFullYear()} Irish Rixon Dela Peña. All rights reserved.
          </p>
        </footer>
      );
}

export default Footer
