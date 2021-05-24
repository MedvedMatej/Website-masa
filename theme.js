/* document.body.onload = () => {
    var audio = new Audio('file.mp3');
    audio.play();
    console.log("neki")
}; */

function toggleTheme(){
    let theme = document.getElementById("themeChanger");
    if (theme.classList.contains("pink")){
        theme.classList.add("dark");
        theme.classList.remove("pink");
        document.documentElement.style.setProperty('--text-primary', '#f3f3f3');
        document.documentElement.style.setProperty('--text-secondary', '#ffffff');
        document.documentElement.style.setProperty('--bg-primary', '#5e5e5e');
        document.documentElement.style.setProperty('--bg-secondary', '#3E3E3E');
        document.documentElement.style.setProperty('--background', '#e3e3e3');
        document.documentElement.style.setProperty('--logo', '#e5e5e5');
        document.documentElement.style.setProperty('--logo-text', '#ffffff');
    }
    else{
        theme.classList.remove("dark");
        theme.classList.add("pink");
        document.documentElement.style.setProperty('--text-primary', '#ececec');
        document.documentElement.style.setProperty('--text-secondary', '#fbfbfb');
        document.documentElement.style.setProperty('--bg-primary', '#ff92c5');
        document.documentElement.style.setProperty('--bg-secondary', '#EB608F');
        document.documentElement.style.setProperty('--background', '#fff0f4');
        document.documentElement.style.setProperty('--logo', '#FB8DB6');
        document.documentElement.style.setProperty('--logo-text', '#000000');
    }

}

document.getElementById('themeChanger').onclick = toggleTheme;