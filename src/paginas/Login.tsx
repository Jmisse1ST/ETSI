import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "admin@unilib.com" && password === "admin123") {
        
        alert("Login realizado com sucesso!");
      } else {
        setError("Email ou senha inválidos.");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-sky-600 mb-2">Login UniLib</h2>
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-xs text-sky-500 hover:underline"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded py-2 mt-2 transition"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <div className="text-xs text-gray-500 text-center mt-2">
          Esqueceu a senha? <a href="#" className="text-sky-500 hover:underline">Recuperar</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
