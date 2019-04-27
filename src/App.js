import React, {Component} from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

class App extends Component{
    state={
        citas : []
    };

  componentDidMount() {
      if (localStorage.getItem('citas')){
          this.setState({
              citas: JSON.parse(localStorage.getItem('citas'))
          })
      }

  }

  componentDidUpdate() {
      localStorage.setItem(
          'citas',
          JSON.stringify(this.state.citas)
      )
  }

    crearCita=(nuevaCita)=>{
      const citas = [...this.state.citas, nuevaCita]
      console.log(citas);
      this.setState({
          citas
      });
  };

  borrarCita = id=>{
      const citasActuales=[...this.state.citas];

      const citas = citasActuales.filter(cita=> cita.id !== id);

      this.setState({
          citas
      })

  };
  render(){
    return (
        <div className="container">
          <Header
              titulo={'Administrador de citas medicas'}
          />
          <div className='row'>
              <div className='col-md-6'>
                <AgregarCita
                  crearCita={this.crearCita}
                />
              </div>
              <div className='col-md-6'>
                  <ListaCitas
                      citas = {this.state.citas}
                      borrarCita={this.borrarCita}
                  />

              </div>
          </div>
        </div>
    );
  }
}

export default App;
