import React from "react";
import css from '../Home/Home.module.css'

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>Welcome to PhoneBook</h1>
      <p className={css.paragraph}>Search, add and manage your contacts easily with our app.</p>
    </div>  
  )
}

