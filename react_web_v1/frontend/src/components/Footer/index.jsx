import "bootstrap-icons/font/bootstrap-icons.css";
import logoProderj from "../../assets/images/logoProderj.png";

const Footer = () => (
  <footer className="py-3" style={{
    background: 'linear-gradient(to right, #330033, #14007A)',
    width: '100%',
    color: '#fff',
    position: 'relative',
    zIndex: 10
  }}>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-3 col-12 text-center text-md-start mb-2 mb-md-0">
          <img src={logoProderj} alt="Logo Proderj" className="img-fluid" style={{ maxHeight: "40px" }} />
        </div>
        <div className="col-md-3 col-12 text-center mb-2 mb-md-0 text-white">
          <div className="badge text-wrap">
            Seplag Secretaria de Est de Planejamento e Gestão<br />
            Endereço: R. Silva Cardoso, 349 - Bangu, Rio de Janeiro - RJ<br />
            CEP: 21810-000<br />
          </div>
        </div>
        <div className="col-md-3 col-12 text-center text-md-end">
          <div className="badge text-wrap">
            Unidade UERJ Rua São Francisco Xavier, 524 - 2º andar, sala 61 - Maracanã, Rio de Janeiro RJ<br />
            CEP 20550-900
          </div>
        </div>
        <div className="col-md-3 col-12 text-center mb-2 mb-md-0 text-white">
          <div className="d-flex justify-content-evenly w-100">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;