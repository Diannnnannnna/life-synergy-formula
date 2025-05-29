// sidebar.js
function sidebarState() {
    return {
        profileOpen: true,
        orderOpen: true,
        currentSection: 'profile',

        init() {
            const savedSection = localStorage.getItem('currentSection');
            if (savedSection) this.currentSection = savedSection;

            if (this.currentSection === 'profile' || this.currentSection === 'shipping') {
                this.profileOpen = true;
                this.orderOpen = false;
            } else if (
                this.currentSection === 'orders' ||
                this.currentSection === 'cancellations' ||
                this.currentSection === 'wishlist' ||
                this.currentSection === 'trackOrder'
            ) {
                this.orderOpen = true;
                this.profileOpen = false;
            }
        },

        setSection(section) {
            this.currentSection = section;
            localStorage.setItem('currentSection', section);
        }
    }
}


