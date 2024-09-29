// Define the Ticket object structure
export const Ticket = {
    id: "",
    title: "",
    tag: [],
    userId: "",
    status: "",
    priority: 0
};

// Define the User object structure
export const User = {
    id: "",
    name: "",
    available: false
};

// Define the Col object structure
export const Col = {
    col: [] // Array of Ticket objects
};

// Define the UserIdToData object structure
export const UserIdToData = {
    userData: {} // Record<string, User>
};
