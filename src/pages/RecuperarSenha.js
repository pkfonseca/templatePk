import { Button, Container, Link, TextField, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import { Component } from "react";
import '../styles/recuperarSenha.css';
export default class RecuperarSenha extends Component {
    render() {
        return (
            <div className="container">

                <div className="divTitulo">
                    <div className="divImagem">
                        <img src="https://st3.depositphotos.com/4035913/15099/v/600/depositphotos_150996276-stock-illustration-pk-p-k-black-letter.jpg" width={200} height={100} />
                    </div>
                    <Typography variant="h1" component="h2" mt={1} sx={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                        RECUPERAR SENHA
                    </Typography>
                </div>

                <div className="divForm">
                    <form className="Form">
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth/>
                        
                        <Button variant="contained" fullWidth sx={{
                            marginTop: 4,
                        }}>Recuperar</Button>
                    </form>

                    <div className="divLink">
                        <p className="p">Nao possui uma conta?</p>
                        <Link sx={{
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}>Cadastre-se</Link>
                    </div>

                </div>
            </div>
        )
    }
}