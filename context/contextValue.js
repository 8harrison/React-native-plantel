import {createContext, useState} from 'react'

const Jogadores = [
    {
      nome: ' Kannemann',
      habilidade: '9.000',
      localizacao: { latitude: 0, longitude: 0, cidade: 'Concépcion', pais: 'Argentina'},
      foto: 'https://www.gremiopedia.com/images/thumb/b/b3/Walter_Kannemann.png/260px-Walter_Kannemann.png',
    },
    {
      nome: ' P. Geromel',
      habilidade: '7.200',
      localizacao: { latitude: 0, longitude: 0, cidade: 'São Paulo', pais: 'Brasil'},
      foto: 'https://www.ogol.com.br/img/jogadores/58/1039758_med__20230904210817_pedro_geromel.png',
    },
    {
      nome: ' Diego Costa',
      habilidade: '7.000',
      localizacao: { latitude: 0, longitude: 0, cidade: 'Sergipe', pais: 'Brasil'},
      foto: 'https://www.gremiopedia.com/images/4/44/Diego_da_Silva_Costa.png',
    },
    {
      nome: ' Soteldo',
      habilidade: '6.000',
      localizacao: { latitude: 0, longitude: 0, cidade: 'Acarigua', pais: 'Venezuela'},
      foto: 'https://www.gremiopedia.com/images/1/1a/Yeferson_Julio_Soteldo_Mart%C3%ADnez.png',
    },
  ]

export const ContextValue = createContext()

export default function Context({children}) {
  const [jogadores, setJogadores] = useState(Jogadores)
  return(
    <ContextValue.Provider value={{jogadores, setJogadores}}>{children}</ContextValue.Provider>
  )
} 