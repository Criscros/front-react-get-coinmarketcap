import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-modal';
import './Home.css';
import '../../assets/css/bootstrap/css/bootstrap.min.css'

function Home() {


  useEffect(() => {

    $('#Terms_Condition').modal();

    $('#Terms_Condition').modal({
      backdrop: 'static',
      keyboard: true, 
      show: true
    }); 
    $("#Terms_Condition").modal('show');

    $('#my-modal-ok').on('click', function() {
      $.modal.close();
    });



  }, []);




  return (
    <div className='logo'>
      <div className="container">

        <div className="col-md-12">

            
        </div> 

        {/* MODAL TERMS AND CONDITON */}
        <div className="modal" role="dialog" id="Terms_Condition">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

              </div>
              <div className="modal-body">
                <h5 className="modal-title">EFROUTING</h5>
                <p>
                      Es un plataforma para <b>Crypto</b>  .
                      Puedes visualizar informacion detallada
                  </p>
              </div>
              <div className="modal-footer">
                <button type="button" id="my-modal-ok" className="btn btn-primary">Aceptar</button>
                <button type="button" id="my-modal-no" className="btn btn-secondary">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;