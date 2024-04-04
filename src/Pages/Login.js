import { createClient } from '@supabase/supabase-js'
import { Auth} from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';
const supabase = createClient(
    "https://eatvfemgvbiwuzljhsmd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhdHZmZW1ndmJpd3V6bGpoc21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMDI1NDYsImV4cCI6MjAyNzc3ODU0Nn0.CaSDu7QuPworTX509rNlBCDmIVKaW-pEl9INfw4zRSc"
);

function Login() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange((event) => {
    if(event === "SIGNED_IN"){
        //redirect to success page
        navigate( "/success" );
    }
})
    return (
      <div className="App">
        <header className="App-header">
          <Auth
            supabaseClient={supabase}
            appearance={{theme:ThemeSupa}}
            theme='dark'
            providers={["google"]}
          />
        </header>
      </div>
    );
  }
  
  export default Login;