import {FirstComponent} from './FirstComponent.tsx'
import {secondComponent as SecondComponent} from './secondComponent.tsx'

interface MainViewProps 
{
  cualMuestro: number
}

const MainComponent = ({cualMuestro}:MainViewProps) => {
  return (
      <div>
        {
          cualMuestro == 1 ? <FirstComponent name='JSJS' lastname='Lmao' age={20}/> : <SecondComponent/>
                              
        }
      </div>
  )
}

export default MainComponent