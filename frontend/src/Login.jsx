import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Login.css";
import logoImagem from "./assets/images/logo_farmacia.png";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [verSenha, setVerSenha] = useState(false);

    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !senha) {
            setErro('Preencha todos os campos.');
            return;
        }

        try {
            const resposta = await fetch("http://127.0.0.1:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            const dados = await resposta.json();

            if (resposta.ok) {
                setErro("");
                localStorage.setItem("logado", "true");
                navigate("/home");
            } else if (resposta.status === 401) {
                setErro(dados.detail);
            } else {
                setErro("Algo deu errado. Tente de novo.");
            }

        } catch {
            setErro("Não foi possível falar com o servidor.");
        }
    }

    return (

        <div className="login-pagina">
            <div className="login-card-container">
                <div className="login-banner-esquerdo">
                    <div className="logo-login-centralizado">
                        <img src={logoImagem} alt="FarmaLife Logo" className="img-logo" />
                        <span className="nome-farmacia-login">
                            Farma<strong>Life</strong>
                        </span>
                    </div>
                </div>

                <div className="login-formulario-direito">
                    <div className="cabecalho-form">
                        <h2>Entrar na Conta</h2>
                        <p>Informe seus dados para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit} className="form-login">
                        <div className="campo-input">
                            <label>E-MAIL</label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="campo-input">
                            <label>SENHA</label>
                            <div className="campo-senha">
                                <input
                                    type={verSenha ? "text" : "password"}
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />

                                <button
                                    type="button"
                                    className="ver-senha"
                                    onClick={() => setVerSenha(!verSenha)}
                                >
                                    {verSenha ? "Ocultar" : "Mostrar"}
                                </button>
                            </div>
                        </div>

                        {erro && <p className="mensagem-erro">{erro}</p>}

                        <div className="acoes-form">
                         
                            <button type="submit" className="botao-entrar">
                                Entrar
                            </button>
                     <Link to="/cadastro" className="troca">Criar uma conta</Link>

                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default Login;
