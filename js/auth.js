/**
 * Auth Logic
 */

const Auth = {
    // API Configuration
    // CHANGE THIS URL WHEN DEPLOYING:
    // Local: 'http://localhost:3000'
    // Production: 'https://dtu-timetable-schedular-backend.onrender.com'
    API_BASE_URL: 'https://dtu-timetable-schedular-backend.onrender.com', 
    
    key: 'currentUser',

    login: (email, password, role) => {
        const user = DB.findUser(email, password);
        if (user && user.role === role) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            return { success: true, user: user };
        }
        return { success: false, message: 'Invalid credentials' };
    },
    
    register: (details) => {
        // Simple registration for students
        const newUser = {
            id: details.rollNo,
            role: 'student',
            ...details
        };
        return DB.registerUser(newUser);
    },

    logout: () => {
        sessionStorage.removeItem('currentUser');
        window.location.href = '../index.html';
    },

    getCurrentUser: () => {
        return JSON.parse(sessionStorage.getItem('currentUser'));
    },

    checkAuth: () => {
        const user = sessionStorage.getItem('currentUser');
        if (!user) {
           window.location.href = '../index.html';
           return null;
        }
        return JSON.parse(user);
    },

    // --- Forgot Password Methods (Connected to Node.js Backend) ---

    // Request OTP from Backend
    requestOTP: async (email, isRegistration = false) => {
        try {
            // Check DB based on context
            const db = DB.get();
            const userExists = db.users.some(u => u.email === email);

            if (isRegistration) {
                if (userExists) return { success: false, message: 'Email already registered!' };
            } else {
                if (!userExists) return { success: false, message: 'Email not found!' };
            }

            const type = isRegistration ? 'register' : 'reset';

            const response = await fetch(`${Auth.API_BASE_URL}/api/send-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, type })
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            return { success: false, message: 'Failed to connect to email server. Ensure server is running.' };
        }
    },

    verifyOTP: async (email, otp) => {
        try {
            const response = await fetch(`${Auth.API_BASE_URL}/api/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });
            return await response.json();
        } catch (error) {
             return { success: false, message: 'Verification failed.' };
        }
    },

    resetPassword: (email, newPassword) => {
        return DB.updateUser(email, newPassword);
    },

    updateProfile: (details) => {
        const currentUser = Auth.getCurrentUser();
        if(!currentUser) return { success: false, message: 'Not logged in' };
        
        // Update DB
        const result = DB.updateUser(currentUser.email, details);
        
        if(result.success) {
            // Update Session
            sessionStorage.setItem('currentUser', JSON.stringify(result.user));
            return { success: true };
        }
        return result;
    }
};
