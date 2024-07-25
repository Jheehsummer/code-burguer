import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import formatCurrency from "../../../utils/formatCurrency";
import TableHead from '@mui/material/TableHead';
import { useHistory } from "react-router-dom/";
import paths from "../../../constants/paths";



import {
  Container,
  Image,
  EditIcon,

} from './styles'

function ListProducts() {
  const [products, setProducts] = useState()
  const { push } = useHistory()

  
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products');

      setProducts(data);
    }

    loadOrders();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <LocalOfferOutlinedIcon style={{ color: '#008000' }} />
    }
    return <HighlightOffIcon style={{ color: '#ff0000' }} />

  }

  function editProduct(product){
    push(paths.EditProduct, { product })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align='center'>Ofertas</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Image src={product.url} alt='imagem-produto' />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align='center'>{isOffer(product.offer)}</TableCell>

                  <TableCell>
                    <EditIcon onClick={() => editProduct(product)}/>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts