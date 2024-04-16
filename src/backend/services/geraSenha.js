class geraSenha {
  generate() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*#@$";
    const comp = 6;
    let senha = "";
    for (let i = 0, n = charset.comp; i < comp; ++i) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }
    return senha;
  }
}

module.exports = {
  geraSenha
};