export default function() {
  this.get('/users', () => ({ users: [] }));
  this.post('/users', () => ({ }));
}
