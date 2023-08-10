
import './Footer.css'

const Footer = ()=>{

        return(
            <>

                <div className='footer'>
                    <div className='top'>

                        <div>
                            <h1>Shopping Cart</h1>
                            <p>No Fikr!! Only Shopping ker</p>
                        </div>
                   

                    </div>
                    <div className='bottom'>
                        <div>
                            <h4>Project</h4>
                            <a href='/'>Changelog</a>
                            <a href='/'>Status</a>
                            <a href='/'>License</a>
                            <a href='/'>All Versions</a>
                        </div>
                        <div>
                            <h4>Community</h4>
                            <a href='/'>Github</a>
                            <a href='/'>Issues</a>
                            <a href='/'>Project</a>
                            <a href='/'>Twitter</a>
                        </div>
                        <div>
                            <h4>Help</h4>
                            <a href='/'>Support</a>
                            <a href='/'>Troubleshootnig</a>
                         
                            <a href='/'>ContactUs</a>
                        </div>

                    </div>

                </div>
            </>
        )

}

export default Footer;