import express from "express";
import { usersRoleController } from "../controllers/usersRole.controller.js";

export const usersRoleRouter = express.Router();
 
usersRoleRouter.put('/premium/:uid', usersRoleController.toggleUserRole);

