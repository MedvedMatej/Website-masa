/* document.body.onload = () => {
    var audio = new Audio('file.mp3');
    audio.play();
    console.log("neki")
}; */

function toggleTheme(){
    let theme = document.getElementById("themeChanger");
    if (theme.classList.contains("pink")){
        theme.classList.add("blue");
        theme.classList.remove("pink");
        document.documentElement.style.setProperty('--text-primary', '#575757');
        document.documentElement.style.setProperty('--text-secondary', '#000000');
        document.documentElement.style.setProperty('--bg-primary', '#92d7ff');
        document.documentElement.style.setProperty('--bg-secondary', '#379eff');
        document.documentElement.style.setProperty('--background', '#f0faff');
    }
    else{
        theme.classList.remove("blue");
        theme.classList.add("pink");
        document.documentElement.style.setProperty('--text-primary', '#ececec');
        document.documentElement.style.setProperty('--text-secondary', '#fbfbfb');
        document.documentElement.style.setProperty('--bg-primary', '#ff92c5');
        document.documentElement.style.setProperty('--bg-secondary', '#EB608F');
        document.documentElement.style.setProperty('--background', '#fff0f4');
    }

}

document.getElementById('themeChanger').onclick = toggleTheme;