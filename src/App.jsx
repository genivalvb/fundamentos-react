import React from 'react'

import Primeiro from './components/basics/Primeiro'
import Card from './components/layout/Card'

import './App.css'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Repetition from './components/basics/Repetition'
import Conditional from './components/basics/Conditional'
import ConditionalComIf from './components/basics/ConditionalComIF'
import Father from './components/comunication/direct/Father'
import Super from './components/comunication/indirect/Super'

export default (props) => (
    <div className="App">
        <Card titulo="#08 - Comunication indirect - son to father" color="#000">
            <Super></Super>
        </Card>
        <Card titulo="#07 - Comunication direct" color="#4298B5">
            <Father lastname="Russein"></Father>
        </Card>
        <Card titulo="#06 - Conditional v02" color="#92B06A">
            <ConditionalComIf numero={100} />
        </Card>
        <Card titulo="#05 - Conditional v01" color="#FF85CB">
            <Conditional numero={11} />
        </Card>
        <Card titulo="#04 - Repetition" color="#D96459">
            <Repetition />
        </Card>
        <Card titulo="#03 - Componente Com Filhos" color="#008BBA">
            <ComFilhos>
                <ul>
                    <li>Jessica</li>
                    <li>Liliane</li>
                    <li>Edilene</li>
                    <li>Roberta</li>
                    <li>Miriam</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componenente Com Parametro" color="#E94C6F">
            <ComParametro titulo='Esse é o título' subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
            <Primeiro />
        </Card>


    </div>
)