import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav> {
      links.map((name, index) =>
        <a href={"#"+name} key={index}>{name}</a>
      )
    }
    </nav>;
}

export default NavBar;
