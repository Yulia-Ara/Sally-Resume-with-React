'use strict'

const appRoot = document.querySelector('#application-root');

function App(props) {
    console.log(props);
    return (
        <header>
            {props.children}
        </header>
    );
};

ReactDOM.render(
    <App className='my-class'>
        <img src={`https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg`} alt={`White woman with curly dark hair, wearing a yellow sweater with images of zebras, blue pants. Arms crossed, staring straigh at the camera`}></img>
        <h1>Sally Student</h1>
        <address>
            <a className="email" href={`mailto:sallystudent@gmail.com`}>sallystudent@gmail.com</a><br/>
            <a href={`tel:+2075555342`}>207-555-5342</a><br/>
        </address>
    </App>,
    appRoot
);