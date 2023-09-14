export default function Header() {
    return <nav className="fixed w-(1349px) mt-0 mb-0 top-0">
        <div className="h-3 w-20">
            <img width="800px" height="697" src="https://leao100.com.br/wp-content/uploads/2022/02/logo-leao100.png" alt="Logo leao 100" />
        </div>
        <div>
            <ul>
                <li><a href="">Início</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href=""><span><i></i></span>Categorias</a><ul><li><a href="">Copo</a></li>
                    <li><a href="">Relançamento</a></li>
                    <li><a href="">Pop</a></li>
                    <li><a href="">Les Bleus</a></li>
                    <li><a href="">Réveillon</a></li>
                    <li><a href="">Serviços</a></li></ul></li>
                <li><a href="">Promoção</a></li>
                <li><a href="">Minha conta</a></li>
                <li><a href="">R$</a></li>
            </ul>
        </div>
    </nav>
}