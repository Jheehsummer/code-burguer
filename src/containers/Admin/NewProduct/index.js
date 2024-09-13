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
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
} from './styles';

function NewProduct() {
  const [filename, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value && value.length > 0;
      })
      .test('type', 'Carregue apenas arquivos JPEG, PNG ou SVG', value => {
        return (
          value &&
          (value[0]?.type === 'image/jpeg' ||
            value[0]?.type === 'image/png' ||
            value[0]?.type === 'image/svg+xml')
        );
      })
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    const productDataFormData = new FormData();
    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);

    await toast.promise(api.post('/products', productDataFormData), {
      pending: 'Criando novo produto',
      success: 'Produto criado com sucesso 👌',
      error: 'Falha ao criar o produto 🤯'
    })

    setTimeout(() => {
      push('./listar-produtos')
    }, 1000);


    console.log(productDataFormData);
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
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
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
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder='Escolha a categoria'
              />
            )}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyle>Adicionar Produto</ButtonStyle>
      </form>
    </Container>
  );
}

export default NewProduct;