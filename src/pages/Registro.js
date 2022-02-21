import { Button, Checkbox, Link, TextField, Typography } from '@mui/material';
import { style } from '@mui/system';
import { Component } from 'react'
import './registro.css';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='titulo'>
          <img src='https://st3.depositphotos.com/4035913/15099/v/600/depositphotos_150996276-stock-illustration-pk-p-k-black-letter.jpg' width={150} height={100} />
          <Typography sx={{
            fontSize: 24,
            fontWeight: 700,
            whiteSpace: 'normal',
            lineHeight: 1.5,
          }}>
            Comece com Pk
          </Typography>
        </div>

        <div className='divNomeEmail'>
          <TextField id="outlined-basic" label="Nome" variant="outlined"
          />
          <TextField id="outlined-basic" label="Email" variant="outlined"
          />
        </div>

        <div className='senha'>
          <TextField id="outlined-basic" label="senha" variant="outlined"
            fullWidth
          />
        </div>

        <div className='termos'>
          <Checkbox defaultChecked />
          <Typography sx={{
            fontSize: 14,
            fontWeight: 'bold',
            whiteSpace: 'normal',
          }}>
            Concordo com Termos e Condições
          </Typography>
        </div>

        <Button variant="contained" fullWidth

        >
          Cadastre-se
        </Button>


        <div className='possuiConta'>

          <Typography sx={{
            fontSize: 13,
            marginRight: 1,
          }}>
            Já possui uma conta? 
          </Typography>

          <Link href='#' sx={
            {
              cursor: 'pointer',
              textDecoration: 'none',
              fontSize: 13,
            }
          }>
            Faça Login
          </Link>
        </div>

      </div>
    )

  }
}