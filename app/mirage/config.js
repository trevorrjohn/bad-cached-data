export default function() {
  this.get('/users', () => ({ users: [] }));
}
