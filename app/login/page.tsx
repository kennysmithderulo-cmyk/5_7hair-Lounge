'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function handleLogin(){
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if(error) alert('Login failed: '+error.message)
    else {
      alert('Logged in as 5_7hairlounge admin!')
      window.location.href='/admin'
    }
  }

  return(
    <div style={{padding:40}}>
      <h1>5_7hairlounge Login</h1>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} style={{display:'block',margin:10,padding:10,width:'100%'}}/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} style={{display:'block',margin:10,padding:10,width:'100%'}}/>
      <button onClick={handleLogin} style={{background:'#7A1B4A',color:'white',padding:10,width:'100%'}}>LOG IN</button>
    </div>
  )
}
