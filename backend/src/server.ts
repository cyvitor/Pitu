import app from './app';
import database from './database';

database.sync();

app.listen(3001);
console.log('Server running...');