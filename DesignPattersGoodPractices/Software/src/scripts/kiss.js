// 
// KISS – Keep It Simple, Stupid
// Favor simple solutions over complex ones. Avoid overengineering.


// -----------------
// BAD
function getStatus(code) {
  return code === 200 ? 'OK' : code === 404 ? 'Not Found' : code === 500 ? 'Error' : 'Unknown';
}
// -----------------

// -----------------
// GOOD
function getStatus(code) {
  const statusMap = {
    200: 'OK',
    404: 'Not Found',
    500: 'Error'
  };
  return statusMap[code] || 'Unknown';
}
// -----------------