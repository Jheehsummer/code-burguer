import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../../components";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/";


import {
  Container,
  Title,
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
  ContainerInput,
} from './styles';

function EditProduct() {
  const [filename, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { push, location: {
    state: { product } 
  } 
} = useHistory()


  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.boolean()

  })

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    const productDataFormData = new FormData();
    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);
    productDataFormData.append('offer', data.offer);

    await toast.promise(
      api.put(`products/${product.id}`, productDataFormData), {
      pending: 'Editando novo produto',
      success: 'Produto editado com sucesso 👌',
      error: 'Falha ao editar o produto 🤯'
    })

    setTimeout(() => {
      push('./listar-produtos')
    }, 1000);

  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Title>
            ALTERAR PRODUTO
          </Title>
        </div>
       
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} defaultValue={product.name}/>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} defaultValue={product.price}/>
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {filename || (
              <>
                <CloudDownloadOutlinedIcon />
                Carregue a imagem do produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg, image/svg+xml"
              {...register("file")}
              onChange={e => {
                setFileName(e.target.files[0]?.name);
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name='category'
            control={control}
            defaultValue={product.category}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder='Escolha a categoria'
                defaultValue={product.category}
              />
            )}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerInput>
          <input 
          type='checkbox' 
          {...register("offer")} 
          defaultChecked={product.offer} 
          /> Produto em oferta?
        </ContainerInput>

        <ButtonStyle>Editar Produto</ButtonStyle>
      </form>
    </Container>
  );
}

export default EditProduct;
