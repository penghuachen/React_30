import React, { Suspense } from "react";
import "./styles.css";
import { NavLink, Route, Switch } from "react-router-dom";
import routes from "./router";
export default function App() {
  return (
    // 重點觀察位置
    <Suspense fallback={<div></div>}>
      <div className="App">
        <h1>基礎 Router config 配置</h1>
        <nav>
          <NavLink to="/car">Car</NavLink>
          <NavLink to="/airplane">Airplne</NavLink>
          <NavLink to="/nested">Nested</NavLink>
        </nav>
        {/* 重點觀察位置 */}
        <Switch>
          {routes.map((route, index) => {
            // console.log(route);
            return (
              <Route
                key={index}
                path={route.path}
                // 重點觀察位置
                render={(props) => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            );
          })}
        </Switch>
      </div>
    </Suspense>
  );
}
