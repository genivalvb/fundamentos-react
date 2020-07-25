import React from 'react'

import Primeiro from './components/Primeiro'
import Card from './components/layout/Card'

import './App.css'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repetition from './components/Repetition'
import Conditional from './components/Conditional'
import ConditionalComIf from './components/ConditionalComIF'

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Conditional v02">
            <ConditionalComIf numero={100} />
        </Card>
        <Card titulo="#05 - Conditional v01">
            <Conditional numero={11} />
        </Card>
        <Card titulo="#04 - Repetition">
            <Repetition />
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
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
        <Card titulo="#02 - Componenente Com Parametro">
            <ComParametro titulo='Esse é o título' subtitulo="Esse é o subtítulo" />
        </Card>
    
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>

        
    </div>
)