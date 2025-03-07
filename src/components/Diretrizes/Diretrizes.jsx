import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer"
import "./Diretrizes.css";


function Diretrizes () {
    
    return (
    <div>
        <img className="logo-image" src={logo} alt="imagem do logo" />
        <h2 className="Títulos">📝 Termos de uso - Desbrave</h2>
        <p className="textos">Bem-vindo ao Desbrave, uma plataforma digital focada em educação, cultura e desafios interativos. <br/>
         Ao acessar e utilizar nossos serviços, você concorda com estes Termos de Uso. <br/>
         Recomendamos que leia atentamente para entender suas responsabilidades e direitos.</p>

         <h4 className="Subtítulos">Uso da plataforma</h4>
         <p className="textos">O Desbrave é uma plataforma educacional que oferece cursos online, desafios gamificados e fóruns de discussão. <br/> 
         O uso é permitido a qualquer pessoa interessada em aprender, compartilhar conhecimento e se desenvolver, desde que respeite <br/>
         a legislação vigente e as diretrizes da comunidade. <br/>
           Ao criar uma conta, você se compromete a fornecer informações verdadeiras, manter seus dados atualizados e <br/>
           proteger suas credenciais de acesso. O compartilhamento de senhas ou o uso indevido de contas de terceiros é proibido.</p>

          <h4 className="Subtítulos">Direitos Autorais e Propriedade Intelectual</h4>
          <p className="textos">Todo o conteúdo da plataforma, incluindo textos, vídeos, imagens, gráficos, logotipos e materiais de cursos, é protegido por leis de direitos autorais. </p>

          <h4 className="Subtítulos">Conduta do Usuário</h4>
          <p className="textos">Esperamos que todos os usuários mantenham uma postura respeitosa e ética. Não é permitido:</p>
          <p className="textos">❌ Publicar conteúdos ofensivos, discriminatórios ou que incitem ao ódio; <br/>
          ❌ Praticar atos de cyberbullying, assédio ou violação de direitos de terceiros; <br/>
          ❌ Distribuir vírus, malwares ou qualquer outro código malicioso.</p>
          <p className="textos">O Desbrave se reserva o direito de suspender ou excluir contas que violem essas regras, sem aviso prévio.</p>

          <h4 className="Subtítulos">Modificações na Plataforma e nos Termos</h4>
          <p className="textos">Estamos sempre aprimorando nossos serviços. Por isso, podemos atualizar estes Termos de Uso a qualquer momento. <br/>
            Recomendamos que você revise periodicamente. O uso contínuo da plataforma após alterações significa que você concorda com os novos termos.</p>

        <h4 className="Subtítulos">Contato</h4>
        <p className="textos">Se você tiver dúvidas ou precisar de suporte, entre em contato conosco pelo e-mail: suporte@desbrave.com.</p>

        <h2 className="Títulos">🔐 Política de Privacidade – Desbrave</h2>
        <p className="textos">O Desbrave valoriza a sua privacidade e está comprometido em proteger seus dados pessoais. <br/>
        Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações.</p>

        <h4 className="Subtítulos">Coleta de Dados</h4>
        <p className="textos">Coletamos informações que você nos fornece diretamente ao se cadastrar na plataforma, como nome, e-mail e dados de contato. <br/>
         Também coletamos automaticamente algumas informações de navegação, como endereço IP, tipo de dispositivo, navegador e tempo de uso da plataforma.</p>

         <h4 className="Subtítulos">Uso das Informações</h4>
         <p className="textos">Utilizamos seus dados para:</p>
         <p className="textos">● Personalize sua experiência de aprendizado; <br/>
         ● Enviar notificações sobre cursos, desafios e novidades da plataforma; <br/>
         ● Melhorar nossos serviços com base em suas interações; <br/>
         ● Garantir a segurança da plataforma e prevenir atividades maliciosas. </p>

         <h4 className="Subtítulos">Compartilhamento de Dados</h4>
         <p className="textos">Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando:</p>
        <p className="textos">● For necessário para o funcionamento da plataforma (como serviços de hospedagem); <br/>
        ● Houve exigência legal ou judicial; <br/>
        ● Você autoriza expressamente.</p>

        <h4 className="Subtítulos">Segurança dos Dados</h4>
        <p className="textos">Adotamos medidas de segurança para proteger suas informações contra acessos não autorizados, perda, uso indevido ou divulgação indevida. <br/>
        Isso inclui segurança de dados, protocolos de segurança e monitoramento contínuo.</p>

        <h4 className="Subtítulos">Cookies e Tecnologias de Rastreamento</h4>
        <p className="textos">Usamos cookies para melhorar sua experiência, personalizar conteúdos e entender como você interage com a plataforma.</p>

        <h4 className="Subtítulos">Seus direitos</h4>
        <p className="textos">Você tem o direito de:</p>
        <p className="textos">● Acessar, corrigir ou atualizar suas informações pessoais; <br/>
        ● Solicitar a exclusão dos seus dados da plataforma; <br/>
        ● Retire a autorização para o uso de seus dados a qualquer momento. </p>

        <p className="textos">Para exercer esses direitos, entre em contato pelo e-mail: privacidade@desbrave.com</p>
        <h4 className="Subtítulos">Alterações na Política de Privacidade</h4>
        <p className="textos">Esta política pode ser atualizada periodicamente para refletir mudanças na legislação ou em nossos serviços.</p>

        <Footer/>
    </div>


    );

}


export default Diretrizes


