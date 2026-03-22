class UsuarioController {
  constructor() {
    this.service = new UsuarioService();
  }

  getUsuario(req, res) {
    const usuario = this.service.buscarUsuario(req.params.id);
    res.json(usuario);
  }
}
