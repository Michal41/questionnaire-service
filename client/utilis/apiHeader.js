const token = document.querySelector('meta[name="csrf-token"]').content;
const headers= { "X-CSRF-Token": token, "Content-Type": "application/json"};
export default headers