import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="{require('../public/img/logo.svg').default}" alt="logo"/>
                </div>
                
                <nav className="nav">
            
                    <a className="nav-link" href="#">Приложение</a>
                    <a className="nav-link" href="#">Возможности</a>
                    <a className="nav-link" href="#">Стоимость</a>
                    <a className="nav-link" href="#">Блог</a>
                    <a className="nav-link" href="#">Контакты</a>
                    
                </nav>
                <div className="appstore">Appstore</div>
            </div>
            
        </header>
    )
}

