import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing:border-box;
  outline: 0;

  font-family: 'Marvel', sans-serif ;
  font-weight:400;
}

.react-modal-overlay {
  background-color: rgba(0,0,0,0.5) ;
  position: fixed;
  top:0 ;
  bottom:0 ;
  right:0 ;
  left:0 ;

  display:flex ;
  justify-content:center ;
  align-items:center ;
}

.react-modal-content {
  width:100% ;
  font-size:20px ;
  max-width:1200px ;
  height: 400px;
  background-color:#FFFFFF  ;
  padding: 2rem;
  border-radius: 0.25rem ;
}

.container-btn-modal {
  display:flex ;
  justify-content:center ;
  align-items:center ;
  margin-top:20px ;
}

.btn {
  width:150px ;
  font-size:20px ;
}




`;