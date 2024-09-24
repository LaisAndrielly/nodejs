// import logo from'../imagens/Instagrаm-Logo.png';
import logo from'../imagens/logo_insta.png'

export default function ConteudoLateral(){
    return(
        <div className='ConteudoLateral'>
            <img src={logo} alt='Logo' />
            <div>Logo</div>
            
            <div>
                <div>menu
                <ul>
                    <li>home</li>
                    <li>Pesquisa</li>
                    <li>Explorar</li>
                    <li>Mensagens</li>
                </ul>
                </div>
            </div>
        </div>
    )
}