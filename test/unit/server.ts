import database from './database';
import makeApp from './app'

const app = makeApp(database)

app.listen(3333, () => console.log("Listening on port 3333"))