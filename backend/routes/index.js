import express from "express";
import authRoutes from "./auth.route.js";
import homeRoutes from "./home.route.js";
import mentorRoutes from "./mentor.route.js";
import userRoutes from "./user.route.js";
import serviceRoute from './service.route.js'

const router = express.Router();

// Register all route modules here
//router.use("/", homeRoutes)
//router.use("/auth", authRoutes); // final path: /api/auth/signup, /api/auth/signin

//other method

const Routes = [
  {
    path: "/",
    route: homeRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/mentor",
    route: mentorRoutes,
  },
  {
    path: "/user", // ✅ Register the /user route
    route: userRoutes,
  },
  {
    path: "/service",
    route: serviceRoute,
  },
];

Routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
