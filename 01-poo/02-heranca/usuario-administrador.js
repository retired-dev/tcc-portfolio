class Usuario {
  acessarSistema() {
    return "Acesso básico";
  }
}

class Administrador extends Usuario {
  acessarSistema() {
    return "Acesso administrativo";
  }
}

const comum = new Usuario();
const admin = new Administrador();

console.log(comum.acessarSistema()); // Acesso básico
console.log(admin.acessarSistema()); // Acesso administrativo
