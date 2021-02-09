import { BlogPost } from "./tarea/Tarea1.js";
import { MatchNombre, PasswordInput, ValidationInput } from "./tarea/Tarea2.js";

ReactDOM.render(
  <div>
    <BlogPost
      titulo="Perros"
      parrafos={
        "Hoy vi un Perro.\nEl Perro era negro, era más grande que otros perros, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\nCreo que puede haber sido un oso."
      }
      autor={{
        nombre: "Gonzalo Gorgojo",
        titulo: "Software Developer Jr",
        imagen:
          "https://avatars.githubusercontent.com/u/49298587?s=400&u=0274efde178936612760f1d5814cd35d9cc80cbc&v=4",
      }}
    />
    <MatchNombre nombre="gonzalo" />
    <PasswordInput minLength="5" />
    <ValidationInput
      validation={(value) =>
        value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      }
      isPassword={false}
    />
  </div>,
  document.getElementById("react-app")
);
