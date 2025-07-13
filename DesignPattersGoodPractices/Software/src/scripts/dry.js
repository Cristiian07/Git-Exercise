// 
// DRY – Don't Repeat Yourself
// Avoid duplicating code or logic. Centralize it to improve maintainability.


// -----------------
// BAD
function createUser(name, email) {
  return { name, email, role: 'user', isActive: true };
}

function createAdmin(name, email) {
  return { name, email, role: 'admin', isActive: true }; // duplicated logic
}
// -----------------

// -----------------
// GOOD
function createUserWithRole(name, email, role) {
  return { name, email, role, isActive: true };
}

const user = createUserWithRole('John', 'john@example.com', 'user');
const admin = createUserWithRole('Jane', 'jane@example.com', 'admin');
// -----------------