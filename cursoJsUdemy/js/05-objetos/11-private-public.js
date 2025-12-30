function Usuario() {
    let id = 1
    this.name = "Nicolas"

    let log = function() {
        console.log("Loggin..")
    }

    this.guardar = function() {
        log()
        console.log("Guardando...")
    }
}

const usuario = new Usuario();

usuario.guardar();