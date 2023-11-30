import React from "react";
const authLayout = (ChildComponent) => {
    class AuthLayout extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {};
        }

        render(){
            return <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img alt="hey" style={{border:"10px solid gold",borderRadius:"15%", height:"600px"}} src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" className="img-fluid"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <ChildComponent {...this.props} />
                        </div>
                    </div>
                </div>
            </section>
        </>
        }
    }

    return AuthLayout;
}

export default authLayout;