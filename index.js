const express= require('express');
require('./service/passport');
const authRoutes=require('./routes/authRouts');

const app = express();

authRoutes(app);


const PORT =process.env.PORT||3000;
app.listen(PORT);