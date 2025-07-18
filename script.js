document.addEventListener('DOMContentLoaded', () => {
    const sign = document.querySelector('.signup-section form');
    if (sign) {
        sign.addEventListener('submit', (e) => {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match!');
            }
        });
    }
});