import './App.css'
import ProjectRoutes from './routes'
import RouterWrapper from './routes/RouterWrapper';

function App(props: any) {

  return (
    <>
      <RouterWrapper>
        <ProjectRoutes />
      </RouterWrapper>
    </>
  )
}

export default App;
