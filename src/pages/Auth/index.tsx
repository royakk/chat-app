import { useState } from "react"
import { Login } from "../Login"
import { Signup } from "../Signup"


export  const Auth =()=>{
    const [showLoginPage, setShowLoginPage] = useState(false)
    return (
      <div>
        <div style={{ maxWidth: 400, width: '90%' }}>
          <div className="text-center">
            <h2>{showLoginPage ? 'Log in' : 'Signup'}</h2>
            {showLoginPage ? (
              <small>
                Not registered?, click
                <span onClick={() => setShowLoginPage(false)}>here</span>
                to register.
              </small>
            ) : (
              <small>
                Already registered?, click
                <span onClick={() => setShowLoginPage(true)}>here</span>
                to login.
              </small>
            )}
          </div>
          {showLoginPage ? <Login /> : <Signup />}
        </div>
      </div>
    )
}