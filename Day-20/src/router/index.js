import React from "react";

// 重點觀察位置
const routes = [
  {
    path: "/car",
    component: React.lazy(() => import("../components/Car"))
  },
  {
    path: "/airplane",
    component: React.lazy(() => import("../components/Airplane"))
  },
  {
    path: "/nested",
    component: React.lazy(() => import("../components/Nested")),
    routes: [
      {
        path: "/cmp-1",
        component: React.lazy(() => import("../components/CmpOne"))
      },
      {
        path: "/cmp-2",
        component: React.lazy(() => import("../components/CmpTwo"))
      }
    ]
  }
];

export default routes;
