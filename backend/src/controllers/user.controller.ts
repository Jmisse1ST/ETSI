import db from "../db.ts";
/*import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { email, telefone, senha } = req.body;

  if (!email && !telefone) {
    return res.status(400).json({ error: "Informe email ou telefone." });
  }

  if (!senha) {
    return res.status(400).json({ error: "Senha obrigatória." });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE email = ? OR telefone = ?",
      [email, telefone]
    );

    if (rows.length > 0) {
      return res.status(409).json({ error: "Usuário já existe." });
    }

    const hash = await bcrypt.hash(senha, 10);

    await db.query(
      "INSERT INTO usuarios (email, telefone, senha) VALUES (?, ?, ?)",
      [email, telefone, hash]
    );

    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export const loginUser = async (req, res) => {
  const { email, telefone, senha } = req.body;

  if (!senha || (!email && !telefone)) {
    return res
      .status(400)
      .json({ error: "Informe email ou telefone e senha." });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE email = ? OR telefone = ?",
      [email, telefone]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Usuário não encontrado." });
    }

    const usuario = rows[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    res.json({ message: "Login realizado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};*/