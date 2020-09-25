import "./styles.css";

const isShow = true;

document.getElementById("app").innerHTML = `
  ${isShow ? "<p>I'm here!</p>" : null} 
`;
