import express  from "express";
import {createServer} from "http";
import {Server, Socket} from "socket.io"
import router from "./router"
import path from "path"

const app = express();

const serverHttp = createServer(app)

const io = new Server(serverHttp);

app.set('io', io)
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.resolve('public'));
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/',router)


io.on('connection', (socket:Socket)=>{
    socket.on('new menssage', (data: String) => {
        socket.emit('new menssage', data)
      });
    
})

serverHttp.listen(3000)