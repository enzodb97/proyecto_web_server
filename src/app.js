const {envs}= require('./config/env');
const { startServer } = require('./server/server');

const main = () => {
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}

// Función agnóstica autoconvocada
//agnóstica porque no tiene nombre
//autoconvocada porque la ejecutamos con los paréntesis

(
    async()=> {
        main()
    }
    )()
    