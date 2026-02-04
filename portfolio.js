class Portfolio {
    constructor() {
        this.modals = document.querySelectorAll('.modal');
        this.events();
    }

    events() {
        document.querySelectorAll('.open-modal').forEach(button => {
            button.addEventListener('click', this.openModal.bind(this));
        });
        document.querySelectorAll('.close-modal').forEach(button => {
            button.addEventListener('click', this.closeModal.bind(this));
        });
        window.addEventListener('keydown', this.handleKeyPress.bind(this));
    }

    openModal(event) {
        const modalId = event.target.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('is-active');
        }
    }

    closeModal(event) {
        const modal = event.target.closest('.modal');
        if (modal) {
            modal.classList.remove('is-active');
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Escape') {
            this.modals.forEach(modal => {
                modal.classList.remove('is-active');
            });
        }
    }
}

// DOM Safety: Wait until the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});