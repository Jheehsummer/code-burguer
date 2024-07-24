import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import paths from '../../constants/paths';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ListLinks = [

  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: LocalMallOutlinedIcon
  },

  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ShoppingCartOutlinedIcon
  },

  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  }
]

export default ListLinks