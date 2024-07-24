import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form"
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
} from './styles'
import { ErrorMessage } from "../../../components";

function NewProduct() {
  const [filename, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
    .test('required', 'Carregue um arquivo', value => {
      return value?.lenght > 0
    })
    .test('type', 'Carregue apenas arquivos JPEG', value => {
      return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png' || value[0]?.type === 'image/svg'

    })

  })

  const {register, handleSubmit, control, formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
})

  const onSubmit = async data => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await api.post('/products', productDataFormData)

    console.log(productDataFormData)
  }

  useEffect(() => {

  
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data)
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
          accept="image/png, image/jpeg, image/svg"
          {...register("file")}
          onChange={value => {
            setFileName(value.target.files[0]?.name)
          }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
        <Controller
        name='category'
        control={control}
        render={({ field }) => {
            
            return (
            <ReactSelect
            {...field}
            options={categories}
            getOptionLabel={cat => cat.name}
            getOptionValue={cat => cat.id}
            placeholder='Escolha a categoria'
          />
          )
        }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyle>Adicionar Produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default NewProduct