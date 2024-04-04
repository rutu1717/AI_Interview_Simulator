import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const supabase = createClient(
  "https://eatvfemgvbiwuzljhsmd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhdHZmZW1ndmJpd3V6bGpoc21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMDI1NDYsImV4cCI6MjAyNzc3ODU0Nn0.CaSDu7QuPworTX509rNlBCDmIVKaW-pEl9INfw4zRSc"
);
function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);
  async function SignOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }
  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>Succes</h1>
            <button onClick={() => SignOutUser()}>Sign Out</button>
          </>
        ) : (
          <>
            <h1>User is not Logged In</h1>
            <button onClick={() => navigate("/login")}>Go Back Home!</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default Success;
