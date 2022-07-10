import logo from './img/spotify.svg';
import '../App.css';
import React, { Component } from "react";
import NavBar from './nav';
import axios from "axios";
import {
    Link
} from 'react-router-dom';
export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            display: "",
            dark: "",
            currentMode: "Dark Theme"
        }
        this.toggle = this.toggle.bind(this)
        this.toggleDarkMode = this.toggleDarkMode.bind(this)
    }
    toggle() {
        if (this.state.display == '') {
            this.setState({
                display: "close"
            })
        } else if (this.state.display == 'close') {
            this.setState({
                display: ""
            })
        }
    }

    toggleDarkMode() {
        if (this.state.dark == '') {
            this.setState({
                dark: "dark",
                currentMode: "Light Theme"
            })
            localStorage.setItem("theme", "dark")
        } else if (this.state.dark == 'dark') {
            this.setState({
                dark: '',
                currentMode: "Dark Theme"
            })
            localStorage.setItem("theme", "")
        }
    }


    componentDidMount() {
        const loadGenres = async () => {
            const response = await axios.get("http://localhost:8080/api/classe/random.php")
            const data = response.data
            if (localStorage.getItem("theme")) {
                this.setState({
                    dark: localStorage.getItem("theme")
                })
            }
            this.setState({
                data: data,
                display: "close"
            })
            console.log(data)
        }
        loadGenres()
    }
    render() {
        return <div className={"App " + this.state.dark}>
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

            <nav className={"sidebar " + this.state.display}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={logo} className="logo" alt="logo" />
                        </span>
                        <div className="text logo-text">
                            <span className="name">Spotify</span>
                            <span className="phrase">The best music</span>
                        </div>
                    </div>

                    <i onClick={this.toggle} className='bx bx-chevron-right toggle'></i>
                </header>

                <div className="menu-bar">

                    <NavBar />

                    <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">{this.state.currentMode}</span>

                            <div className="toggle-switch">
                                <span className="switch" onClick={this.toggleDarkMode}></span>
                            </div>
                        </li>

                    </div>
                </div>

            </nav>

            <section className="home">
                <nav className="home-nav">Spotify</nav>
                <main>
                    <div className="container">
                        <div className="display">
                            <ul className="list-group">
                                {this.state.data.map((item) => (
                                    <div className='border' key={item.id}>
                                        <div className='random'>
                                            <h3><Link className="nav-link" to={"/album_info?&album=" + item.album_id}>{item.album_name}</Link></h3>
                                            <li ><Link className="nav-link" to={"/album_info?&album=" + item.album_id}><img src={item.cover_small} alt="profile picture" /></Link></li>
                                            <p>Date de sortie : {item.release_date}</p>
                                            <p>Nombre de morceaux : {item.nb_tracks}</p>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            </section>

        </div>
    }

}