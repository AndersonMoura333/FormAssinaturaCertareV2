import tracoGTM from './assents/tracoGTM.svg'
import certare from './assents/logoCertare.png'
import certareTec from './assents/Certaretec.png'
import gpCertare from './assents/EmpresaGrupoCertare.png'
import gtmEngenharia from './assents/logoGTM.png'
import iconLn from './assents/linkedin-icon-2x.png'
import iconFb from './assents/facebook-icon-2x.png'
import iconIn from './assents/instagram-icon-2x.png'
import linkSiteIcon from './assents/link-icon-2x.png'
import telIcon from './assents/phone-icon-2x.png'
import emailIcon from './assents/email-icon-2x.png'
import tracoSuperior from './assents/tracoCertare.svg'
import selogptw from './assents/selo-gptw.png'
import selo10Anos from './assents/selo-10anos.png'
import './styles.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [departamento, setDepartamento] = useState('1')
  const [logo, setLogo] = useState(certareTec)
  const [logoStyle, setLogoStyle] = useState({classeLogo:'img-logo-certare', cor:'background-color: #367f59;', gtm:false, tec: false,certare:true})
 const [links, setLinks] = useState({ site:'https://www.grupocertare.com/', facebook:'https://pt-br.facebook.com/certareengenharia'
                                          ,instagram:'https://www.instagram.com/certareengenharia/', linkedin:'https://www.linkedin.com/company/certareengenhariaeconsultoria' })
  useEffect(()=>{
    switch (departamento) {
      case '1':
        setLogo(certare)
        setLogoStyle({classeLogo:'img-logo-certare', cor:'#367f59',gtm:false, tec: false,certare:true})
        setLinks({site:'https://www.grupocertare.com/', facebook:'https://pt-br.facebook.com/certareengenharia',
                  instagram:'https://www.instagram.com/certareengenharia/', linkedin:'https://www.linkedin.com/company/certareengenhariaeconsultoria' })
        console.log(logo)
        break;
        case '2':
        setLogo(certareTec)
        setLogoStyle({classeLogo:'img-logo-certareTec', cor:'#2d695d',gtm:false, tec: true,certare:false})
        setLinks({site:'https://certaretec.com.br', facebook:'https://www.facebook.com/Certaretec-101459775703225',
                  instagram:'https://www.instagram.com/certaretec/', linkedin:''})
        break;
        case '3':
          setLogo(gtmEngenharia)
          setLogoStyle({classeLogo:'img-logo-certareGMT',cor:'#008ec0',gtm:true, tec: false,certare:false})
          setLinks({site:'https://www.gtmengenharia.com', facebook:'https://www.facebook.com/gtm.engenharia0',
                    instagram:'https://www.instagram.com/gtm.engenharia/', linkedin:'https://www.linkedin.com/company/gtm-engenharia/'})
          break;
      default:
        break;
    }
  
  },[departamento]);

  return (
    <div className="container">
     
     <div className="wrapper card">
            <h2>Fa??a sua assinatura</h2>
            <form>
                <div className="Form">
                    <input type="text" id="name" placeholder="Nome" onChange={e => setName(e.target.value)} required />
                    <input type="text" id="cargo" placeholder="Cargo" onChange={e => setCargo(e.target.value)} required/>
                    <input required type="tel" id="tel" pattern="\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4}" onChange={e => setTel(e.target.value)} placeholder="Telefone"/>
                    <input type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
                    <label>Selecione sua empresa:</label>
                    <select onChange={e => setDepartamento(e.target.value)}>
                      <option value={'1'} >Certare</option>
                      <option value={'2'}>CertareTec</option>
                      <option value={'3'} >GTM</option>
                    </select>
                </div>
            </form>
             
        </div>
        <div className='container-assinatura'>
          <div className='div-superior-assinatura'>
            <div >
            <img className={logoStyle.classeLogo} src={logo}></img>
            </div>
            <div>
              {logoStyle.gtm? (

                <img src={ tracoGTM} style={{backgroundColor:logoStyle.cor}} className='traco-superior'></img>
              ): (
                <img src={tracoSuperior}  style={{backgroundColor:logoStyle.cor}} className='traco-superior'></img>
              )}
            </div>
          <div className='form-assinado'>
            {name ?<b>{name}</b> :<b>Meu nome</b>}
            {cargo ?<p>{cargo}</p> :<p>Meu cargo</p>}
            <div className='form-linha'>
            <img className='icon-form' style={{backgroundColor: logoStyle.cor}} src={telIcon}></img>
            {tel ?<p>{tel} | 85 3231-3992</p> :<p>85 XXXXXXXXX | 85 3231-3992</p>}
            </div>
            <div className='form-linha'>
            <img className='icon-form' style={{backgroundColor: logoStyle.cor}} src={emailIcon}></img>
            {email ?<p>{email}</p> :<p>meu.nome@certare.com.br</p>}
            </div>
            <div className='form-linha'>
            <img className='icon-form' style={{backgroundColor: logoStyle.cor}} src={linkSiteIcon}></img>
            <a href={links.site}>{links.site}</a>
            </div>
           
          </div>
          <div className='icons-gtm'>
            <a className='a-icon-gtm' href={links.facebook}>
            <img className='icon-gtm' style={{backgroundColor: logoStyle.cor}} src={iconFb}></img>
            </a>
            {
              logoStyle.tec? (
                <></>
              ):(

            <a className='a-icon-gtm'href={links.linkedin}>
            <img className='icon-gtm' style={{backgroundColor: logoStyle.cor}} src={iconLn}></img>
            </a>
              )
            }
            <a className='a-icon-gtm' href={links.instagram}>
            <img className='icon-gtm' style={{backgroundColor: logoStyle.cor}} src={iconIn}></img>
            </a>
       
          </div>
        </div>
        <div>
        <div >
        {logoStyle.gtm? (<></>): (
<img src={tracoSuperior}  style={{backgroundColor:logoStyle.cor}} className='traco-horizontal'></img>
)}
        </div>
        {logoStyle.gtm? (<></>): (
          <>

          <div className='div-inferior-assinatura'>
            {logoStyle.certare?(

            <div>
              <img className='img-10anos' src={selo10Anos}></img>
              <img className='img-gpwt' src={selogptw}></img>
            </div>
            ):
            (<div></div>)
            }
            <img className='img-logo-gpCertare'  src={gpCertare}></img>
        
          </div>
          </>
        )}
        </div>
          </div>
    </div>
  );
}

export default App;
