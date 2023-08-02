'use client';


import axios from "axios"
import styles from './styles.module.css'
import './styles.module.css'
import { useEffect, useState } from "react";

const ApiSetVisible = async function (id: string) {
  axios.get('http://localhost:5000/api/produtos')
}

interface ImageProduto {
  _id: string,
  url: string,
  altura: number,
  largura: number,
}
interface Produto {
  _id: string,
  nome: string,
  preco: number,
  quantidade: number,
  descricao: string,
  imagens: ImageProduto[],
  visible: boolean
}
interface DataProdutos {
  produtos: Produto[]
}
export default async function PageAdmin() {
  // const { data }: AxiosResponse<DataProdutos> = await getProdutos()
  const [produtos, setProdutos] = useState<Produto[]>([])
  // const produtos: Produto[] = data.produtos
  // console.log(produtos)
  useEffect(()=> {
    const getProdutos = async function () {
    
      // return axios.get('http://localhost:5000/api/produtos').then(response => {
      //   console.log("PRODUTOS: ", response.data.produtos, response)
      //   setProdutos(response.data.produtos)
      // }).catch((err: AxiosError) => console.log(err.message))
    }
    getProdutos()
  }, [])

  // console.log(data.produtos)
  const ApiSetVisible = async function ({ id, visible }: { id: string, visible: boolean }) {
    axios.put('http://localhost:5000/api/produtos' + id, { visible: !visible }).then(res => console.log("SET VISIBLE: ", res))
  }
  return (
    <div className={styles.container}>
      <div>
        <h1>Bem vindo</h1>
        <p>ao centro de administração da <strong>COMERCIA</strong></p>
        <div>
          <button className="btn primary">ver mais sobre</button>
        </div>
      </div>

      <div className={styles.containerCard}>

        { JSON.stringify(produtos, null, 2)}

        {produtos.map(produto =>
          <div className={styles.card} key={produto._id}>
            <div className={styles.cardHeader}>
              <img style={{ width: '100%' }} src="/shop-image.png" alt="imagen do produto" />
              <span>{produto.preco} Kz </span>
            </div>
            <div className={styles.cardBody}>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>

              <div className={styles.buttonsAction}>
                <div className="switch-container">
                  <input type="checkbox" id={'swb-' + produto._id} checked={produto.visible} onChange={() => {
                    //ApiSetVisible({ id: produto._id, visible: produto.visible })
                  }} />
                  <label className="switch" htmlFor={'swb-' + produto._id}>
                    <div className="slider"></div>
                  </label>
                </div>
                <button className="btn primary">ver mais sobre</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

