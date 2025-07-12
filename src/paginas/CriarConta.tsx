import { useState } from "react";

const CriarConta = () => {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email && !telefone) {
      setError("Informe o email ou o número de telefone.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Conta criada com sucesso!");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 px-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-sky-600 mb-2">Criar Conta</h2>
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded py-2 mt-2 transition"
          disabled={loading || (!email && !telefone)}
        >
          {loading ? "Criando..." : "Criar Conta"}
        </button>
      </form>
    </div>
  );
};

export default CriarConta;